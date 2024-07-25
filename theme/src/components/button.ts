import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
  _light: {
    background: 'background.bg-brand.light',
    borderColor: 'background.bg-brand.light',
    color: 'text.text-on-brand.light',
    _hover: {
      background: 'background.bg-brand-hover.light',
      borderColor: 'background.bg-brand-hover.light'
    },
    _disabled: {
      background: 'background.bg-inactive.light',
      borderColor: 'border.border-inactive.light',
      color: 'text.text-inactive.light',
    }
  },
  _dark: {
    background: 'background.bg-brand.dark',
    borderColor: 'background.bg-brand.dark',
    color: 'text.text-on-brand.dark',
    _hover: {
      background: 'background.bg-brand-hover.dark',
      borderColor: 'background.bg-brand-hover.dark'
    },
    _disabled: {
      background: 'background.bg-inactive.dark',
      borderColor: 'border.border-inactive.dark',
      color: 'text.text-inactive.dark',
    },
  }
})

const secondary = defineStyle({
  background: 'neutrals.200',
  borderColor: 'neutrals.200',
  color: 'neutrals.800',
  _hover: {
    background: 'neutrals.300',
    borderColor: 'neutrals.300',
  },
  _disabled: {
    background: 'neutrals.100',
    borderColor: 'neutrals.100',
    color: 'neutrals.700',
  }
})

const dangerous = defineStyle({
  background: 'background.bg-error.light',
  borderColor: 'border.border-error.light',
  color: 'text.text-error.light',
  _hover: {
    background: 'destructive.500',
    borderColor: 'destructive.500',
  },
  _disabled: {
    background: 'neutrals.100',
    borderColor: 'neutrals.100',
    color: 'neutrals.700',
  }
})

const outline = defineStyle({
  background: 'transparent',
  borderColor: 'neutrals.300',
  _hover: {
    background: 'neutrals.200',
  },
  _disabled: {
    background: 'transparent',
    borderColor: 'neutrals.100',
    color: 'neutrals.200',
    _hover: null
  }
})

const ghost = defineStyle({
  background: 'transparent',
  borderColor: 'transparent',
  _hover: {
    background: 'neutrals.300',
    borderColor: 'neutrals.300'
  },
  _disabled: {
    background: 'transparent',
    borderColor: 'transparent',
    color: 'neutrals.300',
  }
})

const variants = {
  primary,
  secondary,
  dangerous,
  outline,
  ghost,
}

const xs = defineStyle({
  height: '0.5rem'
})

const sm = defineStyle({
  height: '1rem'
})

const md = defineStyle({
  height: '1.5rem'
})

const lg = defineStyle({
  height: '2rem'
})

const sizes = {
  xs,
  sm,
  md,
  lg
}

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontSize: '1rem',
    height: '1.5rem',
    lineHeight: '20px',
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
      outline: '2px solid',
      outlineColor: 'blue.500',
      outlineOffset: 1
    },
    // TODO: define active interaction state - Till then it will be scale
    _active: {
      transition: 'none',
      transform: 'scale(0.9)'
    },
    _disabled: {
      _active: {
        transform: 'none'
      }
    }
  },
  variants,
  sizes,
  defaultProps: {
    variant: "secondary"
  }
})