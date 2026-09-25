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
import { ALPHA_RAMPS, HUE_RAMPS, RAMP_STEPS } from '~/util/tokens'
import { Primitives } from './Primitives'

describe('Primitives', () => {
  describe('Rendering', () => {
    it('should render the section heading', () => {
      render(<Primitives />)
      expect(screen.getByRole('heading', { name: 'Primitive ramps' })).toBeInTheDocument()
    })

    it('should render one row per hue and alpha ramp', () => {
      render(<Primitives />)
      for (const ramp of [...HUE_RAMPS, ...ALPHA_RAMPS]) {
        expect(screen.getByRole('group', { name: `${ramp} ramp` })).toBeInTheDocument()
      }
    })

    it('should render every step of every ramp', () => {
      render(<Primitives />)
      const swatches = screen.getAllByRole('button', { name: /^Copy colors\./ })
      expect(swatches).toHaveLength((HUE_RAMPS.length + ALPHA_RAMPS.length) * RAMP_STEPS.length)
    })
  })

  describe('Usage', () => {
    it('should list the semantic tokens that use a step', () => {
      render(<Primitives />)
      const swatch = screen.getByRole('button', { name: 'Copy colors.yellow.300' })
      expect(swatch.getAttribute('title')).toContain('brand.solid (light)')
    })
  })
})
