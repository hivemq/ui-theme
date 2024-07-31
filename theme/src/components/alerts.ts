import { alertAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  alertAnatomy.keys,
)

const success = definePartsStyle({
  container: {
    background: 'background.bg-success.light',
    borderColor: 'border.border-success-strong.light',
    color: 'text.text-success.light',
    _dark: {
      background: 'background.bg-success.dark',
      borderColor: 'border.border-success-strong.dark',
      color: 'text.text-success.dark',
    },
  },
  icon: {
    color: 'icon.icon-success.light',
    _dark: {
      color: 'icon.icon-success.dark',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-success.light',
    _dark: {
      color: 'text.text-success.dark',
    },
  },
})

const error = definePartsStyle({
  container: {
    background: 'background.bg-error.light',
    borderColor: 'border.border-error-strong.light',
    color: 'text.text-error.light',
    _dark: {
      background: 'background.bg-error.dark',
      borderColor: 'border.border-error-strong.dark',
      color: 'text.text-error.dark',
    },
  },
  icon: {
    color: 'icon.icon-error.light',
    _dark: {
      color: 'icon.icon-error.dark',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-error.light',
    _dark: {
      color: 'text.text-error.dark',
    },
  },
})

const warning = definePartsStyle({
  container: {
    background: 'background.bg-warning.light',
    borderColor: 'border.border-warning-strong.light',
    color: 'text.text-warning.light',
    _dark: {
      background: 'background.bg-warning.dark',
      borderColor: 'border.border-warning-strong.dark',
      color: 'text.text-warning.dark',
    },
  },
  icon: {
    color: 'icon.icon-warning.light',
    _dark: {
      color: 'icon.icon-warning.dark',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-warning.light',
    _dark: {
      color: 'text.text-warning.dark',
    },
  },
})

const info = definePartsStyle({
  container: {
    background: 'background.bg-info.light',
    borderColor: 'border.border-info-strong.light',
    color: 'text.text-info.light',
    _dark: {
      background: 'background.bg-info.dark',
      borderColor: 'border.border-info-strong.dark',
      color: 'text.text-info.dark',
    },
  },
  icon: {
    color: 'icon.icon-info.light',
    _dark: {
      color: 'icon.icon-info.dark',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-info.light',
    _dark: {
      color: 'text.text-info.dark',
    },
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
