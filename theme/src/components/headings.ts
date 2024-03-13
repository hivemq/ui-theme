import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const h1 = defineStyle({
  fontFamily: "Raleway",
  fontSize: '2rem',
  fontStyle: 'normal',
  fontWeight: '800',
  lineHeight: '2.25rem'
})


const h2 = defineStyle({
  fontFamily: "Raleway",
  fontSize: '1.5rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '2rem'
})


const h3 = defineStyle({
  fontFamily: "Raleway",
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '2rem'
})

const h4 = defineStyle({
  fontFamily: "Raleway",
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '1.75rem'
})

const h5 = defineStyle({
  fontFamily: "Raleway",
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '1.75rem'
})

const variants = {
  h1,
  h2,
  h3,
  h4,
  h5
}

export const headingTheme = defineStyleConfig({
  baseStyle: {
  },
  variants,
  defaultProps: {
    variant: "h1",
  }
})