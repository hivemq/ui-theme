export const buttonRecipe = {
  base: {
    borderWidth: '2px',
    transition: 'all 0.2s ease-in-out',
    _active: {
      transform: 'scale(0.98)',
    },
    // General disabled styles - apply opacity and cursor, but not color
    _disabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
  variants: {
    colorPalette: {
      primary: {
        '--button-fg': 'colors.primary.fg',
        '--button-bg': 'colors.primary.bg',
        '--button-border': 'colors.primary.border',
        '--button-hover-bg': 'colors.primary.bg_hover',
      },
      secondary: {
        '--button-fg': 'colors.secondary.fg',
        '--button-bg': 'colors.secondary.bg',
        '--button-border': 'colors.secondary.border',
        '--button-hover-bg': 'colors.secondary.bg_hover',
      },
      success: {
        '--button-fg': 'colors.success.fg',
        '--button-bg': 'colors.success.bg',
        '--button-border': 'colors.success.border',
        '--button-hover-bg': 'colors.success.bg_hover',
      },
      info: {
        '--button-fg': 'colors.info.fg',
        '--button-bg': 'colors.info.bg',
        '--button-border': 'colors.info.border',
        '--button-hover-bg': 'colors.info.bg_hover',
      },
      warning: {
        '--button-fg': 'colors.warning.fg',
        '--button-bg': 'colors.warning.bg',
        '--button-border': 'colors.warning.border',
        '--button-hover-bg': 'colors.warning.bg_hover',
      },
      error: {
        '--button-fg': 'colors.error.fg',
        '--button-bg': 'colors.error.bg',
        '--button-border': 'colors.error.border',
        '--button-hover-bg': 'colors.error.bg_hover',
      },
      highlight: {
        '--button-fg': 'colors.highlight.fg',
        '--button-bg': 'colors.highlight.bg',
        '--button-border': 'colors.highlight.border',
        '--button-hover-bg': 'colors.highlight.bg_hover',
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
  },
};