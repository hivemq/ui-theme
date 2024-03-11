import {
  extendBaseTheme,
} from '@chakra-ui/react'
import { buttonTheme } from './components/button'
import colorsImport from './assets/color.styles.tokens.json' assert {type: 'json'}


const colorMap = [
  {
    name: 'error',
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
  }
]

export const theme = extendBaseTheme({
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