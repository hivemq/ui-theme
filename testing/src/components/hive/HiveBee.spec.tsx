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
import { render } from '~/test/test-utils'
import { HiveBee, setWingBeat } from './HiveBee'

describe('HiveBee', () => {
  describe('Rendering', () => {
    it('should draw the artwork three times: body, left wings and right wings', () => {
      const { container } = render(<HiveBee />)
      const layers = container.querySelectorAll('svg > g')
      expect(layers).toHaveLength(3)
      expect(container.querySelectorAll('[data-wing]')).toHaveLength(2)
    })

    it('should reference clip paths by valid ids', () => {
      const { container } = render(<HiveBee />)
      for (const layer of container.querySelectorAll('svg > g')) {
        const reference = /^url\(#([\w-]+)\)$/.exec(layer.getAttribute('clip-path') ?? '')
        expect(reference).not.toBeNull()
        expect(container.querySelector(`clipPath#${reference?.[1]}`)).toBeInTheDocument()
      }
    })

    it('should be hidden from assistive technology', () => {
      const { container } = render(<HiveBee />)
      expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('setWingBeat', () => {
    it('should draw both wings in toward their hinges', () => {
      const { container } = render(<HiveBee />)
      setWingBeat(container.querySelector('svg'), 0.72)
      for (const wing of container.querySelectorAll('[data-wing]')) {
        expect(wing.getAttribute('transform')).toMatch(/scale\(0\.72 1\)/)
      }
    })

    it('should pivot each side around its own hinge', () => {
      const { container } = render(<HiveBee />)
      setWingBeat(container.querySelector('svg'), 0.8)
      const [left, right] = container.querySelectorAll('[data-wing]')
      expect(left.getAttribute('transform')).not.toBe(right.getAttribute('transform'))
    })

    it('should ignore a missing bee', () => {
      expect(() => setWingBeat(null, 0.8)).not.toThrow()
    })
  })
})
