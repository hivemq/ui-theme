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

import { type CSSProperties, type Ref, useId } from 'react'

// Paths taken unchanged from the bee in https://www.hivemq.com/hivemq-logo.svg
const WINGS = [
  'M11,17.3c0-0.1,0-0.3-0.1-0.4C10,16,8,14,9.1,13.4c1.3-0.6,4.7,0.3,8.5,2.3c-1.6,0.9-3.2,2-4.6,3.2C11.4,17.7,11.2,17.5,11,17.3z',
  'M23.9,18.9c-1.4-1.1-2.7-2.1-4.7-3.2c3.8-2,7.2-2.9,8.5-2.3c1.1,0.6-0.9,2.6-1.7,3.4c-0.2,0.2-0.1,0.2-0.1,0.4C25.7,17.5,25.4,17.8,23.9,18.9z',
  'M14.5,18.8c-0.1,0.2-0.2,0.5-0.3,1c0,0,0,0,0,0c0,0,0,0,0,0c-0.2,1.2-0.1,2.8,0.5,3.7c-0.1,0-0.2,0-0.3,0c-2,0.6-3.3,0.9-3.7,0.3C10.4,23,11.9,20.9,14.5,18.8z',
  'M26,23.8c-0.4,0.6-1.7,0.4-3.7-0.3c-0.1,0-0.2,0-0.3,0c0.6-0.9,0.7-2.5,0.5-3.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1-0.5-0.2-0.8-0.3-1C25,21,26.4,23.1,26,23.8z',
]
const BODY =
  'M15,22.2c0.2,0.5,0.4,1,0.8,1.5H21c0.3-0.4,0.6-0.9,0.8-1.5H15zM26,16.9c-0.2,0.2-0.2,0.4,0,0.6l0.1,0.1c2.4-2,3.8-3.6,3.1-4.8C28.3,11.6,25,12.2,21,14c0.2-0.4,0.3-0.9,0.3-1.3c0-1.1-0.6-2.2-1.7-2.6l0,0l0,0L20,9.3C20,9.2,20,9.1,19.9,9c-0.1-0.1-0.2,0-0.3,0.1c0,0,0,0,0,0.1l-0.3,0.7c-0.6-0.2-1.2-0.2-1.7,0l-0.3-0.7C17.1,9,17,9,16.9,9c-0.1,0.1-0.1,0.2-0.1,0.3l0.3,0.6l0,0.1c-1.5,0.7-2.1,2.5-1.4,3.9c-1-0.5-6.8-2.9-8-1.2c-1.1,1.5,2.2,4.1,3,4.8l0.1-0.1c0.2-0.2,0.1-0.4,0-0.6c-0.6-0.5-1.1-1.1-1.6-1.7c-0.6-0.8-0.6-1.3-0.3-1.6c0.9-0.9,4.3,0.3,5.4,0.7c1.1,0.4,2.2,0.9,3.2,1.5c-5.4,3.1-9.1,6.9-8.2,8.4c0.5,0.9,2.8,0.8,5.7-0.2L15,23.7c-0.1-0.2-0.3-0.2-0.5-0.2c-2,0.6-3.3,0.9-3.7,0.3c-0.6-1,2.5-4.7,7.2-7.4l0.4-0.2c0.1,0.1,0.2,0.1,0.4,0.2c4.8,2.8,7.9,6.4,7.2,7.4c-0.4,0.6-1.7,0.4-3.7-0.3c-0.2-0.1-0.4,0-0.5,0.2l-0.1,0.2c2.9,1,5.2,1.1,5.7,0.2c0.9-1.5-2.8-5.2-8.2-8.4c3.8-2,7.2-2.9,8.5-2.3C28.9,14,26.9,16,26,16.9zM15.9,13c-0.2-1.1,0.4-2.2,1.4-2.6C17.5,11.5,16.9,12.6,15.9,13L15.9,13zM20.8,13c-1-0.5-1.6-1.5-1.4-2.6C20.4,10.9,21,11.9,20.8,13L20.8,13zM21.7,19.2c-1.1-0.8-2.2-1.5-3.3-2.2c-1.1,0.7-2.2,1.4-3.3,2.2c-0.2,0.6-0.3,1.2-0.3,1.8h7.1C22,20.4,21.9,19.8,21.7,19.2L21.7,19.2zM16.9,25c0.4,0.5,0.8,0.9,1.5,2.1c0.7-1.2,1-1.6,1.5-2.1H16.9z'
