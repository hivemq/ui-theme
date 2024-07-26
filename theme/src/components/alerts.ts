import {defineStyle, defineStyleConfig} from '@chakra-ui/react'

const success = defineStyle({
  color: 'border.border-success.light',
})
const info = defineStyle({
  color: 'border.border-info.light',
})
const warning = defineStyle({
  color: 'border.border-warning.light',
})
const error = defineStyle({
  color: 'border.border-error.light',
})

const variants = {
  success,
  info,
  warning,
  error,
}

export const alertTheme = defineStyleConfig({
  baseStyle: {
    fontSize: '1rem',
  },
  variants,
})
