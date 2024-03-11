import {
  StyleFunctionProps,
  extendBaseTheme,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { buttonTheme } from './components/button'
import colorsImport from './assets/color.styles.tokens.json' assert {type: 'json'}

const colorMap = [
  {
    name: 'primary',
    colorsLight: colorsImport.yellow,
  },
  {
    name: 'destructive',
    colorsLight: colorsImport.Error,
    colorsDark: colorsImport['Error-Dark']
  },
  {
    name: 'info',
    colorsLight: colorsImport.Info,
    colorsDark: colorsImport['Info-Dark']
  },
  {
    name: 'success',
    colorsLight: colorsImport.Success,
    colorsDark: colorsImport['Success-Dark']
  },
  {
    name: 'warning',
    colorsLight: colorsImport.Warning,
    colorsDark: colorsImport['Warning-Dark']
  },
  {
    name: 'surface',
    colorsLight: colorsImport['hmq-stone']
  },
]


function formatFonts(fontArray: string[]): string {
  return fontArray.map((font) => `"${font}"`).join(',')
}

export const theme = extendBaseTheme({
  fonts: {
    heading: formatFonts(['Raleway', 'Roboto', 'Segoe UI', 'sans-serif']),
    body: formatFonts([
      'Roboto',
      'Segoe UI',
      'Helvetica Neue',
      'Noto Sans',
      'Liberation Sans',
      'Arial',
      'sans-serif',
      'system-ui',
      '-apple-system',
    ]),
    monospace: formatFonts([
      'IntelOne Mono',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ]),
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('surface.50', 'surface.900')(props),
      },
    }),
  },
  colors: colorMap.reduce((accumulator, entry) => {
    return {
      ...accumulator,
      [entry.name]: Object.entries(entry.colorsLight).reduce((acc, [key, value]) => {
        return {
          ...acc,
          [key]: value.$value
        }
      }, {})
    }
  }, {}),
  components: {
    Button: buttonTheme,
  },
})