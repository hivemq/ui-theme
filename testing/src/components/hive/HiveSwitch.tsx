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

import { Box, chakra, HStack, Text, VisuallyHidden } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { LuMoon, LuSun, LuSunMoon } from 'react-icons/lu'
import { honeycombFrames, type Point } from '~/util/honeycomb'
import { HiveBee, setWingBeat } from './HiveBee'

export const colorModes = [
  { value: 'system', label: 'System', Icon: LuSunMoon },
  { value: 'light', label: 'Light', Icon: LuSun },
  { value: 'dark', label: 'Dark', Icon: LuMoon },
] as const

type ColorModeValue = (typeof colorModes)[number]['value']

const HEXAGON = 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)'
const FLIGHT_MS = 1000
const DISSOLVE_MS = 950
// One full wing beat; about 6 beats a second
const WINGBEAT_MS = 160
// How far the wings draw in at the bottom of each beat (0.28 → 72% of their length)
const WINGBEAT_DEPTH = 0.28
// The bee's box is 32 × 27; these offsets put its middle on a point
const BEE_HALF = { x: 16, y: 14 }

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2)

/**
 * Applies a resolved mode to the document the way next-themes does (attribute="class"),
 * synchronously, so a view transition captures the new state.
 */
function applyResolvedMode(mode: 'light' | 'dark') {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(mode)
  root.style.colorScheme = mode
}

/**
 * The page's color mode switch. The HiveMQ bee flies between three honeycomb cells,
 * and the page changes theme by dissolving into honeycomb from where the bee lands.
 * Built on native radio inputs; with reduced motion the bee and the theme change instantly.
 */
