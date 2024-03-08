import {
  extendBaseTheme,
} from '@chakra-ui/react'
import { buttonTheme } from './components/button'
import colors from './assets/color.styles.tokens.json' assert {type: 'json'}


export const theme = extendBaseTheme({
  colors: {
    success: {
      ...Object.entries(colors.Success).reduce((acc, [key, value]) => {
        return {
          ...acc,
          [key]: value.$value
        }
      }, {})
    }
  },
  components: {
    Button: buttonTheme,
  },
})