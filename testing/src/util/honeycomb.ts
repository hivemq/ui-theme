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

export interface Point {
  x: number
  y: number
}

// Corner offsets of a pointy-top hexagon with radius 1
const CORNERS = Array.from({ length: 6 }, (_, index) => {
  const angle = (Math.PI / 180) * (60 * index - 90)
  return { x: Math.cos(angle), y: Math.sin(angle) }
})

/** Centers of a pointy-top honeycomb that covers the given area with one cell of overflow */
export function honeycombCells(width: number, height: number, radius: number): Point[] {
  const columnStep = Math.sqrt(3) * radius
  const rowStep = 1.5 * radius
  const cells: Point[] = []
  for (let row = 0, y = -radius; y < height + radius * 2; row++, y += rowStep) {
    const offset = row % 2 === 1 ? columnStep / 2 : 0
    for (let x = offset - radius; x < width + radius * 2; x += columnStep) {
      cells.push({ x, y })
    }
  }
  return cells
}

function hexagonPath(center: Point, radius: number): string {
  const corners = CORNERS.map(
    (corner) =>
      `${(center.x + corner.x * radius).toFixed(1)} ${(center.y + corner.y * radius).toFixed(1)}`,
  )
  return `M${corners.join('L')}Z`
}

interface HoneycombFramesOptions {
  width: number
  height: number
  origin: Point
  /** Number of keyframes, including the first and last */
  frames?: number
  /** How far behind the wavefront a cell takes to disappear, in px */
  band?: number
}

/**
 * Keyframes for a `clip-path` that dissolves an area into honeycomb cells, starting at `origin`
 * and spreading outward. Every frame has the same number of hexagons, so the browser can
 * interpolate between frames. Cell size scales with the area so large screens stay cheap.
 */
export function honeycombFrames({
  width,
  height,
  origin,
  frames = 16,
  band = 160,
}: HoneycombFramesOptions): string[] {
  const radius = Math.max(24, Math.round(Math.hypot(width, height) / 45))
  const cells = honeycombCells(width, height, radius).map((cell) => ({
    cell,
    distance: Math.hypot(cell.x - origin.x, cell.y - origin.y),
  }))
  const maxDistance = Math.max(...cells.map(({ distance }) => distance))

  return Array.from({ length: frames }, (_, frame) => {
    const wave = (frame / (frames - 1)) * (maxDistance + band)
    const path = cells
      .map(({ cell, distance }) => {
        const progress = Math.min(1, Math.max(0, (wave - distance) / band))
        // Slightly oversized at rest so neighbouring cells overlap and no seams show
        const scale = 1.03 * (1 - progress * progress)
        return hexagonPath(cell, radius * scale)
      })
      .join('')
    return `path('${path}')`
  })
}
