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

import { createSystem, defaultConfig } from '@chakra-ui/react'
import { describe, expect, it } from 'vitest'
import { config } from '../config'

// Build the theme the way apps do, so these tests see what actually ships after the merge with Chakra
const system = createSystem(defaultConfig, config)

type CssTree = { [selector: string]: string | CssTree }
type ColorToken = { value: { base?: string; _light?: string; _dark: string } }

// The blocks Chakra emits per condition. `_light` beats `base`: `base` sits in a zero-specificity `:where()`.
const BASE = '&:where(html, .chakra-theme)'
const LIGHT = ':root &, .light &'
const DARK = '.dark &, .dark .chakra-theme:not(.light) &'

const tokenCss = (system.getTokenCss() as unknown as Record<string, CssTree>)['@layer tokens']

/** Every CSS variable in a selector block, flattened from the token stylesheet */
function variables(selector: string): Record<string, string> {
  return Object.fromEntries(
    Object.entries((tokenCss[selector] ?? {}) as CssTree).filter(
      (entry): entry is [string, string] => typeof entry[1] === 'string',
    ),
  )
}

/** `blackAlpha.200` → `--chakra-colors-black-alpha-200` */
const cssVar = (path: string) =>
  `--chakra-colors-${path.replace(/\./g, '-').replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`

// What a browser ends up with in each mode
const light = { ...variables(BASE), ...variables(LIGHT) }
const dark = { ...variables(BASE), ...variables(DARK) }

const themeColorTokens = Object.entries(
  config.theme?.semanticTokens?.colors as Record<string, Record<string, ColorToken>>,
).flatMap(([group, tokens]) =>
  Object.entries(tokens).map(([key, token]) => ({
    name: key === 'DEFAULT' ? group : `${group}.${key}`,
    light: token.value._light ?? token.value.base,
    dark: token.value._dark,
  })),
)

