import { defaultBaseConfig, mergeConfigs } from '@chakra-ui/react'
import { colors } from '~/colors/primitive-colors.ts'
import { buttonRecipe } from '~/recipes/buttons.ts'

export const config = mergeConfigs(defaultBaseConfig, {
  globalCss: {
    html: {
      colorPalette: 'default',
      bg: '{colors.shell.bg}',
    },
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
            "'IntelOne Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'",
        },
      },
    },
    semanticTokens: {
      colors: semanticTokens,
    },
    recipes: {
      buttonRecipe,
    },
  },
})
