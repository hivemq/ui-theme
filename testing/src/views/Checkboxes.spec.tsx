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
import { render, screen } from '~/test/test-utils'
import { semanticColorPalettes } from './ButtonVariations'
import { Checkboxes, checkboxSizes, checkboxStates, checkboxVariants } from './Checkboxes'

describe('Checkboxes', () => {
  describe('Rendering', () => {
    it('should render the section heading', () => {
      render(<Checkboxes />)
      expect(screen.getByRole('heading', { name: 'Checkboxes' })).toBeInTheDocument()
    })

    it('should render every variant and palette in every state, plus the sizes', () => {
      render(<Checkboxes />)
      expect(screen.getAllByRole('checkbox')).toHaveLength(
        (checkboxVariants.length + semanticColorPalettes.length) * checkboxStates.length +
          checkboxSizes.length,
      )
    })
  })

  describe('Color palettes', () => {
    it('should render a row for every semantic palette', () => {
      render(<Checkboxes />)
      for (const palette of semanticColorPalettes) {
        const row = screen.getByTestId(`checkbox-palette-${palette}`)
        expect(row.querySelectorAll('input[type="checkbox"]')).toHaveLength(checkboxStates.length)
      }
    })

    it('should label the default row with the blue the recipe pins', () => {
      render(<Checkboxes />)
      expect(screen.getByText('default (blue)')).toBeInTheDocument()
    })
  })

  describe('States', () => {
    it('should disable the disabled column', () => {
      render(<Checkboxes />)
      const disabled = screen
        .getAllByRole('checkbox')
        .filter((input) => (input as HTMLInputElement).disabled)
      expect(disabled).toHaveLength(checkboxVariants.length + semanticColorPalettes.length)
    })

    it('should toggle when clicked', async () => {
      const { user } = render(<Checkboxes />)
      const [first] = screen.getAllByRole('checkbox', { name: 'Clean start' })
      expect(first).not.toBeChecked()
      await user.click(first)
      expect(first).toBeChecked()
    })
  })
})
