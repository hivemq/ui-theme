import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const base = defineStyle({})

const external = defineStyle({})

const variants = {
  base,
  external,
  base,
  external,
}

export const linkTheme = defineStyleConfig({
  baseStyle: {
    fontSize: '1rem',
    textDecoration: 'underline',
    fontWeight: 500,
    cursor: 'pointer !important',
    _hover: {
      cursor: 'pointer !important',
    },
    color: 'text.text-accent-strong.light',
  },
  variants,
})
