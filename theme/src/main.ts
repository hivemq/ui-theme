import { alertTheme } from './components/alerts'
import { buttonTheme } from './components/button'
import { headingTheme } from './components/headings'
import { linkTheme } from './components/link'

import { type StyleFunctionProps, extendBaseTheme } from '@chakra-ui/react'
import { fontSizes, textTheme } from './components/text'
import * as colors from './foundations/colors'
import * as semanticColors from './style-guide/semanticColors'

const fonts = {
  heading: "'Raleway', 'Roboto', 'Segoe UI', 'sans-serif'",
  body: "'Roboto', 'Segoe UI', 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', 'Arial', 'sans-serif', 'system-ui', '-apple-system'",
  monospace:
    "'Roboto Mono', 'IntelOne Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'",
}

const styles = {
  global: (_props: StyleFunctionProps) => ({
    // override the default values with our semantic tokens
    body: {
      borderColor: 'border.border-base',
      color: 'text.text-base',
      bg: 'background.bg-page-body',
    },
    '*, *::before, &::after': {
      borderColor: 'border.border-base',
    },
    Button: {
      color: 'text.text-base',
    },
  }),
} as const

const components = {
  Alert: alertTheme,
  Button: buttonTheme,
  Heading: headingTheme,
  Link: linkTheme,
  Text: textTheme,
} as const

export const theme = extendBaseTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles,
  fonts,
  fontSizes,
  colors: {
    ...colors,
  },
  semanticTokens: {
    colors: semanticColors,
  },
  components,
})
