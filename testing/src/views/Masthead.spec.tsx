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
import { semanticTokenList, themeVersion } from '~/util/tokens'
import { Masthead } from './Masthead'

describe('Masthead', () => {
  describe('Rendering', () => {
    it('should render the page title', () => {
      render(<Masthead />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('HiveMQ UI Theme')
    })

    it('should show the theme package version', () => {
      render(<Masthead />)
      expect(screen.getByText(`@hivemq/ui-theme ${themeVersion}`)).toBeInTheDocument()
    })

    it('should render the color mode switch', () => {
      render(<Masthead />)
      expect(screen.getByRole('radio', { name: 'Dark' })).toBeInTheDocument()
    })
  })

  describe('Token tiers', () => {
    it('should render the three tiers', () => {
      render(<Masthead />)
      expect(screen.getByText('Tier 1 · Primitive')).toBeInTheDocument()
      expect(screen.getByText('Tier 2 · Semantic')).toBeInTheDocument()
      expect(screen.getByText('Tier 3 · Recipe')).toBeInTheDocument()
    })

    it('should count semantic tokens from the theme source', () => {
      render(<Masthead />)
      expect(
        screen.getByText(new RegExp(`One of ${semanticTokenList.length} semantic tokens`)),
      ).toBeInTheDocument()
    })

    it('should render brand.solid forced into each mode', () => {
      render(<Masthead />)
      expect(screen.getByTestId('brand-solid-light')).toHaveClass('light')
      expect(screen.getByTestId('brand-solid-dark')).toHaveClass('dark')
    })

    it('should render a real brand button', () => {
      render(<Masthead />)
      expect(screen.getByRole('button', { name: 'Connect broker' })).toBeInTheDocument()
    })
  })
})
