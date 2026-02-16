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
import { Checkboxes } from './Checkboxes'

const checkboxVariants = ['solid', 'outline', 'subtle'] as const
const checkboxSizes = ['xs', 'sm', 'md', 'lg'] as const

describe('Checkboxes', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<Checkboxes />)
      expect(container).toBeInTheDocument()
    })

    it('should render two tables (variants and sizes)', () => {
      const { container } = render(<Checkboxes />)
      const tables = container.querySelectorAll('table')
      expect(tables.length).toBe(2)
    })
  })

  describe('Variants Section', () => {
    it('should render section heading', () => {
      render(<Checkboxes />)
      expect(screen.getByText('Variants')).toBeInTheDocument()
    })

    it('should render table headers', () => {
      render(<Checkboxes />)
      expect(screen.getAllByText('Unchecked').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Checked').length).toBeGreaterThan(0)
      expect(screen.getByText('Indeterminate')).toBeInTheDocument()
      expect(screen.getByText('Disabled')).toBeInTheDocument()
    })

    it('should render all variant names', () => {
      render(<Checkboxes />)
      for (const variant of checkboxVariants) {
        const labels = screen.getAllByText(variant)
        expect(labels.length).toBeGreaterThan(0)
      }
    })

    it('should render correct number of variant rows', () => {
      const { container } = render(<Checkboxes />)
      const firstTable = container.querySelectorAll('table')[0]
      const rows = firstTable?.querySelectorAll('tbody tr')
      expect(rows?.length).toBe(checkboxVariants.length)
    })
  })

  describe('Sizes Section', () => {
    it('should render section heading', () => {
      render(<Checkboxes />)
      expect(screen.getByText('Sizes')).toBeInTheDocument()
    })

    it('should render all size names', () => {
      render(<Checkboxes />)
      for (const size of checkboxSizes) {
        const labels = screen.getAllByText(size)
        expect(labels.length).toBeGreaterThan(0)
      }
    })

    it('should render correct number of size rows', () => {
      const { container } = render(<Checkboxes />)
      const secondTable = container.querySelectorAll('table')[1]
      const rows = secondTable?.querySelectorAll('tbody tr')
      expect(rows?.length).toBe(checkboxSizes.length)
    })
  })

  describe('Checkbox States', () => {
    it('should render checkbox inputs', () => {
      const { container } = render(<Checkboxes />)
      const inputs = container.querySelectorAll('input[type="checkbox"]')
      // variants: 3 variants × 4 states = 12
      // sizes: 4 sizes × 2 states = 8
      expect(inputs.length).toBe(20)
    })

    it('should render disabled checkboxes', () => {
      const { container } = render(<Checkboxes />)
      const disabledInputs = container.querySelectorAll('input[disabled]')
      // 1 disabled per variant = 3
      expect(disabledInputs.length).toBe(checkboxVariants.length)
    })
  })

  describe('Labels', () => {
    it('should render labels for all checkboxes', () => {
      render(<Checkboxes />)
      const labels = screen.getAllByText('Label')
      // variants: 3 × 4 = 12, sizes: 4 × 2 = 8 → total 20
      expect(labels.length).toBe(20)
    })
  })
})
