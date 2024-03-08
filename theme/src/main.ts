import {
  extendBaseTheme,
} from '@chakra-ui/react'
import { buttonTheme } from './components/button'

export const theme = extendBaseTheme({
  components: {
    Button: buttonTheme,
  },
})