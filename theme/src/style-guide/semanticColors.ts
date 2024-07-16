// Colors in this file MUST reference dot-separated foundation color names
// e.g. 'neutrals.50'
// computedSemanticColors will translate these abstract names into actual RGB values

import { ColorInCategory } from './types'

export const background: ColorInCategory = {
  // Page
  'bg-page-body': {
    light: 'neutrals.50',
    dark: 'neutrals.950',
  },
  'bg-main-container': {
    light: 'neutrals.WHITE',
    dark: 'neutrals.900'
  },
  // Global
  'bg-base': {
    light: 'neutrals.WHITE',
    dark: 'neutrals.800'
  },
  'bg-subtle': {
    light: 'neutrals.50',
    dark: 'neutrals.900'
  },
  'bg-secondary': {
    light: 'neutrals.100',
    dark: 'neutrals.700'
  },
  'bg-active': {
    light: 'neutrals.WHITE',
    dark: 'neutrals.800'
  },
  'bg-active-hover': {
    light: 'neutrals.50',
    dark: 'neutrals.700'
  },
  'bg-inactive': {
    light: 'neutrals.50',
    dark: 'neutrals.900',
  },
  'bg-inverse': {
    light: 'neutrals.900',
    dark: 'neutrals.WHITE'
  },
  // Brand
  'bg-brand': {
    light: 'amber.300',
    dark: 'amber.300',
  },
  'bg-brand-hover': {
    light: 'amber.400',
    dark: 'amber.400',
  },
  'bg-brand-focus': {
    light: 'amber.alpha',
    dark: 'amber.alpha'
  },
  // Accent
  'bg-accent': {
    light: 'blue.300',
    dark: 'blue.400'
  },
  'bg-accent-hover': {
    light: 'blue.400',
    dark: 'blue.300'
  },
  'bg-accent-focus': {
    light: 'amber.alpha',
    dark: 'amber.alpha'
  },
  // Accent-2
  'bg-accent-2': {
    light: 'purple.300',
    dark: 'purple.400'
  },
  'bg-accent-2-hover': {
    light: 'purple.400',
    dark: 'purple.300'
  },
  'bg-accent-2-focus': {
    light: 'purple.alpha',
    dark: 'purple.alpha'
  },
  // Info
  'bg-info': {
    light: 'blue.100',
    dark: 'blue.600'
  },
  'bg-info-subtle': {
    light: 'blue.50',
    dark: 'blue.700'
  },
  // Error
  'bg-error': {
    light: 'red.100',
    dark: 'red.600'
  },
  'bg-error-subtle': {
    light: 'red.50',
    dark: 'red.700'
  },
  // Success
  'bg-success': {
    light: 'green.100',
    dark: 'green.600'
  },
  'bg-success-subtle': {
    light: 'green.50',
    dark: 'green.700'
  },
  // Success
  'bg-warning': {
    light: 'orange.100',
    dark: 'orange.600'
  },
  'bg-warning-subtle': {
    light: 'orange.50',
    dark: 'orange.700'
  }
}

export const border: ColorInCategory = {
  // Global
  'border-base': {
    light: 'neutrals.200',
    dark: 'neutrals.700'
  },
  'border-subtle': {
    light: 'neutrals.100',
    dark: 'neutrals.800'
  },
  'border-strong': {
    light: 'neutrals.300',
    dark: 'neutrals.600'
  },
  'border-inactive': {
    light: 'neutrals.100',
    dark: 'neutrals.800'
  },
  // Brand
  'border-brand': {
    light: 'amber.300',
    dark: 'amber.300'
  },
  // Info
  'border-info': {
    light: 'blue.200',
    dark: 'blue.500'
  },
  'border-info-strong': {
    light: 'blue.400',
    dark: 'blue.300'
  },
  // Error
  'border-error': {
    light: 'red.200',
    dark: 'red.500'
  },
  'border-error-strong': {
    light: 'red.400',
    dark: 'red.300'
  },
   // Success
  'border-success': {
    light: 'green.200',
    dark: 'green.500'
  },
  'border-success-strong': {
    light: 'green.400',
    dark: 'green.300'
  },
  // Warning
  'border-warning': {
    light: 'orange.200',
    dark: 'orange.500'
  },
  'border-warning-strong': {
    light: 'orange.400',
    dark: 'orange.300'
  }
}

export const icon: ColorInCategory = {
  'icon-base': {
    light: 'neutrals.900',
    dark: 'neutrals.50'
  },
  'icon-subtle': {
    light: 'neutrals.600',
    dark: 'neutrals.400'
  },
  'icon-strong': {
    light: 'neutrals.950',
    dark: 'neutrals.WHITE'
  },
  'icon-inactive': {
    light: 'neutrals.400',
    dark: 'neutrals.600'
  },
  'icon-on-color': {
    light: 'neutrals.WHITE',
    dark: 'neutrals.WHITE'
  },
  'icon-on-brand': {
    light: 'neutrals.900',
    dark: 'neutrals.900'
  },
  // Info
  'icon-info': {
    light: 'blue.600',
    dark: 'blue.100'
  },
  'icon-info-strong': {
    light: 'blue.400',
    dark: 'blue.300'
  },
  // Error
  'icon-error': {
    light: 'red.600',
    dark: 'red.100'
  },
  'icon-error-strong': {
    light: 'red.400',
    dark: 'red.300'
  },
  // Success
  'icon-success': {
    light: 'green.600',
    dark: 'green.100'
  },
  'icon-success-strong': {
    light: 'green.400',
    dark: 'green.300'
  },
  // Warning
  'icon-warning': {
    light: 'orange.600',
    dark: 'orange.100'
  },
  'icon-warning-strong': {
    light: 'orange.400',
    dark: 'orange.300'
  }
}

export const text: ColorInCategory = {
  'text-base': {
    light: 'neutrals.900',
    dark: 'neutrals.50'
  },
  'text-subtle': {
    light: 'neutrals.600',
    dark: 'neutrals.400'
  },
  'text-strong': {
    light: 'neutrals.950',
    dark: 'neutrals.WHITE'
  },
  'text-inactive': {
    light: 'neutrals.400',
    dark: 'neutrals.700'
  },
  'text-on-color': {
    light: 'neutrals.WHITE',
    dark: 'neutrals.WHITE'
  },
  'text-on-brand': {
    light: 'neutrals.900',
    dark: 'neutrals.900'
  },
  // Brand
  'text-brand': {
    light: 'amber.600',
    dark: 'amber.100'
  },
  'text-brand-hover': {
    light: 'amber.400',
    dark: 'amber.300'
  },
  // Accent
  'text-accent': {
    light: 'blue.600',
    dark: 'blue.100'
  },
  'text-accent-strong': {
    light: 'blue.400',
    dark: 'blue.300'
  },
  // Error
  'text-error': {
    light: 'red.600',
    dark: 'red.100'
  },
  'text-error-strong': {
    light: 'red.400',
    dark: 'red.300'
  },
  // Success
  'text-success': {
    light: 'green.600',
    dark: 'green.100'
  },
  // Warning
  'text-warning': {
    light: 'orange.600',
    dark: 'orange.100'
  }
}