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
import {
  ButtonVariations,
  buttonSizes,
  buttonVariants,
  semanticColorPalettes,
} from './ButtonVariations'

describe('ButtonVariations', () => {
  describe('Rendering', () => {
    it('should render the section heading', () => {
      render(<ButtonVariations />)
      expect(screen.getByRole('heading', { name: 'Buttons' })).toBeInTheDocument()
    })

    it('should render a row per palette and a column per variant', () => {
      render(<ButtonVariations />)
      for (const palette of semanticColorPalettes) {
        expect(screen.getByRole('cell', { name: palette })).toBeInTheDocument()
      }
      for (const variant of buttonVariants) {
        expect(screen.getByRole('columnheader', { name: variant })).toBeInTheDocument()
      }
    })

    it('should render every palette and variant combination', () => {
      render(<ButtonVariations />)
      expect(screen.getAllByRole('button', { name: 'Publish' })).toHaveLength(
        semanticColorPalettes.length * buttonVariants.length,
      )
    })
  })

  describe('Sizes and states', () => {
    it('should render every size', () => {
      render(<ButtonVariations />)
      for (const size of buttonSizes) {
        expect(screen.getByRole('button', { name: size })).toBeInTheDocument()
      }
    })

    it('should render a loading button', () => {
      render(<ButtonVariations />)
      expect(screen.getByRole('button', { name: /Deploying/ })).toHaveAttribute('data-loading')
    })

    it('should render a disabled button', () => {
      render(<ButtonVariations />)
      expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled()
    })
  })
})
