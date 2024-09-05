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

import { alertTheme } from './components/alerts'
import { buttonTheme } from './components/button'
import { headingTheme } from './components/headings'
import { linkTheme } from './components/link'

import { type StyleFunctionProps, extendBaseTheme } from '@chakra-ui/react'
import { fontSizes, textTheme } from './components/text'
import * as colors from './foundations/colors'
import * as semanticColors from './style-guide/semanticColors'

export const fonts = {
  heading: "'Raleway', 'Roboto', 'Segoe UI', 'sans-serif'",
  body: "'Roboto', 'Segoe UI', 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', 'Arial', 'sans-serif', 'system-ui', '-apple-system'",
  monospace:
    "'Roboto Mono', 'IntelOne Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'",
}

export const styles = {
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

export const components = {
  Alert: alertTheme,
  Button: buttonTheme,
  Heading: headingTheme,
  Link: linkTheme,
  Text: textTheme,
} as const

export { colors }
export const semanticTokens = {
  colors: semanticColors,
}

const theme = extendBaseTheme({
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
  semanticTokens,
  components,
})

export default theme
