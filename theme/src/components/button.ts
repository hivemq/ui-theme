import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const solid = defineStyle({
  border: '2px solid',
  borderRadius: 0,
  fontWeight: 'semibold',
})

const outline = defineStyle({
  border: '2px dashed',
  borderRadius: 0,
  fontWeight: 'semibold',
})

export const buttonTheme = defineStyleConfig({
  variants: { solid, outline },
})