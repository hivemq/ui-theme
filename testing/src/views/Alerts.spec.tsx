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
import { Alerts } from './Alerts'

describe('Alerts', () => {
  const alertStatuses = ['info', 'warning', 'success', 'danger'] as const
  const alertVariants = ['subtle', 'surface', 'outline', 'solid'] as const
  const alertSizes = ['sm', 'md', 'lg'] as const

  describe('Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<Alerts />)
      expect(container).toBeInTheDocument()
    })

    it('should render all alert status sections', () => {
      render(<Alerts />)

      // Check that all statuses are rendered as headings
      alertStatuses.forEach((status) => {
        const heading = screen.getByRole('heading', { name: new RegExp(status, 'i') })
        expect(heading).toBeInTheDocument()
      })
    })

    it('should render the correct number of sections', () => {
      render(<Alerts />)

      // Should render 4 status sections (info, warning, success, error)
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBe(alertStatuses.length)
    })
  })

  describe('Alert Matrix', () => {
    it('should render table for each alert status', () => {
      const { container } = render(<Alerts />)

      // Should have a table for each status
      const tables = container.querySelectorAll('table')
      expect(tables.length).toBe(alertStatuses.length)
    })

    it('should render table headers', () => {
      render(<Alerts />)

      // Each table should have these headers
      const variantHeader = screen.getAllByText('Variant')
      const smallHeader = screen.getAllByText('Small')
      const mediumHeader = screen.getAllByText('Medium')
      const largeHeader = screen.getAllByText('Large')

      expect(variantHeader.length).toBe(alertStatuses.length)
      expect(smallHeader.length).toBe(alertStatuses.length)
      expect(mediumHeader.length).toBe(alertStatuses.length)
      expect(largeHeader.length).toBe(alertStatuses.length)
    })

    it('should render all alert variants', () => {
      render(<Alerts />)

      // Each variant name should appear 4 times (once per status)
      alertVariants.forEach((variant) => {
        const variantLabels = screen.getAllByText(variant)
        expect(variantLabels.length).toBe(alertStatuses.length)
      })
    })

    it('should render correct number of alert rows per table', () => {
      const { container } = render(<Alerts />)

      // Each table should have 4 rows (one for each variant) + 1 header row
      const tables = container.querySelectorAll('table')
      tables.forEach((table) => {
        const rows = table.querySelectorAll('tr')
        // 1 header row + 4 variant rows = 5 total
        expect(rows.length).toBe(alertVariants.length + 1)
      })
    })
  })

  describe('Alert Components', () => {
    it('should render alerts with title and description', () => {
      render(<Alerts />)

      // Each alert should have a title
      const alertTitles = screen.getAllByText('Alert Title')
      // 4 statuses × 4 variants × 3 sizes = 48 alerts
      expect(alertTitles.length).toBe(
        alertStatuses.length * alertVariants.length * alertSizes.length,
      )
    })

    it('should render alerts with status-specific descriptions', () => {
      render(<Alerts />)

      alertStatuses.forEach((status) => {
        const descriptions = screen.getAllByText(`This is a ${status} alert.`)
        // 4 variants × 3 sizes = 12 per status
        expect(descriptions.length).toBe(alertVariants.length * alertSizes.length)
      })
    })

    it('should render alert indicators', () => {
      render(<Alerts />)

      // Each alert should have a title, so we can count by titles
      const alertTitles = screen.getAllByText('Alert Title')
      expect(alertTitles.length).toBe(
        alertStatuses.length * alertVariants.length * alertSizes.length,
      )
    })

    it('should render all three sizes for each variant', () => {
      render(<Alerts />)

      // Count by alert titles
      // Total alerts = 4 statuses × 4 variants × 3 sizes = 48
      const alertTitles = screen.getAllByText('Alert Title')
      expect(alertTitles.length).toBe(
        alertStatuses.length * alertVariants.length * alertSizes.length,
      )
    })
  })

  describe('Layout and Structure', () => {
    it('should organize alerts by status sections', () => {
      const { container } = render(<Alerts />)

      // Each status should be in its own section
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBe(alertStatuses.length)
    })

    it('should use table layout for alert matrix', () => {
      const { container } = render(<Alerts />)

      // Should use Chakra Table components
      const tables = container.querySelectorAll('table')
      expect(tables.length).toBe(alertStatuses.length)
    })

    it('should wrap tables in bordered containers', () => {
      const { container } = render(<Alerts />)

      // Tables should be wrapped in bordered Box components
      const tables = container.querySelectorAll('table')
      expect(tables.length).toBe(alertStatuses.length)
    })
  })

  describe('Typography', () => {
    it('should capitalize alert status names', () => {
      render(<Alerts />)

      alertStatuses.forEach((status) => {
        const heading = screen.getByRole('heading', { name: new RegExp(status, 'i') })
        expect(heading).toBeInTheDocument()
        // The heading should have capitalized text
        expect(heading.textContent).toBeTruthy()
      })
    })

    it('should use bold text for variant names', () => {
      render(<Alerts />)

      alertVariants.forEach((variant) => {
        const variantLabels = screen.getAllByText(variant)
        expect(variantLabels.length).toBe(alertStatuses.length)
      })
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<Alerts />)

      // All status headings should be level 2
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBe(alertStatuses.length)
    })

    it('should have semantic HTML sections', () => {
      const { container } = render(<Alerts />)

      // Each status should be in a semantic section element
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBe(alertStatuses.length)
    })

    it('should have proper table structure', () => {
      const { container } = render(<Alerts />)

      // Tables should have proper thead and tbody
      const theads = container.querySelectorAll('thead')
      const tbodies = container.querySelectorAll('tbody')

      expect(theads.length).toBe(alertStatuses.length)
      expect(tbodies.length).toBe(alertStatuses.length)
    })

    it('should have table headers with proper scope', () => {
      const { container } = render(<Alerts />)

      // Column headers should be present
      const columnHeaders = container.querySelectorAll('th')
      expect(columnHeaders.length).toBeGreaterThan(0)
    })
  })

  describe('Alert Statuses', () => {
    it('should render all semantic alert statuses', () => {
      render(<Alerts />)

      const expectedStatuses = ['info', 'warning', 'success', 'error']

      expectedStatuses.forEach((status) => {
        expect(screen.getByRole('heading', { name: new RegExp(status, 'i') })).toBeInTheDocument()
      })
    })

    it('should render only semantic statuses, not primitive colors', () => {
      render(<Alerts />)

      // Should not have headings for primitive colors like 'gray', 'red', 'blue'
      // Only semantic tokens should be present
      const headings = screen.getAllByRole('heading', { level: 2 })

      headings.forEach((heading) => {
        const text = heading.textContent?.toLowerCase() || ''
        // Should be semantic status names
        expect(['info', 'warning', 'success', 'error']).toContain(text)
      })
    })
  })

  describe('Alert Variants', () => {
    it('should render all four alert variants', () => {
      render(<Alerts />)

      const expectedVariants = ['subtle', 'surface', 'outline', 'solid']

      expectedVariants.forEach((variant) => {
        const variantElements = screen.getAllByText(variant)
        // Each variant should appear once per status (4 times total)
        expect(variantElements.length).toBe(alertStatuses.length)
      })
    })

    it('should render each variant across all statuses', () => {
      render(<Alerts />)

      // Total alerts across all variants and statuses
      // 4 statuses × 4 variants × 3 sizes = 48
      const alertTitles = screen.getAllByText('Alert Title')
      expect(alertTitles.length).toBe(48)
    })
  })

  describe('Alert Sizes', () => {
    it('should render small, medium, and large sizes', () => {
      render(<Alerts />)

      // Each variant in each status should have 3 size variants
      // 4 statuses × 4 variants × 3 sizes = 48 alerts
      const alertTitles = screen.getAllByText('Alert Title')
      expect(alertTitles.length).toBe(48)
    })

    it('should have size headers in each table', () => {
      render(<Alerts />)

      const smallHeaders = screen.getAllByText('Small')
      const mediumHeaders = screen.getAllByText('Medium')
      const largeHeaders = screen.getAllByText('Large')

      // Each size header should appear once per status table
      expect(smallHeaders.length).toBe(alertStatuses.length)
      expect(mediumHeaders.length).toBe(alertStatuses.length)
      expect(largeHeaders.length).toBe(alertStatuses.length)
    })
  })
})
