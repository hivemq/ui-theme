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
import { getSemanticToken, PALETTE_SLOTS, PALETTES } from '~/util/tokens'
import { SemanticPalettes, slotUsage } from './SemanticPalettes'

describe('SemanticPalettes', () => {
  const cells = PALETTES.flatMap((palette) =>
    PALETTE_SLOTS.map((slot) => getSemanticToken(`${palette}.${slot}`)),
  )
  const definedCount = cells.filter(Boolean).length

  describe('Rendering', () => {
    it('should render a row per palette and a column per slot', () => {
      render(<SemanticPalettes />)
      expect(screen.getAllByRole('row')).toHaveLength(PALETTES.length + 1)
      expect(screen.getAllByRole('columnheader')).toHaveLength(PALETTE_SLOTS.length + 1)
    })

    it('should render a swatch for every defined slot', () => {
      render(<SemanticPalettes />)
      expect(screen.getAllByRole('button', { name: /^Copy colors\./ })).toHaveLength(definedCount)
    })

    it('should mark slots a palette does not define', () => {
      render(<SemanticPalettes />)
      expect(screen.queryAllByLabelText('Not defined')).toHaveLength(cells.length - definedCount)
    })
  })

  describe('Slot legend', () => {
    it('should explain what every slot is for', () => {
      render(<SemanticPalettes />)
      for (const slot of PALETTE_SLOTS) {
        expect(screen.getByText(slotUsage[slot])).toBeInTheDocument()
      }
    })
  })

  describe('References', () => {
    it('should show the primitive each mode points to', () => {
      render(<SemanticPalettes />)
      const token = getSemanticToken('brand.solid')
      const cell = screen.getByRole('button', { name: 'Copy colors.brand.solid' }).parentElement
      expect(cell).toHaveTextContent(`${token?.light}${token?.dark}`)
    })
  })
})
