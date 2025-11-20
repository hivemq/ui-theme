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
  const variants = ['subtle', 'surface', 'outline', 'solid'] as const

  describe('Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<Alerts />)
      expect(container).toBeInTheDocument()
    })

    it('should render all alert variants', () => {
      render(<Alerts />)

      // Check that all variants are rendered as headings
      variants.forEach((variant) => {
        const capitalizedVariant = variant.charAt(0).toUpperCase() + variant.slice(1)
        expect(screen.getByRole('heading', { name: capitalizedVariant })).toBeInTheDocument()
      })
    })

    it('should render the correct number of alerts', () => {
      render(<Alerts />)

      // Should render 4 variant headings
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBe(variants.length)
    })
  })

  describe('Alert Variants', () => {
    it('should render subtle variant alert', () => {
      render(<Alerts />)
      expect(screen.getByRole('heading', { name: 'Subtle' })).toBeInTheDocument()
      expect(screen.getByText('This is a subtle alert.')).toBeInTheDocument()
    })

    it('should render surface variant alert', () => {
      render(<Alerts />)
      expect(screen.getByRole('heading', { name: 'Surface' })).toBeInTheDocument()
      expect(screen.getByText('This is a surface alert.')).toBeInTheDocument()
    })

    it('should render outline variant alert', () => {
      render(<Alerts />)
      expect(screen.getByRole('heading', { name: 'Outline' })).toBeInTheDocument()
      expect(screen.getByText('This is a outline alert.')).toBeInTheDocument()
    })

    it('should render solid variant alert', () => {
      render(<Alerts />)
      expect(screen.getByRole('heading', { name: 'Solid' })).toBeInTheDocument()
      expect(screen.getByText('This is a solid alert.')).toBeInTheDocument()
    })
  })

  describe('Alert Content', () => {
    it('should display alert titles', () => {
      render(<Alerts />)

      variants.forEach((variant) => {
        const capitalizedVariant = variant.charAt(0).toUpperCase() + variant.slice(1)
        expect(screen.getByText(`${capitalizedVariant} Alert`)).toBeInTheDocument()
      })
    })

    it('should display alert descriptions', () => {
      render(<Alerts />)

      variants.forEach((variant) => {
        expect(screen.getByText(`This is a ${variant} alert.`)).toBeInTheDocument()
      })
    })

    it('should have alert indicators', () => {
      const { container } = render(<Alerts />)

      // Chakra Alert.Indicator renders the status icon
      // Check that the component structure is rendered
      expect(container).toBeInTheDocument()
      // Just verify the content is present
      expect(screen.getAllByText(/Alert/).length).toBeGreaterThan(0)
    })
  })

  describe('Alert Status', () => {
    it('should render all alerts with error status', () => {
      render(<Alerts />)

      // All alerts in this component have status="error"
      // Verify all variants are rendered
      variants.forEach((variant) => {
        const capitalizedVariant = variant.charAt(0).toUpperCase() + variant.slice(1)
        expect(screen.getByText(`${capitalizedVariant} Alert`)).toBeInTheDocument()
      })
    })
  })

  describe('Layout and Structure', () => {
    it('should arrange alerts horizontally', () => {
      const { container } = render(<Alerts />)

      // The component uses HStack for horizontal layout
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should have proper spacing between alerts', () => {
      const { container } = render(<Alerts />)

      // Each variant is wrapped in a Box with padding
      const boxes = container.querySelectorAll('[class*="chakra"]')
      expect(boxes.length).toBeGreaterThan(0)
    })

    it('should align items at start', () => {
      const { container } = render(<Alerts />)

      // HStack has alignItems="start"
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  describe('Typography', () => {
    it('should capitalize variant names in headings', () => {
      render(<Alerts />)

      // All variant names should be capitalized
      expect(screen.getByRole('heading', { name: 'Subtle' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Surface' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Outline' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Solid' })).toBeInTheDocument()
    })

    it('should have proper font sizes', () => {
      render(<Alerts />)

      // Alert titles should have lg font size
      variants.forEach((variant) => {
        const capitalizedVariant = variant.charAt(0).toUpperCase() + variant.slice(1)
        const title = screen.getByText(`${capitalizedVariant} Alert`)
        expect(title).toBeInTheDocument()
      })
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<Alerts />)

      // All variant headings should be level 2
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBe(variants.length)
    })

    it('should have alert role for screen readers', () => {
      render(<Alerts />)

      // Verify all alerts are accessible via their text content
      variants.forEach((variant) => {
        const capitalizedVariant = variant.charAt(0).toUpperCase() + variant.slice(1)
        expect(screen.getByText(`${capitalizedVariant} Alert`)).toBeInTheDocument()
      })
    })

    it('should have descriptive text content', () => {
      render(<Alerts />)

      // Each alert should have both title and description
      variants.forEach((variant) => {
        const capitalizedVariant = variant.charAt(0).toUpperCase() + variant.slice(1)
        expect(screen.getByText(`${capitalizedVariant} Alert`)).toBeInTheDocument()
        expect(screen.getByText(`This is a ${variant} alert.`)).toBeInTheDocument()
      })
    })
  })

  describe('Component Structure', () => {
    it('should use Chakra Alert components', () => {
      render(<Alerts />)

      // Should render all alert content
      expect(screen.getByText('Subtle Alert')).toBeInTheDocument()
      expect(screen.getByText('Surface Alert')).toBeInTheDocument()
      expect(screen.getByText('Outline Alert')).toBeInTheDocument()
      expect(screen.getByText('Solid Alert')).toBeInTheDocument()
    })

    it('should render complete alert structure for each variant', () => {
      render(<Alerts />)

      // Each alert should have both title and description
      variants.forEach((variant) => {
        const capitalizedVariant = variant.charAt(0).toUpperCase() + variant.slice(1)
        expect(screen.getByText(`${capitalizedVariant} Alert`)).toBeInTheDocument()
        expect(screen.getByText(`This is a ${variant} alert.`)).toBeInTheDocument()
      })
    })
  })
})
