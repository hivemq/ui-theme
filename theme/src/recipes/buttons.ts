export const buttonRecipe = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: 'md',
    fontWeight: 'medium',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    _active: {
      transform: 'scale(0.98)',
    },
    _disabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    _focus: {
      ring: '2px',
      ringColor: 'var(--button-border)',
      ringOpacity: '0.5',
      ringOffset: '2px',
    },
  },
  variants: {
    colorPalette: {
      primary: {
        '--button-fg': 'colors.action.primary.fg',
        '--button-bg': 'colors.action.primary.default',
        '--button-border': 'colors.action.primary.border',
        '--button-hover-bg': 'colors.action.primary.hover',
      },
      secondary: {
        '--button-fg': 'colors.action.secondary.fg',
        '--button-bg': 'colors.action.secondary.default',
        '--button-border': 'colors.action.secondary.border',
        '--button-hover-bg': 'colors.action.secondary.hover',
      },
      success: {
        '--button-fg': 'colors.action.success.fg',
        '--button-bg': 'colors.action.success.default',
        '--button-border': 'colors.action.success.border',
        '--button-hover-bg': 'colors.action.success.hover',
      },
      info: {
        '--button-fg': 'colors.action.info.fg',
        '--button-bg': 'colors.action.info.default',
        '--button-border': 'colors.action.info.border',
        '--button-hover-bg': 'colors.action.info.hover',
      },
      warning: {
        '--button-fg': 'colors.action.warning.fg',
        '--button-bg': 'colors.action.warning.default',
        '--button-border': 'colors.action.warning.border',
        '--button-hover-bg': 'colors.action.warning.hover',
      },
      error: {
        '--button-fg': 'colors.action.error.fg',
        '--button-bg': 'colors.action.error.default',
        '--button-border': 'colors.action.error.border',
        '--button-hover-bg': 'colors.action.error.hover',
      },
      highlight: {
        '--button-fg': 'colors.action.highlight.fg',
        '--button-bg': 'colors.action.highlight.default',
        '--button-border': 'colors.action.highlight.border',
        '--button-hover-bg': 'colors.action.highlight.hover',
      },
      // Additional color palette options for Chakra UI colors
      gray: {
        '--button-fg': 'colors.gray.contrast',
        '--button-bg': 'colors.gray.solid',
        '--button-border': 'colors.gray.solid',
        '--button-hover-bg': 'colors.gray.emphasized',
      },
      red: {
        '--button-fg': 'colors.red.contrast',
        '--button-bg': 'colors.red.solid',
        '--button-border': 'colors.red.solid',
        '--button-hover-bg': 'colors.red.emphasized',
      },
      blue: {
        '--button-fg': 'colors.blue.contrast',
        '--button-bg': 'colors.blue.solid',
        '--button-border': 'colors.blue.solid',
        '--button-hover-bg': 'colors.blue.emphasized',
      },
      green: {
        '--button-fg': 'colors.green.contrast',
        '--button-bg': 'colors.green.solid',
        '--button-border': 'colors.green.solid',
        '--button-hover-bg': 'colors.green.emphasized',
      },
      yellow: {
        '--button-fg': 'colors.yellow.contrast',
        '--button-bg': 'colors.yellow.solid',
        '--button-border': 'colors.yellow.solid',
        '--button-hover-bg': 'colors.yellow.emphasized',
      },
      orange: {
        '--button-fg': 'colors.orange.contrast',
        '--button-bg': 'colors.orange.solid',
        '--button-border': 'colors.orange.solid',
        '--button-hover-bg': 'colors.orange.emphasized',
      },
      purple: {
        '--button-fg': 'colors.purple.contrast',
        '--button-bg': 'colors.purple.solid',
        '--button-border': 'colors.purple.solid',
        '--button-hover-bg': 'colors.purple.emphasized',
      },
      teal: {
        '--button-fg': 'colors.teal.contrast',
        '--button-bg': 'colors.teal.solid',
        '--button-border': 'colors.teal.solid',
        '--button-hover-bg': 'colors.teal.emphasized',
      },
      cyan: {
        '--button-fg': 'colors.cyan.contrast',
        '--button-bg': 'colors.cyan.solid',
        '--button-border': 'colors.cyan.solid',
        '--button-hover-bg': 'colors.cyan.emphasized',
      },
      pink: {
        '--button-fg': 'colors.pink.contrast',
        '--button-bg': 'colors.pink.solid',
        '--button-border': 'colors.pink.solid',
        '--button-hover-bg': 'colors.pink.emphasized',
      },
    },
    variant: {
      solid: {
        bg: 'var(--button-bg)',
        color: 'var(--button-fg)',
        borderColor: 'var(--button-border)',
        _hover: {
          bg: 'var(--button-hover-bg)',
          _disabled: {
            bg: 'var(--button-bg)',
          },
        },
        _disabled: {
          bg: 'var(--button-bg)',
          borderColor: 'var(--button-border)',
        },
        _loading: {
          bg: 'var(--button-bg)',
          borderColor: 'var(--button-border)',
        },
      },
      outline: {
        bg: 'transparent',
        borderColor: 'var(--button-bg)',
        color: 'var(--button-bg)',
        _hover: {
          bg: 'var(--button-bg)',
          color: 'var(--button-fg)',
          _disabled: {
            bg: 'transparent',
          },
        },
        _disabled: {
          borderColor: 'var(--button-bg)',
          color: 'var(--button-bg)',
          bg: 'transparent',
        },
        _loading: {
          borderColor: 'var(--button-bg)',
          color: 'var(--button-bg)',
        },
      },
      ghost: {
        bg: 'transparent',
        borderColor: 'transparent',
        color: 'var(--button-bg)',
        _hover: {
          bg: 'var(--button-bg)',
          color: 'var(--button-fg)',
          _disabled: {
            bg: 'transparent',
          },
        },
        _disabled: {
          color: 'var(--button-bg)',
          bg: 'transparent',
          borderColor: 'transparent',
        },
        _loading: {
          color: 'var(--button-bg)',
          borderColor: 'transparent',
        },
      },
      link: {
        bg: 'transparent',
        color: 'var(--button-bg)',
        borderColor: 'transparent',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    size: {
      xs: {
        px: '2',
        py: '1',
        fontSize: 'xs',
        minH: '6',
        gap: '1',
      },
      sm: {
        px: '3',
        py: '1.5',
        fontSize: 'sm',
        minH: '8',
        gap: '1.5',
      },
      md: {
        px: '4',
        py: '2',
        fontSize: 'md',
        minH: '10',
        gap: '2',
      },
      lg: {
        px: '6',
        py: '2.5',
        fontSize: 'lg',
        minH: '12',
        gap: '2.5',
      },
      xl: {
        px: '8',
        py: '3',
        fontSize: 'xl',
        minH: '14',
        gap: '3',
      },
    },
  },
  compoundVariants: [
    {
      size: 'xs',
      variant: 'solid',
      css: {
        fontWeight: 'semibold',
      },
    },
    {
      size: ['xs', 'sm'],
      variant: 'outline',
      css: {
        borderWidth: '1px',
      },
    },
    {
      variant: 'ghost',
      size: ['xs', 'sm'],
      css: {
        borderWidth: '1px',
      },
    },
  ],
  defaultVariants: {
    size: 'md' as const,
    variant: 'solid' as const,
    colorPalette: 'primary' as const,
  },
};