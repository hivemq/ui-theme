import { defaultBaseConfig, mergeConfigs } from '@chakra-ui/react'
import { colors } from '~/colors/primitive-colors.ts'
import { semanticTokens } from '~/colors/semantic-tokens.ts'
import { buttonRecipe } from '~/recipes/buttons.ts'

export const globalCss = {
  ':root': {
    colorScheme: 'light',
    '--chakra-transition-duration': '200ms',
    '--chakra-transition-easing': 'ease-in-out',
  },
  "[data-theme='dark']": {
    colorScheme: 'dark',
  },
  // Add smooth transitions for color mode changes
  '*': {
    transition:
      'background-color var(--chakra-transition-duration) var(--chakra-transition-easing), color var(--chakra-transition-duration) var(--chakra-transition-easing), border-color var(--chakra-transition-duration) var(--chakra-transition-easing)',
  },
  // Respect user's reduced motion preferences
  '@media (prefers-reduced-motion: reduce)': {
    '*': {
      transition: 'none !important',
    },
  },
}

export const config = mergeConfigs(defaultBaseConfig, {
  conditions: {
    dark: "[data-theme='dark'] &",
    light: "[data-theme='light'] &",
    // Add system preference support
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
        shell: {
          bg: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.900}' } },
          muted: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.800}' } },
          subtile: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.700}' } },
          contrastBg: { value: { base: 'white', _dark: 'black' } },
          border: { value: { base: '{colors.gray.300}', _dark: '{colors.gray.700}' } },
          group: { value: { base: '{colors.gray.500}', _dark: '{colors.gray.500}' } },
          item: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.50}' } },
        },
        ...semanticTokens,
      },
    },
    recipes: {
      button: buttonRecipe,
      Text: {
        base: {
          color: 'content.primary',
        },
        variants: {
          variant: {
            muted: { color: 'content.gray' },
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
            muted: { color: 'content.gray' },
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