export function HiveSwitch() {
  const { theme, systemTheme, setTheme } = useTheme()
  const current = (theme ?? 'system') as ColorModeValue

  // `choice` is the checked radio; `landed` is the cell holding honey (empty while the bee flies)
  const [choice, setChoice] = useState<ColorModeValue>(current)
  const [landed, setLanded] = useState<ColorModeValue | null>(current)

  const containerRef = useRef<HTMLDivElement>(null)
  const beeRef = useRef<SVGSVGElement>(null)
  const cellRefs = useRef<Partial<Record<ColorModeValue, HTMLElement | null>>>({})
  const beePosition = useRef<Point>({ x: 0, y: 0 })
  const restPosition = useRef<Point>({ x: 0, y: 0 })
  const flightFrame = useRef(0)
  const isFlying = useRef(false)

  const cellCenter = useCallback((value: ColorModeValue): Point => {
    const container = containerRef.current?.getBoundingClientRect()
    const cell = cellRefs.current[value]?.getBoundingClientRect()
    if (!container || !cell) {
      return { x: 0, y: 0 }
    }
    return {
      x: cell.left - container.left + cell.width / 2,
      y: cell.top - container.top + cell.height / 2,
    }
  }, [])

  const placeBee = useCallback((x: number, y: number, rotation = 0, scale = 1) => {
    beePosition.current = { x, y }
    if (beeRef.current) {
      beeRef.current.style.transform = `translate(${x - BEE_HALF.x}px, ${y - BEE_HALF.y}px) rotate(${rotation}deg) scale(${scale})`
    }
  }, [])

  // Follow theme changes made elsewhere (another tab, the OS) without a flight
  useEffect(() => {
    if (!isFlying.current) {
      setChoice(current)
      setLanded(current)
    }
  }, [current])

  // Seat the bee on its cell whenever it lands or the layout changes
  useLayoutEffect(() => {
    if (!landed) {
      return
    }
    const seat = () => {
      restPosition.current = cellCenter(landed)
      placeBee(restPosition.current.x, restPosition.current.y)
    }
    seat()
    window.addEventListener('resize', seat)
    return () => window.removeEventListener('resize', seat)
  }, [landed, cellCenter, placeBee])

  // A barely-there bob while the bee rests
  useEffect(() => {
    if (prefersReducedMotion()) {
      return
    }
    let frame = requestAnimationFrame(function bob(now) {
      if (!isFlying.current) {
        const { x, y } = restPosition.current
        placeBee(x, y + Math.sin(now / 650) * 1.2, Math.sin(now / 900) * 3)
      }
      frame = requestAnimationFrame(bob)
    })
    return () => cancelAnimationFrame(frame)
  }, [placeBee])

  useEffect(() => () => cancelAnimationFrame(flightFrame.current), [])

  const fly = (to: Point, onLand: () => void) => {
    cancelAnimationFrame(flightFrame.current)
    if (prefersReducedMotion()) {
      placeBee(to.x, to.y)
      setWingBeat(beeRef.current, 1)
      onLand()
      return
    }
    const from = { ...beePosition.current }
    const dx = to.x - from.x
    const peak = Math.min(34, Math.abs(dx) * 0.6 + 14)
    const start = performance.now()
    isFlying.current = true

    flightFrame.current = requestAnimationFrame(function step(now) {
      const t = Math.min(1, (now - start) / FLIGHT_MS)
      const eased = easeInOutCubic(t)
      const x = from.x + dx * eased
      const y = from.y + (to.y - from.y) * eased - Math.sin(Math.PI * eased) * peak
      // Lean into the climb and out of the descent; the sin() envelope keeps take-off and
      // touchdown level, so the bee lands without snapping to its resting pose
      const lean = Math.max(-24, Math.min(24, dx * 0.35))
      const bank = lean * Math.cos(Math.PI * t) * Math.sin(Math.PI * t) * 2
      placeBee(x, y, bank, 1 + Math.sin(Math.PI * t) * 0.18)
      // Wings speed up on take-off and settle on landing instead of starting and stopping abruptly
      const envelope = Math.max(0, Math.min(1, Math.sin(Math.PI * t) * 3))
      const phase = 0.5 - 0.5 * Math.cos((2 * Math.PI * (now - start)) / WINGBEAT_MS)
      setWingBeat(beeRef.current, 1 - WINGBEAT_DEPTH * envelope * phase)
      if (t < 1) {
        flightFrame.current = requestAnimationFrame(step)
        return
      }
      isFlying.current = false
      setWingBeat(beeRef.current, 1)
      onLand()
    })
  }

  const changeTheme = (value: ColorModeValue) => {
    const resolved = value === 'system' ? (systemTheme ?? 'light') : value
    const isDark = document.documentElement.classList.contains('dark')
    const update = () => {
      applyResolvedMode(resolved)
      setTheme(value)
    }
    if (
      resolved === (isDark ? 'dark' : 'light') ||
      prefersReducedMotion() ||
      typeof document.startViewTransition !== 'function'
    ) {
      update()
      return
    }

    const cell = cellRefs.current[value]?.getBoundingClientRect()
    const origin = cell
      ? { x: cell.left + cell.width / 2, y: cell.top + cell.height / 2 }
      : { x: window.innerWidth, y: 0 }
    const transition = document.startViewTransition(update)
    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: honeycombFrames({
              width: window.innerWidth,
              height: window.innerHeight,
              origin,
            }),
          },
          {
            duration: DISSOLVE_MS,
            easing: 'linear',
            // Hold the fully dissolved frame: without it the old snapshot reappears for one
            // frame between the animation ending and the browser removing the transition
            fill: 'forwards',
            pseudoElement: '::view-transition-old(root)',
          },
        )
      })
      .catch(() => {
        // The transition was skipped (e.g. the tab was hidden); the theme is already applied
      })
  }

  const select = (value: ColorModeValue) => {
    setChoice(value)
    setLanded(null)
    fly(cellCenter(value), () => {
      setLanded(value)
      changeTheme(value)
    })
  }

  return (
    <HStack
      ref={containerRef}
      as="fieldset"
      position="relative"
      gap={2}
      border={0}
      p={0}
      m={0}
      css={{
        '& .hive-bee': {
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 3,
          pointerEvents: 'none',
          // Rasterize the bee once and move it as a layer, so thin shapes don't shimmer
          willChange: 'transform',
        },
      }}
    >
      <VisuallyHidden as="legend">Color mode</VisuallyHidden>
      {colorModes.map(({ value, label, Icon }) => {
        const hasHoney = landed === value
        return (
          <chakra.label
            key={value}
            display="grid"
            justifyItems="center"
            gap={1}
            cursor="pointer"
            css={{
              '&:has(input:focus-visible) .hive-cell': {
                outline: '2px solid',
                outlineColor: 'brand.focusRing',
                outlineOffset: '3px',
                borderRadius: 'sm',
              },
            }}
          >
            <VisuallyHidden asChild>
              <input
                type="radio"
                name="color-mode"
                value={value}
                checked={choice === value}
                onChange={() => select(value)}
              />
            </VisuallyHidden>
            <Box
              ref={(element: HTMLDivElement | null) => {
                cellRefs.current[value] = element
              }}
              className="hive-cell"
              position="relative"
              w="40px"
              h="46px"
              display="grid"
              placeItems="center"
              color="content.primary"
              _before={{
                content: '""',
                position: 'absolute',
                inset: 0,
                clipPath: HEXAGON,
                bg: 'content.primary',
                opacity: 0.28,
              }}
              _after={{
                content: '""',
                position: 'absolute',
                inset: '1.5px',
                clipPath: HEXAGON,
                bg: 'bg.default',
              }}
            >
              <Box
                position="absolute"
                inset={0}
                zIndex={1}
                clipPath={HEXAGON}
                bg="brand.solid"
                transformOrigin="50% 100%"
                transform={hasHoney ? 'scaleY(1)' : 'scaleY(0)'}
                transition={
                  hasHoney
                    ? 'transform 260ms cubic-bezier(.3, 1.4, .6, 1)'
                    : 'transform 220ms ease-in'
                }
                data-testid={`honey-${value}`}
                data-filled={hasHoney ? '' : undefined}
              />
              <Box
                as="span"
                position="relative"
                zIndex={2}
                fontSize="17px"
                opacity={hasHoney ? 0 : 1}
                transition="opacity 150ms"
                aria-hidden="true"
              >
                <Icon />
              </Box>
            </Box>
            <Text as="span" fontSize="caption" color="content.secondary">
              {label}
            </Text>
          </chakra.label>
        )
      })}
      <HiveBee ref={beeRef} />
    </HStack>
  )
}
