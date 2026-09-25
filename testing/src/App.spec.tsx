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

import { describe, expect, it } from 'vitest'
import { render, screen, within } from '~/test/test-utils'
import { themeVersion } from '~/util/tokens'
import App, { navGroups } from './App'
import { REPOSITORY_URL } from './views/GetStarted'

describe('App', () => {
  const navItems = navGroups.flatMap((group) => group.items)

  describe('Rendering', () => {
    it('should render the page title', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('HiveMQ UI Theme')
    })

    it('should render one section per navigation item', () => {
      const { container } = render(<App />)
      expect(container.querySelectorAll('main section')).toHaveLength(navItems.length)
    })
  })

  describe('Navigation', () => {
    it('should render a link for every section', () => {
      render(<App />)
      const nav = screen.getByRole('navigation', { name: 'Sections' })
      expect(nav.querySelectorAll('a')).toHaveLength(navItems.length)
    })

    it('should point every link at an existing section', () => {
      const { container } = render(<App />)
      for (const item of navItems) {
        expect(screen.getByRole('link', { name: item.label })).toHaveAttribute(
          'href',
          `#${item.id}`,
        )
        expect(container.querySelector(`section#${item.id}`)).toBeInTheDocument()
      }
    })

    it('should mark the first section as current by default', () => {
      render(<App />)
      expect(screen.getByRole('link', { name: navItems[0].label })).toHaveAttribute(
        'aria-current',
        'true',
      )
    })
  })

  describe('Footer', () => {
    it('should name the theme version and link to the repository', () => {
      render(<App />)
      const footer = screen.getByRole('contentinfo')
      expect(footer).toHaveTextContent(`@hivemq/ui-theme ${themeVersion}`)
      expect(within(footer).getByRole('link', { name: 'View on GitHub' })).toHaveAttribute(
        'href',
        REPOSITORY_URL,
      )
    })
  })

  describe('Accessibility', () => {
    it('should label every section with its heading', () => {
      const { container } = render(<App />)
      for (const item of navItems) {
        const section = container.querySelector(`section#${item.id}`)
        const heading = container.querySelector(`#${item.id}-title`)
        expect(section).toHaveAttribute('aria-labelledby', `${item.id}-title`)
        expect(heading?.textContent).toBeTruthy()
      }
      expect(within(screen.getByRole('main')).getAllByRole('region')).toHaveLength(navItems.length)
    })
  })
})
