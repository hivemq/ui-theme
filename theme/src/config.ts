import {createSystem, defaultConfig, defineConfig} from '@chakra-ui/react'
import {colors} from './colors/primitive-colors.js'
import {semanticTokens} from './colors/semantic-tokens.js'

export const globalCss = {
  ':root': {
    colorScheme: 'light',
    '--chakra-transition-duration': '200ms',
    '--chakra-transition-easing': 'ease-in-out',
  },
  "[data-theme='dark']": {
    colorScheme: 'dark',
  },
  'html, body': {
    backgroundColor: 'var(--chakra-colors-bg-default)',
    color: 'var(--chakra-colors-text-default)',
  },
  html: {
    colorPalette: 'secondary',
  },
  '*': {
    transition:
      'background-color var(--chakra-transition-duration) var(--chakra-transition-easing), color var(--chakra-transition-duration) var(--chakra-transition-easing), border-color var(--chakra-transition-duration) var(--chakra-transition-easing)',
  },
  '@media (prefers-reduced-motion: reduce)': {
    '*': {
      transition: 'none !important',
    },
  },
}

const config = defineConfig({
  conditions: {
    _dark: "[data-theme='dark'] &",
    _light: "[data-theme='light'] &",
    _osDark: '@media (prefers-color-scheme: dark)',
    _osLight: '@media (prefers-color-scheme: light)',
  },
  globalCss: globalCss,
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
        // For some reason the foreground color doesn't switch based on context properly if we put this inside the file declaring the semantic tokens

      },
    },
    recipes: {
      Text: {
        base: {
          color: 'content.primary',
        },
        variants: {
          variant: {
            muted: {color: 'content.secondary'},
            subtle: {color: 'content.tertiary'},
            error: {color: 'content.error'},
            warning: {color: 'content.warning'},
            success: {color: 'content.success'},
            info: {color: 'content.info'},
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
            muted: {color: 'content.secondary'},
            subtle: {color: 'content.tertiary'},
            error: {color: 'content.error'},
            warning: {color: 'content.warning'},
            success: {color: 'content.success'},
            info: {color: 'content.info'},
            brand: {color: 'content.brand'},
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)

export const context = system
