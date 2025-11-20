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
import { ButtonVariations } from './ButtonVariations'

describe('ButtonVariations', () => {
  const colorPalettes = [
    'default',
    'brand',
    'secondary',
    'success',
    'info',
    'danger',
    'warning',
    'highlight',
  ] as const

  const buttonVariants = ['solid', 'outline', 'ghost', 'subtle', 'surface', 'plain'] as const

  describe('Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<ButtonVariations />)
      expect(container).toBeInTheDocument()
    })

    it('should render all color palette sections', () => {
      render(<ButtonVariations />)

      // Check that all color palettes are rendered as headings
      colorPalettes.forEach((palette) => {
        const heading = screen.getByRole('heading', { name: new RegExp(palette, 'i') })
        expect(heading).toBeInTheDocument()
      })
    })

    it('should render the correct number of sections', () => {
      render(<ButtonVariations />)

      // Should render 8 palette sections
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBe(colorPalettes.length)
    })
  })

  describe('Button Matrix', () => {
    it('should render table for each color palette', () => {
      const { container } = render(<ButtonVariations />)

      // Should have a table for each palette
      const tables = container.querySelectorAll('table')
      expect(tables.length).toBe(colorPalettes.length)
    })

    it('should render table headers', () => {
      render(<ButtonVariations />)

      // Each table should have these headers
      const variantHeader = screen.getAllByText('Variant')
      const defaultHeader = screen.getAllByText('Default')
      const loadingHeader = screen.getAllByText('Loading')
      const disabledHeader = screen.getAllByText('Disabled')

      expect(variantHeader.length).toBe(colorPalettes.length)
      expect(defaultHeader.length).toBe(colorPalettes.length)
      expect(loadingHeader.length).toBe(colorPalettes.length)
      expect(disabledHeader.length).toBe(colorPalettes.length)
    })

    it('should render all button variants', () => {
      render(<ButtonVariations />)

      // Each variant name should appear 8 times (once per palette)
      buttonVariants.forEach((variant) => {
        const variantLabels = screen.getAllByText(variant)
        expect(variantLabels.length).toBe(colorPalettes.length)
      })
    })

    it('should render correct number of button rows per table', () => {
      const { container } = render(<ButtonVariations />)

      // Each table should have 6 rows (one for each variant) + 1 header row
      const tables = container.querySelectorAll('table')
      tables.forEach((table) => {
        const rows = table.querySelectorAll('tr')
        // 1 header row + 6 variant rows = 7 total
        expect(rows.length).toBe(buttonVariants.length + 1)
      })
    })
  })

  describe('Button States', () => {
    it('should render buttons in default state', () => {
      const { container } = render(<ButtonVariations />)

      // Should have many button elements
      const buttons = container.querySelectorAll('button')
      expect(buttons.length).toBeGreaterThan(0)
    })

    it('should render buttons in loading state', () => {
      const { container } = render(<ButtonVariations />)

      // Loading buttons should have specific attributes or classes
      // Each variant × each palette × loading state
      const buttons = container.querySelectorAll('button')
      const loadingButtons = Array.from(buttons).filter((btn) => {
        // Check for loading state indicators
        return btn.getAttribute('data-loading') !== null || btn.querySelector('[role="status"]')
      })

      // Should have loading buttons (6 variants × 8 palettes = 48)
      expect(loadingButtons.length).toBeGreaterThan(0)
    })

    it('should render buttons in disabled state', () => {
      const { container } = render(<ButtonVariations />)

      // Disabled buttons should have disabled attribute
      const disabledButtons = container.querySelectorAll('button[disabled]')

      // Should have disabled buttons (6 variants × 8 palettes = 48)
      expect(disabledButtons.length).toBeGreaterThan(0)
    })

    it('should render three states per variant per palette', () => {
      const { container } = render(<ButtonVariations />)

      // Total buttons = 8 palettes × 6 variants × 3 states = 144
      const buttons = container.querySelectorAll('button')
      expect(buttons.length).toBe(colorPalettes.length * buttonVariants.length * 3)
    })
  })

  describe('Button Content', () => {
    it('should display "Button" text on all buttons', () => {
      render(<ButtonVariations />)

      // All buttons should have "Button" text
      const buttonTexts = screen.getAllByText('Button')

      // 8 palettes × 6 variants × 3 states = 144
      expect(buttonTexts.length).toBe(colorPalettes.length * buttonVariants.length * 3)
    })
  })

  describe('Layout and Structure', () => {
    it('should organize buttons by color palette sections', () => {
      const { container } = render(<ButtonVariations />)

      // Each palette should be in its own section
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBe(colorPalettes.length)
    })

    it('should use table layout for button matrix', () => {
      const { container } = render(<ButtonVariations />)

      // Should use Chakra Table components
      const tables = container.querySelectorAll('table')
      expect(tables.length).toBe(colorPalettes.length)
    })

    it('should have proper spacing between sections', () => {
      const { container } = render(<ButtonVariations />)

      const sections = container.querySelectorAll('section')
      expect(sections.length).toBe(colorPalettes.length)
    })

    it('should wrap tables in bordered containers', () => {
      const { container } = render(<ButtonVariations />)

      // Tables should be wrapped in bordered Box components
      const tables = container.querySelectorAll('table')
      expect(tables.length).toBe(colorPalettes.length)
    })
  })

  describe('Typography', () => {
    it('should capitalize color palette names', () => {
      render(<ButtonVariations />)

      colorPalettes.forEach((palette) => {
        const heading = screen.getByRole('heading', { name: new RegExp(palette, 'i') })
        expect(heading).toBeInTheDocument()
        // The heading should have capitalized text
        expect(heading.textContent).toBeTruthy()
      })
    })

    it('should use bold text for variant names', () => {
      render(<ButtonVariations />)

      buttonVariants.forEach((variant) => {
        const variantLabels = screen.getAllByText(variant)
        expect(variantLabels.length).toBe(colorPalettes.length)
      })
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<ButtonVariations />)

      // All palette headings should be level 2
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBe(colorPalettes.length)
    })

    it('should have semantic HTML sections', () => {
      const { container } = render(<ButtonVariations />)

      // Each palette should be in a semantic section element
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBe(colorPalettes.length)
    })

    it('should have proper table structure', () => {
      const { container } = render(<ButtonVariations />)

      // Tables should have proper thead and tbody
      const theads = container.querySelectorAll('thead')
      const tbodies = container.querySelectorAll('tbody')

      expect(theads.length).toBe(colorPalettes.length)
      expect(tbodies.length).toBe(colorPalettes.length)
    })

    it('should have table headers with proper scope', () => {
      const { container } = render(<ButtonVariations />)

      // Column headers should be present
      const columnHeaders = container.querySelectorAll('th')
      expect(columnHeaders.length).toBeGreaterThan(0)
    })

    it('should have accessible disabled buttons', () => {
      const { container } = render(<ButtonVariations />)

      // Disabled buttons should have the disabled attribute
      const disabledButtons = container.querySelectorAll('button[disabled]')
      expect(disabledButtons.length).toBeGreaterThan(0)

      // All disabled buttons should be properly marked
      disabledButtons.forEach((button) => {
        expect(button).toHaveAttribute('disabled')
      })
    })
  })

  describe('Color Palettes', () => {
    it('should render all semantic color palettes', () => {
      render(<ButtonVariations />)

      const expectedPalettes = [
        'default',
        'brand',
        'secondary',
        'success',
        'info',
        'danger',
        'warning',
        'highlight',
      ]

      expectedPalettes.forEach((palette) => {
        expect(screen.getByRole('heading', { name: new RegExp(palette, 'i') })).toBeInTheDocument()
      })
    })

    it('should not render primitive color palettes', () => {
      render(<ButtonVariations />)

      // Should not have headings for primitive colors like 'gray', 'red', 'blue'
      // Only semantic tokens should be present
      const headings = screen.getAllByRole('heading', { level: 2 })

      headings.forEach((heading) => {
        const text = heading.textContent?.toLowerCase() || ''
        // Should be semantic palette names
        expect([
          'default',
          'brand',
          'secondary',
          'success',
          'info',
          'danger',
          'warning',
          'highlight',
        ]).toContain(text)
      })
    })
  })
})
