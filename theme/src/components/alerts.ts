import { alertAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  alertAnatomy.keys,
)

const success = definePartsStyle({
  container: {
    background: 'background.bg-success',
    borderColor: 'border.border-success-strong',
    color: 'text.text-success',
  },
  icon: {
    color: 'icon.icon-success',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-success',
  },
})

const error = definePartsStyle({
  container: {
    background: 'background.bg-error',
    borderColor: 'border.border-error-strong',
    color: 'text.text-error',
  },
  icon: {
    color: 'icon.icon-error',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-error',
  },
})

const warning = definePartsStyle({
  container: {
    background: 'background.bg-warning',
    borderColor: 'border.border-warning-strong',
    color: 'text.text-warning',
  },
  icon: {
    color: 'icon.icon-warning',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-warning',
  },
})

const info = definePartsStyle({
  container: {
    background: 'background.bg-info',
    borderColor: 'border.border-info-strong',
    color: 'text.text-info',
  },
  icon: {
    color: 'icon.icon-info',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-info',
  },
})

const variants = {
  success,
  error,
  warning,
  info,
}

const baseStyle = definePartsStyle({
  container: {
    borderRadius: 'md',
    borderWidth: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem',
  },
  icon: {
    marginRight: '0.5rem',
    width: '24px',
  },
  title: {
    marginRight: '0.5rem',
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
  },
})

export const alertTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'info',
    size: 'md',
  },
})
