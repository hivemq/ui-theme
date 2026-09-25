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
import { Badges, badgeLabels, badgeVariants } from './Badges'
import { semanticColorPalettes } from './ButtonVariations'

describe('Badges', () => {
  describe('Rendering', () => {
    it('should render the section heading', () => {
      render(<Badges />)
      expect(screen.getByRole('heading', { name: 'Badges' })).toBeInTheDocument()
    })

    it('should render a column per variant', () => {
      render(<Badges />)
      for (const variant of badgeVariants) {
        expect(screen.getByRole('columnheader', { name: variant })).toBeInTheDocument()
      }
    })

    it('should render each palette label once per variant', () => {
      render(<Badges />)
      for (const palette of semanticColorPalettes) {
        expect(screen.getAllByText(badgeLabels[palette])).toHaveLength(badgeVariants.length)
      }
    })
  })
})
