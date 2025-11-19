import {defaultBaseConfig, mergeConfigs} from '@chakra-ui/react'
import {colors} from './colors/primitive-colors.js'
import {semanticTokens} from './colors/semantic-tokens.js'

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
    recipes: {
      Text: {
        base: {
          color: 'content.primary',
        },
        variants: {
          variant: {
            muted: { color: 'content.secondary' },
            subtle: { color: 'content.tertiary' },
            error: { color: 'content.error' },
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
            error: { color: 'content.error' },
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
