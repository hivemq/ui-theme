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
import { honeycombCells, honeycombFrames } from './honeycomb'

// Size of each hexagon in a frame, keyed by its position in the path
function hexagonSizes(frame: string): number[] {
  return frame
    .slice("path('".length, -"')".length)
    .split('Z')
    .filter(Boolean)
    .map((hexagon) => {
      const [top, , , bottom] = hexagon
        .replace('M', '')
        .split('L')
        .map((point) => point.split(' ').map(Number))
      return Math.abs(bottom[1] - top[1])
    })
}

describe('honeycomb', () => {
  describe('honeycombCells', () => {
    it('should cover the whole area, including its edges', () => {
      const cells = honeycombCells(300, 200, 20)
      expect(Math.min(...cells.map((cell) => cell.x))).toBeLessThanOrEqual(0)
      expect(Math.min(...cells.map((cell) => cell.y))).toBeLessThanOrEqual(0)
      expect(Math.max(...cells.map((cell) => cell.x))).toBeGreaterThanOrEqual(300)
      expect(Math.max(...cells.map((cell) => cell.y))).toBeGreaterThanOrEqual(200)
    })

    it('should offset every other row by half a cell', () => {
      const [first] = honeycombCells(300, 200, 20)
      const secondRow = honeycombCells(300, 200, 20).find((cell) => cell.y > first.y)
      expect((secondRow?.x ?? 0) - first.x).toBeCloseTo((Math.sqrt(3) * 20) / 2)
    })
  })

  describe('honeycombFrames', () => {
    const frames = honeycombFrames({ width: 800, height: 600, origin: { x: 0, y: 0 } })

    it('should return the requested number of clip-path keyframes', () => {
      expect(frames).toHaveLength(16)
      for (const frame of frames) {
        expect(frame.startsWith("path('M")).toBe(true)
      }
    })

    it('should keep the same number of hexagons in every frame so they can interpolate', () => {
      const counts = frames.map((frame) => frame.split('M').length)
      expect(new Set(counts).size).toBe(1)
    })

    it('should start fully covered and end fully dissolved', () => {
      expect(Math.min(...hexagonSizes(frames[0]))).toBeGreaterThan(0)
      expect(Math.max(...hexagonSizes(frames[frames.length - 1]))).toBe(0)
    })

    it('should dissolve cells near the origin first', () => {
      const middle = hexagonSizes(frames[6])
      expect(middle[0]).toBeLessThan(middle[middle.length - 1])
    })
  })
})