describe('theme system', () => {
  describe('Token references', () => {
    // An unresolved reference like `{colors.yellow.7 00}` is emitted as escaped text, e.g. `colors\.yellow\.7\ 00`
    it.each([
      ['light', light],
      ['dark', dark],
    ])('should resolve every token reference in %s mode', (_mode, vars) => {
      const unresolved = Object.entries(vars).filter(([, value]) => value.includes('\\.'))
      expect(unresolved).toEqual([])
    })

    // Catches tokens that Chakra's own values shadow, as well as tokens missing from the output
    it.each([
      ['light', light, 'light'],
      ['dark', dark, 'dark'],
    ] as const)(
      'should ship every theme color token as declared in %s mode',
      (_mode, vars, key) => {
        const wrong = themeColorTokens
          .map((token) => ({
            name: token.name,
            expected: `var(${cssVar(/^\{colors\.(.+)\}$/.exec(token[key] ?? '')?.[1] ?? '')})`,
            actual: vars[cssVar(token.name)],
          }))
          .filter(({ expected, actual }) => expected !== actual)
        expect(wrong).toEqual([])
      },
    )
  })

  describe('Chakra overrides', () => {
    it('should replace Chakra’s page background and text color with the theme’s', () => {
      expect(light['--chakra-colors-bg']).toBe('var(--chakra-colors-gray-50)')
      expect(dark['--chakra-colors-bg']).toBe('var(--chakra-colors-gray-950)')
      expect(light['--chakra-colors-fg']).toBe('var(--chakra-colors-gray-900)')
      expect(dark['--chakra-colors-fg']).toBe('var(--chakra-colors-gray-50)')
    })

    it('should emit the theme’s black, white and alpha shades', () => {
      expect(light['--chakra-colors-black']).toBe('rgba(1, 1, 1, 1)')
      expect(light['--chakra-colors-white']).toBe('rgba(255, 255, 255, 1)')
      expect(light['--chakra-colors-black-alpha-200']).toBe('rgba(1, 1, 1, 0.08)')
      expect(light['--chakra-colors-white-alpha-200']).toBe('rgba(255, 255, 255, 0.08)')
    })
  })

  describe('Dark mode layering', () => {
    // A hover, selected or divider tint that equals the surface it sits on is invisible. Surfaces
    // are `bg.panel` in dark mode, so every gray-scale tint has to differ from it (and from the page).
    const grayTints = ['secondary', 'gray'].flatMap((palette) =>
      ['subtle', 'muted', 'emphasized'].map((slot) => `${palette}.${slot}`),
    )
    it.each(grayTints)('should keep %s off the panel and page background in dark mode', (token) => {
      expect(dark[cssVar(token)]).not.toBe(dark['--chakra-colors-bg-panel'])
      expect(dark[cssVar(token)]).not.toBe(dark['--chakra-colors-bg'])
    })
  })

  describe('Form fields', () => {
    // A field with the panel's or the page's color only shows its border, which is faint in dark mode
    it('should keep the field background off the panel and page background in dark mode', () => {
      expect(dark[cssVar('bg.input')]).not.toBe(dark['--chakra-colors-bg-panel'])
      expect(dark[cssVar('bg.input')]).not.toBe(dark['--chakra-colors-bg'])
    })

    // Chakra without our theme, to prove an override changes the fill and nothing else: a slot
    // recipe that is merged wrongly loses its sizes, other variants or slots
    const chakra = createSystem(defaultConfig)

    it.each(['input', 'textarea'])('should only change the fill of outline %s fields', (recipe) => {
      const ours = structuredClone(system.getRecipe(recipe))
      const theirs = structuredClone(chakra.getRecipe(recipe))
      expect(ours.variants?.variant.outline.bg).toBe('bg.input')
      ours.variants.variant.outline.bg = theirs.variants?.variant.outline.bg
      expect(ours).toEqual(theirs)
    })

    it.each([
      ['numberInput', 'input'],
      ['pinInput', 'input'],
      ['select', 'trigger'],
      ['nativeSelect', 'field'],
      ['combobox', 'input'],
      ['tagsInput', 'control'],
    ])('should only change the fill of outline %s fields', (recipe, slot) => {
      const ours = structuredClone(system.getSlotRecipe(recipe))
      const theirs = structuredClone(chakra.getSlotRecipe(recipe))
      expect(ours.variants?.variant.outline[slot].bg).toBe('bg.input')
      ours.variants.variant.outline[slot].bg = theirs.variants?.variant.outline[slot].bg
      expect(ours).toEqual(theirs)
    })

    it('should only change the fill of outline input addons', () => {
      const ours = structuredClone(system.getRecipe('inputAddon'))
      const theirs = structuredClone(chakra.getRecipe('inputAddon'))
      expect(ours.variants?.variant.outline.bg).toBe('bg.inputAddon')
      ours.variants.variant.outline.bg = theirs.variants?.variant.outline.bg
      expect(ours).toEqual(theirs)
    })

    // An addon with the field's color reads as part of the field
    it('should keep input addons apart from the field and the panel in dark mode', () => {
      expect(dark[cssVar('bg.inputAddon')]).not.toBe(dark[cssVar('bg.input')])
      expect(dark[cssVar('bg.inputAddon')]).not.toBe(dark['--chakra-colors-bg-panel'])
    })

    it('should keep Chakra’s input addon fill in light mode', () => {
      expect(light[cssVar('bg.inputAddon')]).toBe(light[cssVar('bg.muted')])
    })

    // Light mode keeps the look fields had before: white, like the panels they sit on
    it('should keep fields white in light mode', () => {
      expect(light[cssVar('bg.input')]).toBe('var(--chakra-colors-white)')
    })
  })

  describe('Native controls', () => {
    const globalCss = (system.getGlobalCss() as unknown as Record<string, CssTree>)['@layer base']

    it('should set the color scheme per mode', () => {
      expect(globalCss['&:root, &.light']).toMatchObject({ colorScheme: 'light' })
      expect(globalCss['&.dark, &.dark .chakra-theme:not(.light)']).toMatchObject({
        colorScheme: 'dark',
      })
    })
  })

  describe('Recipes', () => {
    // Chakra components that read a recipe key Chakra itself doesn't define
    const extraRecipeKeys = ['text']

    // A key Chakra doesn't know (e.g. `Toast` instead of `toast`) is added as a new, unused recipe
    it('should only override recipes that Chakra components read', () => {
      const known = [...Object.keys(defaultConfig.theme?.recipes ?? {}), ...extraRecipeKeys]
      expect(
        Object.keys(config.theme?.recipes ?? {}).filter((key) => !known.includes(key)),
      ).toEqual([])
    })

    it('should only override slot recipes that Chakra components read', () => {
      const known = Object.keys(defaultConfig.theme?.slotRecipes ?? {})
      expect(
        Object.keys(config.theme?.slotRecipes ?? {}).filter((key) => !known.includes(key)),
      ).toEqual([])
    })
  })
})
