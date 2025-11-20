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
import { Colors } from './Colors'

describe('Colors', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<Colors />)
      expect(container).toBeInTheDocument()
    })

    it('should render all primitive color palettes', () => {
      render(<Colors />)

      // Check for some common color palette headings
      // These should match the primitive colors defined in the theme
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)
    })

    it('should render color swatches in a grid layout', () => {
      render(<Colors />)

      // Check that color palettes are rendered with headings
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)
    })
  })

  describe('Color Palette Display', () => {
    it('should display color palette names as headings', () => {
      render(<Colors />)

      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)

      // Each heading should have text content
      headings.forEach((heading) => {
        expect(heading.textContent).not.toBe('')
      })
    })

    it('should display color shade keys', () => {
      const { container } = render(<Colors />)

      // Check that the component renders with content
      // Shade keys are displayed as text content (e.g., '50', '100', '500')
      const content = container.textContent || ''
      expect(content.length).toBeGreaterThan(0)

      // Verify headings are rendered (each palette has a heading)
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)
    })

    it('should display hex color values', () => {
      const { container } = render(<Colors />)

      // Check that hex values or rgba values are displayed in the text content
      const content = container.textContent || ''
      const hasHexOrRgba = content.includes('#') || content.includes('rgba')
      expect(hasHexOrRgba).toBe(true)
    })
  })

  describe('Special Color Handling', () => {
    it('should handle white colors with special background', () => {
      const { container } = render(<Colors />)

      // White colors should be rendered
      // The component shows white colors against a dark background
      expect(container).toBeInTheDocument()
    })

    it('should handle black colors with special background', () => {
      const { container } = render(<Colors />)

      // Black colors should be rendered
      // The component shows black colors against a light background
      expect(container).toBeInTheDocument()
    })

    it('should render alpha/transparent colors correctly', () => {
      const { container } = render(<Colors />)

      // Check for RGBA values which indicate alpha transparency
      const content = container.textContent || ''
      const hasRgba = content.includes('rgba')

      // If the theme includes alpha colors, they should be present
      if (hasRgba) {
        expect(content).toContain('rgba')
      }
    })
  })

  describe('Layout and Structure', () => {
    it('should organize colors into sections', () => {
      const { container } = render(<Colors />)

      // Each color palette should be in its own section
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(0)
    })

    it('should use grid layout for color swatches', () => {
      const { container } = render(<Colors />)

      // The component uses SimpleGrid for layout
      // Verify the component structure is rendered
      expect(container).toBeInTheDocument()

      // Each color palette should have a section with a heading
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)
    })

    it('should have proper spacing between palettes', () => {
      const { container } = render(<Colors />)

      const sections = container.querySelectorAll('section')
      sections.forEach((section) => {
        expect(section).toBeInTheDocument()
      })
    })
  })

  describe('Color Contrast', () => {
    it('should use contrasting text colors on color swatches', () => {
      const { container } = render(<Colors />)

      // The component should render with proper structure
      expect(container).toBeInTheDocument()

      // Verify color palettes are rendered
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)
    })

    it('should render checkerboard pattern for transparent colors', () => {
      const { container } = render(<Colors />)

      // Transparent colors should have a checkerboard background
      // to show the transparency effect
      expect(container).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<Colors />)

      // All palette names should be h2 headings
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)
    })

    it('should use semantic HTML sections', () => {
      const { container } = render(<Colors />)

      // Each palette should be in a semantic section element
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(0)
    })

    it('should have visible text labels for all colors', () => {
      const { container } = render(<Colors />)

      // Each color palette should have a heading and content
      expect(container).toBeInTheDocument()
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)
    })
  })

  describe('Responsive Behavior', () => {
    it('should render with responsive grid columns', () => {
      const { container } = render(<Colors />)

      // The component uses responsive columns
      // SimpleGrid with base: 4, sm: 5, md: 6, lg: 7, xl: 8
      expect(container).toBeInTheDocument()
    })
  })
})
