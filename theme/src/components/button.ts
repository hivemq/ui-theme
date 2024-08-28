import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
  background: 'background.bg-brand',
  borderColor: 'background.bg-brand',
  color: 'text.text-on-brand',
  _hover: {
    background: 'background.bg-brand-hover',
    borderColor: 'background.bg-brand-hover',
  },
  _disabled: {
    background: 'background.bg-inactive',
    borderColor: 'border.border-inactive',
    color: 'text.text-inactive',
  },
})

const secondary = defineStyle({
  background: 'background.bg-secondary',
  borderColor: 'transparent',
  _hover: {
    borderColor: 'border.border-strong',
  },
  _disabled: {
    background: 'background.bg-inactive',
    borderColor: 'border.border-inactive',
    color: 'text.text-inactive',
  },
})

const dangerous = defineStyle({
  background: 'background.bg-error',
  borderColor: 'border.border-error',
  color: 'text.text-error',
  _hover: {
    background: 'background.bg-error-subtle',
    borderColor: 'border.border-error-strong',
  },
  _disabled: {
    background: 'background.bg-inactive',
    borderColor: 'border.border-inactive',
    color: 'text.text-inactive',
  },
})

const outline = defineStyle({
  background: 'transparent',
  borderColor: 'border.border-base',
  _hover: {
    background: 'background.bg-active-hover',
    borderColor: 'border.border-strong',
  },
  _disabled: {
    background: 'transparent',
    borderColor: 'border.border-inactive',
    color: 'text.text-inactive',
    _hover: null,
  },
})

const ghost = defineStyle({
  background: 'transparent',
  borderColor: 'transparent',
  _hover: {
    background: 'background.bg-secondary',
    borderColor: 'background.bg-secondary',
  },
  _disabled: {
    background: 'transparent',
    borderColor: 'transparent',
    color: 'text.text-inactive',
  },
})

const variants = {
  primary,
  secondary,
  dangerous,
  outline,
  ghost,
}

const xs = defineStyle({
  height: '0.5rem',
})

const sm = defineStyle({
  height: '1rem',
})

const md = defineStyle({
  height: '1.5rem',
})

const lg = defineStyle({
  height: '2rem',
  paddingBottom: '.375rem',
})

const sizes = {
  xs,
  sm,
  md,
  lg,
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
      outlineOffset: 1,
    },
    // TODO: define active interaction state - Till then it will be scale
    _active: {
      transition: 'none',
      transform: 'scale(0.9)',
    },
    _disabled: {
      _active: {
        transform: 'none',
      },
    },
  },
  variants,
  sizes,
  defaultProps: {
    variant: 'secondary',
  },
})