const EYES = [
  'M20.8,13c-1-0.5-1.6-1.5-1.4-2.6C20.4,10.9,21,11.9,20.8,13z',
  'M15.9,13c-0.2-1.1,0.4-2.2,1.4-2.6C17.5,11.5,16.9,12.6,15.9,13z',
]

// The wing outlines are drawn joined to the head, so the artwork is never edited. Instead it is
// drawn three times: once clipped to the body and head (static), and once per side (the wings).
// Only the side layers move. Coordinates are in the logo's own 36 × 36 space.
const BODY_CLIP = { cx: 18.4, cy: 21.8, rx: 4.1, ry: 6.3 }
const HEAD_CLIP = { cx: 18.4, cy: 12, r: 3.5 }
const WING_HINGES = {
  left: { x: 16.2, y: 16.8 },
  right: { x: 20.6, y: 16.8 },
} as const

type Side = keyof typeof WING_HINGES

/** One side of the logo space, minus the body and head (half-ellipse and half-circle cut-outs) */
function sideClipPath(side: Side) {
  const sweep = side === 'left' ? 0 : 1
  const { cx, cy, rx, ry } = BODY_CLIP
  const head = HEAD_CLIP
  const half = side === 'left' ? `M0,0H${cx}V36H0Z` : `M${cx},0H36V36H${cx}Z`
  return (
    half +
    `M${cx},${cy - ry}A${rx},${ry} 0 0 ${sweep} ${cx},${cy + ry}Z` +
    `M${head.cx},${head.cy - head.r}A${head.r},${head.r} 0 0 ${sweep} ${head.cx},${head.cy + head.r}Z`
  )
}

/**
 * Sets how far the wings are drawn in toward their hinges: 1 is the logo at rest,
 * smaller values shorten the wings the way a wing beat looks from above.
 */
export function setWingBeat(bee: SVGSVGElement | null, scale: number) {
  for (const wing of bee?.querySelectorAll<SVGGElement>('[data-wing]') ?? []) {
    const { x, y } = WING_HINGES[wing.dataset.wing as Side]
    wing.setAttribute('transform', `translate(${x} ${y}) scale(${scale} 1) translate(${-x} ${-y})`)
  }
}

function BeeArtwork() {
  return (
    <>
      {WINGS.map((d) => (
        <path key={d} d={d} fill="var(--chakra-colors-white)" />
      ))}
      <path
        d={BODY}
        fill="var(--chakra-colors-black)"
        stroke="var(--chakra-colors-brand-solid)"
        strokeWidth="0.9"
        strokeLinejoin="round"
        paintOrder="stroke"
      />
      {EYES.map((d) => (
        <path key={d} d={d} fill="var(--chakra-colors-white)" />
      ))}
    </>
  )
}

interface HiveBeeProps {
  ref?: Ref<SVGSVGElement>
  style?: CSSProperties
}

/**
 * The bee from the HiveMQ mark, without its disc. The body carries a thin honey outline
 * that disappears on a yellow cell and keeps the bee visible over dark grounds in flight.
 * Its wings can beat (see `setWingBeat`) without altering the logo's paths.
 */
export function HiveBee({ ref, style }: HiveBeeProps) {
  // useId returns characters like ":" that aren't valid in url(#id) references
  const id = `hive-bee-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`

  return (
    <svg
      ref={ref}
      className="hive-bee"
      viewBox="5.5 7.5 26 22"
      width="32"
      height="27"
      aria-hidden="true"
      focusable="false"
      style={style}
    >
      <defs>
        <clipPath id={`${id}-body`}>
          <ellipse cx={BODY_CLIP.cx} cy={BODY_CLIP.cy} rx={BODY_CLIP.rx} ry={BODY_CLIP.ry} />
          <circle cx={HEAD_CLIP.cx} cy={HEAD_CLIP.cy} r={HEAD_CLIP.r} />
        </clipPath>
        {(['left', 'right'] as const).map((side) => (
          <clipPath key={side} id={`${id}-${side}`}>
            <path clipRule="evenodd" d={sideClipPath(side)} />
          </clipPath>
        ))}
      </defs>
      <g clipPath={`url(#${id}-body)`}>
        <BeeArtwork />
      </g>
      {(['left', 'right'] as const).map((side) => (
        <g key={side} clipPath={`url(#${id}-${side})`}>
          <g data-wing={side}>
            <BeeArtwork />
          </g>
        </g>
      ))}
    </svg>
  )
}
