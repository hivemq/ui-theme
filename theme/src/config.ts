import { defaultBaseConfig, mergeConfigs } from '@chakra-ui/react'

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
      colors: {
        primary: {
          50: { value: '#FFF2CC' },
          100: { value: '#FFF2CC' },
          200: { value: '#FFF2CC' },
          300: { value: '#FFF2CC' },
          400: { value: '#FFC000' },
          500: { value: '#EBB100' },
          600: { value: '#D6C389' },
          700: { value: '#D6C389' },
          800: { value: '#D6C389' },
          900: { value: '#000000' },
        },
        secondary: {
          0: { value: '#FFFFFF' },
          50: { value: '#F6F4F1' },
          100: { value: '#F5F2EF' },
          200: { value: '#E7E5E4' },
          300: { value: '#d6d3d1' },
          400: { value: '#a8a29e' },
          500: { value: '#78716c' },
          600: { value: '#57534e' },
          700: { value: '#44403c' },
          800: { value: '#292524' },
          900: { value: '#1c1917' },
          950: { value: '#0c0a09' },
        },
        success: {
          100: { value: '#EDF2E9' },
          200: { value: '#D3DEC9' },
          300: { value: '#A6BE93' },
          400: { value: '#7A9D5C' },
          500: { value: '#4D7C26' },
          600: { value: '#3A5D1D' },
          700: { value: '#273E13' },
          800: { value: '#131F0A' },
        },
        danger: {
          100: { value: '#F9EBE9' },
          200: { value: '#F1CDC8' },
          300: { value: '#E39B92' },
          400: { value: '#DC2626' },
          500: { value: '#B91C1C' },
          600: { value: '#95291B' },
          700: { value: '#641B12' },
          800: { value: '#320E09' },
        },
      },
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
    // recipes: {
    //   card: defineRecipe({
    //     defaultVariants: {
    //       variant: 'elevated',
    //     },
    //   }),
    // },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.primary.400}' },
          contrast: { value: '{colors.primary.900}' },
          fg: { value: '{colors.primary.900}' },
          muted: { value: '{colors.primary.100}' },
          subtle: { value: '{colors.primary.200}' },
          emphasized: { value: '{colors.primary.300}' },
          focusRing: { value: '{colors.primary.500}' },
        },
        default: {
          solid: { value: { base: '{colors.secondary.200}', _dark: '{colors.secondary.800}' } },
          contrast: { value: { base: '{colors.secondary.900}', _dark: '{colors.secondary.50}' } },
          fg: { value: { base: '{colors.secondary.900}', _dark: '{colors.secondary.50}' } },
          muted: { value: { base: '{colors.secondary.100}', _dark: '{colors.secondary.700}' } },
          subtle: { value: { base: '{colors.secondary.200}', _dark: '{colors.secondary.800}' } },
          emphasized: {
            value: { base: '{colors.secondary.300}', _dark: '{colors.secondary.700}' },
          },
          focusRing: { value: '{colors.secondary.500}' },
        },
        shell: {
          bg: { value: { base: '{colors.secondary.50}', _dark: '{colors.secondary.900}' } },
          muted: { value: { base: '{colors.secondary.100}', _dark: '{colors.secondary.800}' } },
          subtile: { value: { base: '{colors.secondary.200}', _dark: '{colors.secondary.700}' } },
          contrastBg: { value: { base: 'white', _dark: 'black' } },
          border: { value: { base: '{colors.secondary.300}', _dark: '{colors.secondary.700}' } },
          group: { value: { base: '{colors.secondary.500}', _dark: '{colors.secondary.500}' } },
          item: { value: { base: '{colors.secondary.900}', _dark: '{colors.secondary.50}' } },
        },
        danger: {
          bg: { value: '{colors.red.50}' },
          solid: { value: '{colors.red.400}' },
          contrast: { value: '{colors.red.900}' },
          fg: { value: { base: '{colors.red.900}', _dark: '{colors.red.200}' } },
          muted: { value: { base: '{colors.red.100}', _dark: '{colors.red.700}' } },
          subtle: { value: '{colors.red.200}' },
          emphasized: { value: '{colors.red.300}' },
          focusRing: { value: '{colors.red.500}' },
        },
        success: {
          bg: { value: '{colors.green.50}' },
          solid: { value: '{colors.green.400}' },
          contrast: { value: '{colors.green.900}' },
          fg: { value: '{colors.green.900}' },
          muted: { value: '{colors.green.100}' },
          subtle: { value: '{colors.green.200}' },
          emphasized: { value: '{colors.green.300}' },
          focusRing: { value: '{colors.green.500}' },
        },
      },
    },
  },
})
