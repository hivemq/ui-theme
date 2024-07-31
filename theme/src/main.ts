import {mode} from '@chakra-ui/theme-tools'
import {buttonTheme} from './components/button'
import {headingTheme} from './components/headings'
import {linkTheme} from './components/link'
import {alertTheme} from './components/alerts'

import * as colors from './foundations/colors'
import semanticColors from './style-guide/computedSemanticColors'
import {extendBaseTheme, StyleFunctionProps} from '@chakra-ui/react'

export const fonts = {
  heading: "'Raleway', 'Roboto', 'Segoe UI', 'sans-serif'",
  body: "'Roboto', 'Segoe UI', 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', 'Arial', 'sans-serif', 'system-ui', '-apple-system'",
  monospace:
    "'IntelOne Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'",
}

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('neutrals.50', 'neutrals.900')(props),
    },
  }),
} as const

// TODO: Define colors that match out theme @oli / @eric
export const components = {
  Button: buttonTheme,
  Heading: headingTheme,
  Link: linkTheme,
  Alert: alertTheme,
} as const

export const theme = extendBaseTheme({
  fonts,
  colors: {
    ...colors,
    ...semanticColors,
  },
  styles,
  components,
})
