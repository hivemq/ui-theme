import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
  background: 'primary.400',
  borderColor: 'primary.400',
  color: 'surface.800',
  _hover: {
    background: 'primary.500',
    borderColor: 'primary.500'
  },
  _disabled: {
    background: 'primary.200',
    borderColor: 'primary.200',
    color: 'primary.600',
  }
})

const secondary = defineStyle({
  background: 'surface.200',
  borderColor: 'surface.200',
  color: 'surface.800',
  _hover: {
    background: 'surface.300',
    borderColor: 'surface.300',
  },
  _disabled: {
    background: 'surface.100',
    borderColor: 'surface.100',
    color: 'surface.700',
  }
})

const dangerous = defineStyle({
  background: 'destructive.400',
  borderColor: 'destructive.400',
  // TODO: change to the real design token
  color: '#fff',
  _hover: {
    background: 'destructive.500',
    borderColor: 'destructive.500',
  },
  _disabled: {
    background: 'surface.100',
    borderColor: 'surface.100',
    color: 'surface.700',
  }
})

const outline = defineStyle({
  background: 'transparent',
  borderColor: 'surface.300',
  _hover: {
    background: 'surface.200',
  },
  _disabled: {
    background: 'transparent',
    borderColor: 'surface.100',
    color: 'surface.200',
    _hover: null
  }
})

const ghost = defineStyle({
  background: 'transparent',
  borderColor: 'transparent',
  _hover: {
    background: 'surface.300',
    borderColor: 'surface.300'
  },
  _disabled: {
    background: 'transparent',
    borderColor: 'transparent',
    color: 'surface.300',
  }
})

const link = defineStyle({
  background: 'transparent',
  borderColor: 'transparent',
  padding: '0 !important',
  height: 'inherit !important',
  _hover: {
    textDecoration: 'underline'
  },
  _disabled: {
    textDecoration: 'none',
    color: 'surface.300'
  }
})

const variants = {
  primary,
  secondary,
  dangerous,
  outline,
  ghost,
  link,
}

const sm = defineStyle({
  fontSize: '1rem',
  height: '1.25rem',
  lineHeight: '20px',
})

const md = defineStyle({
  fontSize: '1rem',
  height: '1.5rem',
  lineHeight: '20px',
})

const lg = defineStyle({
  fontSize: '1.125rem',
  height: '1.75rem',
  lineHeight: '24px',
})

const xl = defineStyle({
  fontSize: '1.125rem',
  height: '2rem',
})

const sizes = {
  sm,
  md,
  lg,
  xl,
}

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    padding: '0.5rem 1rem',
    border: '2px solid',
    borderRadius: '6px',
    boxSizing: 'content-box',
    fontWeight: 500,
    transition: 'all 0.1s ease-in-out',
    cursor: 'pointer !important',
    _hover: {
      cursor: 'pointer !important',
    },
    _focusVisible: {
      outline: '2px solid #264EA1'
    }
  },
  variants,
  sizes,
  defaultProps: {
    variant: "secondary",
    size: 'md'
  }
})