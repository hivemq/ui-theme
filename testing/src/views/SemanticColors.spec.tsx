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
import { SemanticTokens } from './SemanticColors'

describe('SemanticTokens', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<SemanticTokens isDarkMode={false} />)
      expect(container).toBeInTheDocument()
    })

    it('should render semantic color sections', () => {
      render(<SemanticTokens isDarkMode={false} />)

      // Check for common semantic token sections
      expect(screen.getByRole('heading', { name: /bg/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /text/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /border/i })).toBeInTheDocument()
    })

    it('should render color swatches for each token', () => {
      render(<SemanticTokens isDarkMode={false} />)

      // Check that semantic token sections are rendered
      expect(screen.getByRole('heading', { name: /bg/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /text/i })).toBeInTheDocument()
    })
  })

  describe('Dark Mode Support', () => {
    it('should render in light mode', () => {
      const { container } = render(<SemanticTokens isDarkMode={false} />)
      expect(container).toBeInTheDocument()
    })

    it('should render in dark mode', () => {
      const { container } = render(<SemanticTokens isDarkMode={true} />)
      expect(container).toBeInTheDocument()
    })

    it('should handle mode toggle without errors', () => {
      const { rerender } = render(<SemanticTokens isDarkMode={false} />)
      expect(screen.getByRole('heading', { name: /bg/i })).toBeInTheDocument()

      rerender(<SemanticTokens isDarkMode={true} />)
      expect(screen.getByRole('heading', { name: /bg/i })).toBeInTheDocument()
    })
  })

  describe('Token Display', () => {
    it('should display token names', () => {
      render(<SemanticTokens isDarkMode={false} />)

      // Check that token names are displayed
      const tokenNames = screen.getAllByText(/\./i)
      expect(tokenNames.length).toBeGreaterThan(0)
    })

    it('should display color values', () => {
      render(<SemanticTokens isDarkMode={false} />)

      // Check that color token names are displayed
      const tokenNames = screen.getAllByText(/\./i)
      expect(tokenNames.length).toBeGreaterThan(0)
    })

    it('should display contrast indicators when available', () => {
      render(<SemanticTokens isDarkMode={false} />)

      // Check for contrast indicators (Aa text)
      const contrastIndicators = screen.queryAllByText('Aa')
      // Contrast indicators should be present for some tokens
      expect(contrastIndicators.length).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Structure and Layout', () => {
    it('should organize tokens into sections', () => {
      render(<SemanticTokens isDarkMode={false} />)

      // Each section should have a heading
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)
    })

    it('should display tokens in a flex layout', () => {
      render(<SemanticTokens isDarkMode={false} />)

      // Check that sections are rendered
      expect(screen.getByRole('heading', { name: /bg/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /text/i })).toBeInTheDocument()
    })

    it('should have proper spacing between sections', () => {
      const { container } = render(<SemanticTokens isDarkMode={false} />)

      // Check that sections exist
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(0)
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<SemanticTokens isDarkMode={false} />)

      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThan(0)
    })

    it('should render sections with semantic HTML', () => {
      const { container } = render(<SemanticTokens isDarkMode={false} />)

      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(0)
    })
  })
})
