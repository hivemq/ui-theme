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

import themePackage from '../../../theme/package.json'
import { colors as primitiveColors } from '../../../theme/src/colors/primitive-colors'
import { semanticTokens } from '../../../theme/src/colors/semantic-tokens'

/**
 * Token data for the design system site, read straight from the theme source
 * so the site can never drift from what the package ships.
 */

export type Mode = 'light' | 'dark'

export const themeVersion = themePackage.version

export const RAMP_STEPS = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const

export const HUE_RAMPS = [
  'gray',
  'red',
  'pink',
  'purple',
  'cyan',
  'blue',
  'teal',
  'green',
  'yellow',
  'orange',
] as const

export const ALPHA_RAMPS = ['black', 'white'] as const

/** Palettes that expose the full set of colorPalette slots */
export const PALETTES = [
  'brand',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'highlight',
] as const

export const PALETTE_SLOTS = [
  'contrast',
  'fg',
  'faint',
  'subtle',
  'muted',
  'emphasized',
  'solid',
  'focusRing',
] as const

type PrimitiveEntry = { value: string }
type SemanticEntry = { value: { base: string; _dark: string } }

const primitives = primitiveColors as unknown as Record<string, Record<string, PrimitiveEntry>>
const semantics = semanticTokens as unknown as Record<string, Record<string, SemanticEntry>>

export interface SemanticToken {
  /** Full token path, e.g. `brand.solid` */
  name: string
  group: string
  key: string
  /** Primitive path used in light mode, e.g. `yellow.300` */
  light: string
  /** Primitive path used in dark mode, e.g. `yellow.500` */
  dark: string
  deprecated: boolean
}

/** Turns `{colors.gray.50}` into `gray.50`; other strings are returned unchanged */
export function stripReference(reference: string): string {
  const match = /^\{colors\.(.+)\}$/.exec(reference)
  return match ? match[1] : reference
}

/**
 * Resolves a primitive path (`gray.50`, `white`, `black.200`, `categorical.3`) to its CSS value.
 * Returns `null` when the path doesn't exist in the primitive colors.
 */
export function primitiveValue(path: string): string | null {
  const separator = path.indexOf('.')
  const name = separator === -1 ? path : path.slice(0, separator)
  const step = separator === -1 ? 'DEFAULT' : path.slice(separator + 1)
  return primitives[name]?.[step]?.value ?? null
}

export const semanticTokenList: SemanticToken[] = Object.entries(semantics).flatMap(
  ([group, tokens]) =>
    Object.entries(tokens).map(([key, token]) => ({
      name: `${group}.${key}`,
      group,
      key,
      light: stripReference(token.value.base),
      dark: stripReference(token.value._dark),
      deprecated: group === 'shell',
    })),
)

export function getSemanticToken(name: string): SemanticToken | undefined {
  return semanticTokenList.find((token) => token.name === name)
}

export function tokensInGroup(group: string): SemanticToken[] {
  return semanticTokenList.filter((token) => token.group === group)
}

/** Primitive path a semantic token uses in the given mode */
export function referenceFor(token: SemanticToken, mode: Mode): string {
  return mode === 'light' ? token.light : token.dark
}

/** CSS value of a semantic token in the given mode, or `null` if its reference doesn't resolve */
export function resolveSemantic(token: SemanticToken, mode: Mode): string | null {
  return primitiveValue(referenceFor(token, mode))
}

/**
 * Maps each primitive path to the semantic tokens that reference it, e.g.
 * `yellow.300` → `['brand.solid (light)', 'content.brand (dark)']`.
 * Deprecated tokens are left out.
 */
export function buildUsageMap(): Map<string, string[]> {
  const usage = new Map<string, string[]>()
  for (const token of semanticTokenList) {
    if (token.deprecated) {
      continue
    }
    for (const mode of ['light', 'dark'] as const) {
      const reference = referenceFor(token, mode)
      const entries = usage.get(reference) ?? []
      entries.push(`${token.name} (${mode})`)
      usage.set(reference, entries)
    }
  }
  return usage
}

export const categoricalColors = Object.entries(primitives.categorical).map(([key, entry]) => ({
  name: `categorical.${key}`,
  value: entry.value,
}))
