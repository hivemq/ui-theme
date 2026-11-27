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
  // Makes native elements (date pickers, scrollbars, number spinners) follow the colour mode as well
  globalCss: {
    ':root, .light': { colorScheme: 'light' },
    '.dark, .dark .chakra-theme:not(.light)': { colorScheme: 'dark' },
  },
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
            "'Intel One Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'",
        },
        mono: {
          value: '{fonts.monospace}',
        },
      },
    },
    semanticTokens: {
      colors: {
        ...semanticTokens,
      },
      fontSizes: {
        caption: { value: '{fontSizes.xs}' },
        body: { value: '{fontSizes.sm}' },
        subtitle: { value: '{fontSizes.md}' },
        title: { value: '{fontSizes.xl}' },
        header: { value: '{fontSizes.2xl}' },
        display: { value: '{fontSizes.4xl}' },
      },
    },
    // Recipe keys must match Chakra's (lowercase), or Chakra adds them as unused recipes
    slotRecipes: {
      // Form fields: Chakra's `outline` variant is transparent, which hides the field on a dark panel
      numberInput: {
        slots: [
          'root',
          'label',
          'input',
          'control',
          'valueText',
          'incrementTrigger',
          'decrementTrigger',
          'scrubber',
        ],
        variants: { variant: { outline: { input: { bg: 'bg.input' } } } },
      },
      pinInput: {
        slots: ['root', 'label', 'input', 'control'],
        variants: { variant: { outline: { input: { bg: 'bg.input' } } } },
      },
      select: {
        slots: [
          'label',
          'positioner',
          'trigger',
          'indicator',
          'clearTrigger',
          'item',
          'itemText',
          'itemIndicator',
          'itemGroup',
          'itemGroupLabel',
          'list',
          'content',
          'root',
          'control',
          'valueText',
          'indicatorGroup',
        ],
        variants: { variant: { outline: { trigger: { bg: 'bg.input' } } } },
      },
      nativeSelect: {
        slots: ['root', 'field', 'indicator'],
        variants: { variant: { outline: { field: { bg: 'bg.input' } } } },
      },
      combobox: {
        slots: [
          'root',
          'clearTrigger',
          'content',
          'control',
          'input',
          'item',
          'itemGroup',
          'itemGroupLabel',
          'itemIndicator',
          'itemText',
          'label',
          'list',
          'positioner',
          'trigger',
          'empty',
          'indicatorGroup',
        ],
        variants: { variant: { outline: { input: { bg: 'bg.input' } } } },
      },
      tagsInput: {
        slots: [
          'root',
          'label',
          'control',
          'input',
          'clearTrigger',
          'item',
          'itemPreview',
          'itemInput',
          'itemText',
          'itemDeleteTrigger',
        ],
        variants: { variant: { outline: { control: { bg: 'bg.input' } } } },
      },
      table: {
        slots: ['root', 'caption', 'header', 'body', 'footer', 'row', 'columnHeader', 'cell'],
        variants: {
          variant: {
            // Chakra puts `line` rows on the page background (`bg`); keep them on surfaces instead
            line: { row: { bg: 'bg.panel' } },
          },
        },
      },
      toast: {
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
            bg: 'bg.input',
          },
        },
      },
    },
    recipes: {
      // Chakra's `outline` variant is transparent, which hides the field on a dark panel
      input: { variants: { variant: { outline: { bg: 'bg.input' } } } },
      textarea: { variants: { variant: { outline: { bg: 'bg.input' } } } },
      // Keeps the addon apart from the field it is attached to in dark mode
      inputAddon: { variants: { variant: { outline: { bg: 'bg.inputAddon' } } } },
      // No base color: text inherits fg (content.primary) and keeps the color of parents like Alert
      text: {
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
      heading: {
        base: {
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
