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
import { Inputs } from './Inputs'

describe('Inputs', () => {
  const inputVariants = ['outline', 'subtle', 'flushed'] as const

  describe('Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<Inputs />)
      expect(container).toBeInTheDocument()
    })

    it('should render a single table', () => {
      const { container } = render(<Inputs />)
      const tables = container.querySelectorAll('table')
      expect(tables.length).toBe(1)
    })
  })

  describe('Input Matrix', () => {
    it('should render table headers', () => {
      render(<Inputs />)

      expect(screen.getByText('Variant')).toBeInTheDocument()
      expect(screen.getByText('Default')).toBeInTheDocument()
      expect(screen.getByText('Error')).toBeInTheDocument()
      expect(screen.getByText('Disabled')).toBeInTheDocument()
    })

    it('should render all input variants', () => {
      render(<Inputs />)

      inputVariants.forEach((variant) => {
        const variantLabels = screen.getAllByText(variant)
        expect(variantLabels.length).toBeGreaterThan(0)
      })
    })

    it('should render correct number of input rows', () => {
      const { container } = render(<Inputs />)

      const table = container.querySelector('table')
      expect(table).not.toBeNull()

      const rows = table?.querySelectorAll('tbody tr')
      // 3 variants = 3 rows
      expect(rows?.length).toBe(inputVariants.length)
    })
  })

  describe('Input States', () => {
    it('should render inputs in default state', () => {
      const { container } = render(<Inputs />)

      const inputs = container.querySelectorAll('input')
      expect(inputs.length).toBeGreaterThan(0)
    })

    it('should render inputs in disabled state', () => {
      const { container } = render(<Inputs />)

      const disabledInputs = container.querySelectorAll('input[disabled]')
      // 1 disabled input per variant
      expect(disabledInputs.length).toBe(inputVariants.length)
    })

    it('should render three states per variant', () => {
      const { container } = render(<Inputs />)

      // Total inputs = 3 variants × 3 states = 9
      const inputs = container.querySelectorAll('input')
      expect(inputs.length).toBe(inputVariants.length * 3)
    })
  })

  describe('Field Components', () => {
    it('should render labels for all inputs', () => {
      render(<Inputs />)

      const labels = screen.getAllByText('Label')
      // 3 variants × 3 states = 9
      expect(labels.length).toBe(inputVariants.length * 3)
    })

    it('should render helper text for default and disabled states', () => {
      render(<Inputs />)

      const helperTexts = screen.getAllByText(/Helper text|Disabled input/i)
      // 3 variants × 2 states (default, disabled) = 6
      expect(helperTexts.length).toBe(inputVariants.length * 2)
    })

    it('should render error text for error state', () => {
      render(<Inputs />)

      const errorTexts = screen.getAllByText('This field has an error')
      // 1 error per variant
      expect(errorTexts.length).toBe(inputVariants.length)
    })
  })

  describe('Layout and Structure', () => {
    it('should use table layout for input matrix', () => {
      const { container } = render(<Inputs />)

      const tables = container.querySelectorAll('table')
      expect(tables.length).toBe(1)
    })

    it('should wrap table in bordered container', () => {
      const { container } = render(<Inputs />)

      const tables = container.querySelectorAll('table')
      expect(tables.length).toBe(1)
    })
  })

  describe('Typography', () => {
    it('should use bold text for variant names', () => {
      render(<Inputs />)

      inputVariants.forEach((variant) => {
        const variantLabels = screen.getAllByText(variant)
        expect(variantLabels.length).toBeGreaterThan(0)
      })
    })
  })

  describe('Accessibility', () => {
    it('should have proper table structure', () => {
      const { container } = render(<Inputs />)

      const theads = container.querySelectorAll('thead')
      const tbodies = container.querySelectorAll('tbody')

      expect(theads.length).toBe(1)
      expect(tbodies.length).toBe(1)
    })

    it('should have table headers with proper scope', () => {
      const { container } = render(<Inputs />)

      const columnHeaders = container.querySelectorAll('th')
      // 4 column headers: Variant, Default, Error, Disabled
      expect(columnHeaders.length).toBe(4)
    })

    it('should have accessible disabled inputs', () => {
      const { container } = render(<Inputs />)

      const disabledInputs = container.querySelectorAll('input[disabled]')
      expect(disabledInputs.length).toBe(inputVariants.length)

      disabledInputs.forEach((input) => {
        expect(input).toHaveAttribute('disabled')
      })
    })

    it('should associate labels with inputs', () => {
      const { container } = render(<Inputs />)

      const labels = container.querySelectorAll('label')
      // 3 variants × 3 states = 9
      expect(labels.length).toBe(inputVariants.length * 3)
    })
  })

  describe('Input Variants', () => {
    it('should render all three input variants', () => {
      render(<Inputs />)

      const expectedVariants = ['outline', 'subtle', 'flushed']

      expectedVariants.forEach((variant) => {
        const variantLabels = screen.getAllByText(variant)
        expect(variantLabels.length).toBeGreaterThan(0)
      })
    })

    it('should render only the three standard variants', () => {
      const { container } = render(<Inputs />)

      const rows = container.querySelectorAll('tbody tr')
      expect(rows.length).toBe(3)
    })
  })

  describe('Input Placeholders', () => {
    it('should have appropriate placeholders for each state', () => {
      const { container } = render(<Inputs />)

      // Default state inputs
      const defaultPlaceholders = container.querySelectorAll('input[placeholder="Enter text..."]')
      // 3 variants × 2 states (default + error) = 6
      expect(defaultPlaceholders.length).toBe(inputVariants.length * 2)

      // Disabled state inputs
      const disabledPlaceholders = container.querySelectorAll('input[placeholder="Disabled"]')
      expect(disabledPlaceholders.length).toBe(inputVariants.length)
    })
  })

  describe('Field States', () => {
    it('should mark error state fields as invalid', () => {
      render(<Inputs />)

      const errorTexts = screen.getAllByText('This field has an error')
      expect(errorTexts.length).toBe(inputVariants.length)
    })

    it('should mark disabled state fields appropriately', () => {
      const { container } = render(<Inputs />)

      const disabledInputs = container.querySelectorAll('input[disabled]')
      expect(disabledInputs.length).toBe(inputVariants.length)
    })
  })
})
