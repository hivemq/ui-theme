/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '~/test/test-utils'
import { colorModes, HiveSwitch } from './HiveSwitch'

function mockReducedMotion(reduce: boolean) {
  return vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string) =>
      ({
        matches: reduce && query.includes('prefers-reduced-motion'),
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }) as MediaQueryList,
  )
}

describe('HiveSwitch', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Rendering', () => {
    it('should render a labelled radio for every color mode', () => {
      render(<HiveSwitch />)
      expect(screen.getByRole('group', { name: 'Color mode' })).toBeInTheDocument()
      for (const mode of colorModes) {
        expect(screen.getByRole('radio', { name: mode.label })).toBeInTheDocument()
      }
    })

    it('should hide the bee from assistive technology', () => {
      const { container } = render(<HiveSwitch />)
      expect(container.querySelector('.hive-bee')).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('With reduced motion', () => {
    beforeEach(() => {
      mockReducedMotion(true)
    })

    it('should switch the document to dark mode immediately', async () => {
      const { user } = render(<HiveSwitch />)
      await user.click(screen.getByText('Dark'))
      expect(document.documentElement).toHaveClass('dark')
      expect(screen.getByRole('radio', { name: 'Dark' })).toBeChecked()
      expect(screen.getByTestId('honey-dark')).toHaveAttribute('data-filled')
    })

    it('should switch the document back to light mode and remember it', async () => {
      const { user } = render(<HiveSwitch />)
      await user.click(screen.getByText('Light'))
      expect(document.documentElement).toHaveClass('light')
      await waitFor(() => expect(localStorage.getItem('theme')).toBe('light'))
    })

    it('should let the system setting decide', async () => {
      const { user } = render(<HiveSwitch />)
      await user.click(screen.getByText('Dark'))
      await user.click(screen.getByText('System'))
      expect(screen.getByRole('radio', { name: 'System' })).toBeChecked()
      await waitFor(() => expect(localStorage.getItem('theme')).toBe('system'))
    })

    it('should move between modes with the arrow keys', async () => {
      const { user } = render(<HiveSwitch />)
      await user.click(screen.getByText('Light'))
      await user.keyboard('{ArrowRight}')
      expect(screen.getByRole('radio', { name: 'Dark' })).toBeChecked()
      expect(document.documentElement).toHaveClass('dark')
    })
  })

  describe('With motion', () => {
    beforeEach(() => {
      mockReducedMotion(false)
    })

    it('should empty the honey while the bee flies and fill the new cell on landing', async () => {
      const { user } = render(<HiveSwitch />)
      await user.click(screen.getByText('Dark'))
      expect(screen.getByRole('radio', { name: 'Dark' })).toBeChecked()
      expect(screen.getByTestId('honey-dark')).not.toHaveAttribute('data-filled')
      await waitFor(() => expect(screen.getByTestId('honey-dark')).toHaveAttribute('data-filled'), {
        timeout: 2000,
      })
      expect(document.documentElement).toHaveClass('dark')
    })

    it('should dissolve the old page and hold the last frame so it never flashes back', async () => {
      const startViewTransition = vi.fn((update: () => void) => {
        update()
        return { ready: Promise.resolve(), finished: Promise.resolve() }
      })
      const animate = vi.fn()
      Object.assign(document, { startViewTransition })
      Object.assign(document.documentElement, { animate })
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')

      try {
        const { user } = render(<HiveSwitch />)
        await user.click(screen.getByText('Dark'))
        await waitFor(() => expect(animate).toHaveBeenCalledTimes(1), { timeout: 2000 })

        const [keyframes, options] = animate.mock.calls[0]
        expect(startViewTransition).toHaveBeenCalledTimes(1)
        expect(keyframes.clipPath.length).toBeGreaterThan(1)
        expect(options).toMatchObject({
          pseudoElement: '::view-transition-old(root)',
          fill: 'forwards',
        })
        expect(document.documentElement).toHaveClass('dark')
      } finally {
        Reflect.deleteProperty(document, 'startViewTransition')
        Reflect.deleteProperty(document.documentElement, 'animate')
      }
    })
  })
})
