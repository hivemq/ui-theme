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

import { defaultBaseConfig, mergeConfigs } from '@chakra-ui/react'
import { colors } from './colors/primitive-colors.js'
import { semanticTokens } from './colors/semantic-tokens.js'

export const config = mergeConfigs(defaultBaseConfig, {
  theme: {
    breakpoints: {
      sm: '20rem',
      md: '48rem',
      lg: '60rem',
      xl: '75rem',
      '2xl': '96rem',
      '3xl': '120rem',
    },
    tokens: {
      colors,
      fonts: {
        heading: {
          value: "'Raleway', 'Roboto', 'Segoe UI', 'sans-serif'",
        },
        body: {
          value:
            "'Roboto', 'Segoe UI', 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', 'Arial', 'sans-serif', 'system-ui', '-apple-system'",
        },
        monospace: {
          value:
            "'IntelOne Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'",
        },
      },
    },
    semanticTokens: {
      colors: {
        ...semanticTokens,
      },
    },
    slotRecipes: {
      Toast: {
        slots: ['root', 'title', 'description', 'indicator', 'actionTrigger', 'closeTrigger'],
        base: {
          root: {
            '&[data-type=warning]': {
              bg: 'warning.solid',
              color: 'warning.contrast',
              borderColor: 'warning.emphasized',
            },
            '&[data-type=success]': {
              bg: 'success.solid',
              color: 'success.contrast',
              borderColor: 'success.emphasized',
            },
            '&[data-type=error]': {
              bg: 'danger.solid',
              color: 'danger.contrast',
              borderColor: 'danger.emphasized',
            },
            '&[data-type=info]': {
              bg: 'info.solid',
              color: 'info.contrast',
              borderColor: 'info.emphasized',
            },
          },
        },
      },
      checkbox: {
        slots: ['root', 'label', 'control', 'indicator', 'group'],
        base: {
          root: {
            // Uses the primitive 'blue' palette intentionally for backwards compatibility — 'info' resolves to
            // blue.500 while the design spec requires blue.600 (colorPalette.solid).
            colorPalette: 'blue',
          },
          control: {
            // No semantic token maps to white/gray.800 yet. Candidate for a
            // bg.surface token if the base surface colors are revised.
            bg: 'white',
            _dark: {
              bg: 'gray.800',
            },
          },
        },
      },
    },
    recipes: {
      Text: {
        base: {
          color: 'content.primary',
        },
        variants: {
          variant: {
            muted: { color: 'content.secondary' },
            subtle: { color: 'content.tertiary' },
            danger: { color: 'content.danger' },
            warning: { color: 'content.warning' },
            success: { color: 'content.success' },
            info: { color: 'content.info' },
          },
        },
      },
      Heading: {
        base: {
          color: 'content.primary',
          fontFamily: 'heading',
        },
        variants: {
          variant: {
            muted: { color: 'content.secondary' },
            subtle: { color: 'content.tertiary' },
            danger: { color: 'content.danger' },
            warning: { color: 'content.warning' },
            success: { color: 'content.success' },
            info: { color: 'content.info' },
            brand: { color: 'content.brand' },
          },
        },
      },
    },
  },
})
