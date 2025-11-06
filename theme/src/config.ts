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
    backgroundColor: '{colors.bg.DEFAULT}',
    color: '{colors.text.DEFAULT}',
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

const config = defineConfig({
  conditions: {
    _dark: "[data-theme='dark'] &",
    _light: "[data-theme='light'] &",
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
        ...semanticTokens,
        // For some reason the foreground color doesn't switch based on context properly if we put this inside the file declaring the semantic tokens
        secondary: {
          contrast: {value: {base: '{colors.black}', _dark: '{colors.white}'}},
          fg: {value: {base: '{colors.gray.600}', _dark: '{colors.gray.400}'}},
          subtle: {value: {base: '{colors.gray.100}', _dark: '{colors.gray.900}'}},
          muted: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
          emphasized: {value: {base: '{colors.gray.300}', _dark: '{colors.gray.700}'}},
          solid: {value: {base: '{colors.gray.300}', _dark: '{colors.gray.500}'}},
          focusRing: {value: {base: '{colors.gray.400}', _dark: '{colors.gray.400}'}},
        },
        brand: {
          contrast: {value: {base: '{colors.black}', _dark: '{colors.black}'}},
          fg: {value: {base: '{colors.yellow.600}', _dark: '{colors.yellow.300}'}},
          subtle: {value: {base: '{colors.yellow.50}', _dark: '{colors.yellow.950}'}},
          muted: {value: {base: '{colors.yellow.200}', _dark: '{colors.yellow.800}'}},
          emphasized: {value: {base: '{colors.yellow.300}', _dark: '{colors.yellow.700}'}},
          solid: {value: {base: '{colors.yellow.400}', _dark: '{colors.yellow.400}'}},
          focusRing: {value: {base: '{colors.yellow.400}', _dark: '{colors.yellow.400}'}},
        },
        success: {
          contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
          fg: {value: {base: '{colors.green.600}', _dark: '{colors.green.400}'}},
          subtle: {value: {base: '{colors.green.50}', _dark: '{colors.green.950}'}},
          muted: {value: {base: '{colors.green.200}', _dark: '{colors.green.800}'}},
          emphasized: {value: {base: '{colors.green.300}', _dark: '{colors.green.700}'}},
          solid: {value: {base: '{colors.green.500}', _dark: '{colors.green.500}'}},
          focusRing: {value: {base: '{colors.green.400}', _dark: '{colors.green.400}'}},
        },
        error: {
          contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
          fg: {value: {base: '{colors.red.600}', _dark: '{colors.red.400}'}},
          subtle: {value: {base: '{colors.red.50}', _dark: '{colors.red.950}'}},
          muted: {value: {base: '{colors.red.200}', _dark: '{colors.red.800}'}},
          emphasized: {value: {base: '{colors.red.300}', _dark: '{colors.red.700}'}},
          solid: {value: {base: '{colors.red.500}', _dark: '{colors.red.500}'}},
          focusRing: {value: {base: '{colors.red.400}', _dark: '{colors.red.400}'}},
        },
        warning: {
          contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
          fg: {value: {base: '{colors.orange.600}', _dark: '{colors.orange.400}'}},
          subtle: {value: {base: '{colors.orange.50}', _dark: '{colors.orange.950}'}},
          muted: {value: {base: '{colors.orange.200}', _dark: '{colors.orange.800}'}},
          emphasized: {value: {base: '{colors.orange.300}', _dark: '{colors.orange.700}'}},
          solid: {value: {base: '{colors.orange.500}', _dark: '{colors.orange.500}'}},
          focusRing: {value: {base: '{colors.orange.400}', _dark: '{colors.orange.400}'}},
        },
        info: {
          contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
          fg: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.400}'}},
          subtle: {value: {base: '{colors.blue.50}', _dark: '{colors.blue.950}'}},
          muted: {value: {base: '{colors.blue.200}', _dark: '{colors.blue.800}'}},
          emphasized: {value: {base: '{colors.blue.300}', _dark: '{colors.blue.700}'}},
          solid: {value: {base: '{colors.blue.500}', _dark: '{colors.blue.500}'}},
          focusRing: {value: {base: '{colors.blue.400}', _dark: '{colors.blue.400}'}},
        },
        highlight: {
          contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
          fg: {value: {base: '{colors.purple.600}', _dark: '{colors.purple.400}'}},
          subtle: {value: {base: '{colors.purple.50}', _dark: '{colors.purple.950}'}},
          muted: {value: {base: '{colors.purple.200}', _dark: '{colors.purple.800}'}},
          emphasized: {value: {base: '{colors.purple.300}', _dark: '{colors.purple.700}'}},
          solid: {value: {base: '{colors.purple.500}', _dark: '{colors.purple.500}'}},
          focusRing: {value: {base: '{colors.purple.400}', _dark: '{colors.purple.400}'}},
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
