export const semanticTokens = {
  /**
   * Tier 1: Surface tokens (backgrounds and containers)
   */
  surface: {
    primary: {value: {base: '{colors.white}', _dark: '{colors.black}'}},
    secondary: {value: {base: '{colors.gray.50}', _dark: '{colors.gray.950}'}},
    tertiary: {value: {base: '{colors.gray.100}', _dark: '{colors.gray.900}'}},
    elevated: {value: {base: '{colors.white}', _dark: '{colors.gray.950}'}},
    overlay: {value: {base: '{colors.white.800}', _dark: '{colors.black.800}'}},
    panel: {value: {base: '{colors.white}', _dark: '{colors.black.950}'}},
    error: {value: {base: '{colors.red.50}', _dark: '{colors.red.950}'}},
    warning: {value: {base: '{colors.orange.50}', _dark: '{colors.orange.950}'}},
    success: {value: {base: '{colors.green.50}', _dark: '{colors.green.950}'}},
    info: {value: {base: '{colors.blue.50}', _dark: '{colors.blue.950}'}},
    brand: {value: {base: '{colors.yellow.50}', _dark: '{colors.yellow.950}'}},
  },
  
  /**
   * Tier 2: Content tokens (text and foreground elements)
   */
  content: {
    primary: {value: {base: '{colors.gray.900}', _dark: '{colors.gray.50}'}},
    secondary: {value: {base: '{colors.gray.700}', _dark: '{colors.gray.300}'}},
    tertiary: {value: {base: '{colors.gray.500}', _dark: '{colors.gray.500}'}},
    disabled: {value: {base: '{colors.gray.400}', _dark: '{colors.gray.600}'}},
    inverted: {value: {base: '{colors.gray.50}', _dark: '{colors.black}'}},
    error: {value: {base: '{colors.red.600}', _dark: '{colors.red.400}'}},
    warning: {value: {base: '{colors.orange.600}', _dark: '{colors.orange.400}'}},
    success: {value: {base: '{colors.green.600}', _dark: '{colors.green.400}'}},
    info: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.400}'}},
    brand: {value: {base: '{colors.yellow.600}', _dark: '{colors.yellow.300}'}},
  },

  /**
   * Tier 3: Action tokens (interactive elements)
   */
  action: {
    primary: {
      default: {value: {base: '{colors.yellow.400}', _dark: '{colors.yellow.400}'}},
      hover: {value: {base: '{colors.yellow.500}', _dark: '{colors.yellow.500}'}},
      pressed: {value: {base: '{colors.yellow.600}', _dark: '{colors.yellow.600}'}},
      disabled: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
      fg: {value: {base: '{colors.black}', _dark: '{colors.black}'}},
      border: {value: {base: '{colors.yellow.500}', _dark: '{colors.yellow.500}'}},
    },
    secondary: {
      default: {value: {base: '{colors.blue.500}', _dark: '{colors.blue.400}'}},
      hover: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.500}'}},
      pressed: {value: {base: '{colors.blue.700}', _dark: '{colors.blue.600}'}},
      disabled: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
      fg: {value: {base: 'white', _dark: '{colors.blue.950}'}},
      border: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.500}'}},
    },
    success: {
      default: {value: {base: '{colors.green.500}', _dark: '{colors.green.400}'}},
      hover: {value: {base: '{colors.green.600}', _dark: '{colors.green.500}'}},
      pressed: {value: {base: '{colors.green.700}', _dark: '{colors.green.600}'}},
      disabled: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
      fg: {value: {base: 'white', _dark: '{colors.green.950}'}},
      border: {value: {base: '{colors.green.600}', _dark: '{colors.green.500}'}},
    },
    error: {
      default: {value: {base: '{colors.red.500}', _dark: '{colors.red.400}'}},
      hover: {value: {base: '{colors.red.600}', _dark: '{colors.red.500}'}},
      pressed: {value: {base: '{colors.red.700}', _dark: '{colors.red.600}'}},
      disabled: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
      fg: {value: {base: 'white', _dark: '{colors.red.950}'}},
      border: {value: {base: '{colors.red.600}', _dark: '{colors.red.500}'}},
    },
    warning: {
      default: {value: {base: '{colors.orange.500}', _dark: '{colors.orange.400}'}},
      hover: {value: {base: '{colors.orange.600}', _dark: '{colors.orange.500}'}},
      pressed: {value: {base: '{colors.orange.700}', _dark: '{colors.orange.600}'}},
      disabled: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
      fg: {value: {base: 'white', _dark: '{colors.orange.950}'}},
      border: {value: {base: '{colors.orange.600}', _dark: '{colors.orange.500}'}},
    },
    info: {
      default: {value: {base: '{colors.blue.500}', _dark: '{colors.blue.400}'}},
      hover: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.500}'}},
      pressed: {value: {base: '{colors.blue.700}', _dark: '{colors.blue.600}'}},
      disabled: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
      fg: {value: {base: 'white', _dark: '{colors.blue.950}'}},
      border: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.500}'}},
    },
    highlight: {
      default: {value: {base: '{colors.purple.500}', _dark: '{colors.purple.400}'}},
      hover: {value: {base: '{colors.purple.600}', _dark: '{colors.purple.500}'}},
      pressed: {value: {base: '{colors.purple.700}', _dark: '{colors.purple.600}'}},
      disabled: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
      fg: {value: {base: 'white', _dark: '{colors.purple.950}'}},
      border: {value: {base: '{colors.purple.600}', _dark: '{colors.purple.500}'}},
    },
  },

  /**
   * Border tokens
   */
  border: {
    default: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
    subtle: {value: {base: '{colors.gray.50}', _dark: '{colors.gray.950}'}},
    muted: {value: {base: '{colors.gray.100}', _dark: '{colors.gray.900}'}},
    emphasized: {value: {base: '{colors.gray.300}', _dark: '{colors.gray.700}'}},
    inverted: {value: {base: '{colors.gray.800}', _dark: '{colors.gray.200}'}},
    error: {value: {base: '{colors.red.500}', _dark: '{colors.red.400}'}},
    warning: {value: {base: '{colors.orange.500}', _dark: '{colors.orange.400}'}},
    success: {value: {base: '{colors.green.500}', _dark: '{colors.green.400}'}},
    info: {value: {base: '{colors.blue.500}', _dark: '{colors.blue.400}'}},
  },

  /**
   * Legacy tokens for backward compatibility - HiveMQ custom semantic tokens
   */
  primary: {
    bg: {value: {base: '{colors.action.primary.default}', _dark: '{colors.action.primary.default}'}},
    bg_hover: {value: {base: '{colors.action.primary.hover}', _dark: '{colors.action.primary.hover}'}},
    fg: {value: {base: '{colors.action.primary.fg}', _dark: '{colors.action.primary.fg}'}},
    border: {value: {base: '{colors.action.primary.border}', _dark: '{colors.action.primary.border}'}},
  },
  secondary: {
    bg: {value: {base: '{colors.action.secondary.default}', _dark: '{colors.action.secondary.default}'}},
    bg_hover: {value: {base: '{colors.action.secondary.hover}', _dark: '{colors.action.secondary.hover}'}},
    border: {value: {base: '{colors.action.secondary.border}', _dark: '{colors.action.secondary.border}'}},
    fg: {value: {base: '{colors.action.secondary.fg}', _dark: '{colors.action.secondary.fg}'}},
  },
  success: {
    bg: {value: {base: '{colors.action.success.default}', _dark: '{colors.action.success.default}'}},
    bg_hover: {value: {base: '{colors.action.success.hover}', _dark: '{colors.action.success.hover}'}},
    border: {value: {base: '{colors.action.success.border}', _dark: '{colors.action.success.border}'}},
    fg: {value: {base: '{colors.action.success.fg}', _dark: '{colors.action.success.fg}'}},
  },
  info: {
    fg: {value: {base: '{colors.content.info}', _dark: '{colors.content.info}'}},
    bg: {value: {base: '{colors.surface.info}', _dark: '{colors.surface.info}'}},
    bg_hover: {value: {base: '{colors.action.info.hover}', _dark: '{colors.action.info.hover}'}},
    text: {value: {base: '{colors.content.info}', _dark: '{colors.content.info}'}},
    border: {value: {base: '{colors.action.info.border}', _dark: '{colors.action.info.border}'}},
  },
  warning: {
    bg: {value: {base: '{colors.action.warning.default}', _dark: '{colors.action.warning.default}'}},
    bg_hover: {value: {base: '{colors.action.warning.hover}', _dark: '{colors.action.warning.hover}'}},
    border: {value: {base: '{colors.action.warning.border}', _dark: '{colors.action.warning.border}'}},
    fg: {value: {base: '{colors.action.warning.fg}', _dark: '{colors.action.warning.fg}'}},
  },
  error: {
    bg: {value: {base: '{colors.action.error.default}', _dark: '{colors.action.error.default}'}},
    bg_hover: {value: {base: '{colors.action.error.hover}', _dark: '{colors.action.error.hover}'}},
    border: {value: {base: '{colors.action.error.border}', _dark: '{colors.action.error.border}'}},
    fg: {value: {base: '{colors.action.error.fg}', _dark: '{colors.action.error.fg}'}},
  },
  highlight: {
    bg: {value: {base: '{colors.action.highlight.default}', _dark: '{colors.action.highlight.default}'}},
    bg_hover: {value: {base: '{colors.action.highlight.hover}', _dark: '{colors.action.highlight.hover}'}},
    border: {value: {base: '{colors.action.highlight.border}', _dark: '{colors.action.highlight.border}'}},
    fg: {value: {base: '{colors.action.highlight.fg}', _dark: '{colors.action.highlight.fg}'}},
  },
  /**
   * Enhanced color palette tokens using new semantic structure
   */
  gray: {
    contrast: {value: {base: '{colors.surface.primary}', _dark: '{colors.surface.primary}'}},
    fg: {value: {base: '{colors.content.primary}', _dark: '{colors.content.primary}'}},
    subtle: {value: {base: '{colors.surface.secondary}', _dark: '{colors.surface.secondary}'}},
    muted: {value: {base: '{colors.surface.tertiary}', _dark: '{colors.surface.tertiary}'}},
    emphasized: {value: {base: '{colors.border.emphasized}', _dark: '{colors.border.emphasized}'}},
    solid: {value: {base: '{colors.content.primary}', _dark: '{colors.content.primary}'}},
    focusRing: {value: {base: '{colors.gray.400}', _dark: '{colors.gray.400}'}},
  },
  red: {
    contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
    fg: {value: {base: '{colors.content.error}', _dark: '{colors.content.error}'}},
    subtle: {value: {base: '{colors.surface.error}', _dark: '{colors.surface.error}'}},
    muted: {value: {base: '{colors.red.200}', _dark: '{colors.red.800}'}},
    emphasized: {value: {base: '{colors.red.300}', _dark: '{colors.red.700}'}},
    solid: {value: {base: '{colors.action.error.default}', _dark: '{colors.action.error.default}'}},
    focusRing: {value: {base: '{colors.red.400}', _dark: '{colors.red.400}'}},
  },
  pink: {
    contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
    fg: {value: {base: '{colors.pink.700}', _dark: '{colors.pink.300}'}},
    subtle: {value: {base: '{colors.pink.100}', _dark: '{colors.pink.900}'}},
    muted: {value: {base: '{colors.pink.200}', _dark: '{colors.pink.800}'}},
    emphasized: {value: {base: '{colors.pink.300}', _dark: '{colors.pink.700}'}},
    solid: {value: {base: '{colors.pink.600}', _dark: '{colors.pink.600}'}},
    focusRing: {value: {base: '{colors.pink.400}', _dark: '{colors.pink.400}'}},
  },
  purple: {
    contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
    fg: {value: {base: '{colors.purple.700}', _dark: '{colors.purple.300}'}},
    subtle: {value: {base: '{colors.purple.100}', _dark: '{colors.purple.900}'}},
    muted: {value: {base: '{colors.purple.200}', _dark: '{colors.purple.800}'}},
    emphasized: {value: {base: '{colors.purple.300}', _dark: '{colors.purple.700}'}},
    solid: {value: {base: '{colors.action.highlight.default}', _dark: '{colors.action.highlight.default}'}},
    focusRing: {value: {base: '{colors.purple.400}', _dark: '{colors.purple.400}'}},
  },
  cyan: {
    contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
    fg: {value: {base: '{colors.cyan.700}', _dark: '{colors.cyan.300}'}},
    subtle: {value: {base: '{colors.cyan.100}', _dark: '{colors.cyan.900}'}},
    muted: {value: {base: '{colors.cyan.200}', _dark: '{colors.cyan.800}'}},
    emphasized: {value: {base: '{colors.cyan.300}', _dark: '{colors.cyan.700}'}},
    solid: {value: {base: '{colors.cyan.600}', _dark: '{colors.cyan.600}'}},
    focusRing: {value: {base: '{colors.cyan.400}', _dark: '{colors.cyan.400}'}},
  },
  blue: {
    contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
    fg: {value: {base: '{colors.content.info}', _dark: '{colors.content.info}'}},
    subtle: {value: {base: '{colors.surface.info}', _dark: '{colors.surface.info}'}},
    muted: {value: {base: '{colors.blue.200}', _dark: '{colors.blue.800}'}},
    emphasized: {value: {base: '{colors.blue.300}', _dark: '{colors.blue.700}'}},
    solid: {value: {base: '{colors.action.secondary.default}', _dark: '{colors.action.secondary.default}'}},
    focusRing: {value: {base: '{colors.blue.400}', _dark: '{colors.blue.400}'}},
  },
  teal: {
    contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
    fg: {value: {base: '{colors.teal.700}', _dark: '{colors.teal.300}'}},
    subtle: {value: {base: '{colors.teal.100}', _dark: '{colors.teal.900}'}},
    muted: {value: {base: '{colors.teal.200}', _dark: '{colors.teal.800}'}},
    emphasized: {value: {base: '{colors.teal.300}', _dark: '{colors.teal.700}'}},
    solid: {value: {base: '{colors.teal.600}', _dark: '{colors.teal.600}'}},
    focusRing: {value: {base: '{colors.teal.400}', _dark: '{colors.teal.400}'}},
  },
  green: {
    contrast: {value: {base: '{colors.white}', _dark: '{colors.white}'}},
    fg: {value: {base: '{colors.content.success}', _dark: '{colors.content.success}'}},
    subtle: {value: {base: '{colors.surface.success}', _dark: '{colors.surface.success}'}},
    muted: {value: {base: '{colors.green.200}', _dark: '{colors.green.800}'}},
    emphasized: {value: {base: '{colors.green.300}', _dark: '{colors.green.700}'}},
    solid: {value: {base: '{colors.action.success.default}', _dark: '{colors.action.success.default}'}},
    focusRing: {value: {base: '{colors.green.400}', _dark: '{colors.green.400}'}},
  },
  yellow: {
    contrast: {value: {base: '{colors.black}', _dark: '{colors.black}'}},
    fg: {value: {base: '{colors.content.brand}', _dark: '{colors.content.brand}'}},
    subtle: {value: {base: '{colors.surface.brand}', _dark: '{colors.surface.brand}'}},
    muted: {value: {base: '{colors.yellow.200}', _dark: '{colors.yellow.800}'}},
    emphasized: {value: {base: '{colors.yellow.500}', _dark: '{colors.yellow.500}'}},
    solid: {value: {base: '{colors.action.primary.default}', _dark: '{colors.action.primary.default}'}},
    focusRing: {value: {base: '{colors.yellow.400}', _dark: '{colors.yellow.400}'}},
  },
  orange: {
    contrast: {value: {base: '{colors.black}', _dark: '{colors.black}'}},
    fg: {value: {base: '{colors.content.warning}', _dark: '{colors.content.warning}'}},
    subtle: {value: {base: '{colors.surface.warning}', _dark: '{colors.surface.warning}'}},
    muted: {value: {base: '{colors.orange.200}', _dark: '{colors.orange.800}'}},
    emphasized: {value: {base: '{colors.orange.300}', _dark: '{colors.orange.700}'}},
    solid: {value: {base: '{colors.action.warning.default}', _dark: '{colors.action.warning.default}'}},
    focusRing: {value: {base: '{colors.orange.400}', _dark: '{colors.orange.400}'}},
  },

  /**
   * Global semantic tokens - updated to use new structure
   */
  bg: {
    DEFAULT: {value: {base: '{colors.surface.primary}', _dark: '{colors.surface.primary}'}},
    subtle: {value: {base: '{colors.surface.secondary}', _dark: '{colors.surface.secondary}'}},
    muted: {value: {base: '{colors.surface.tertiary}', _dark: '{colors.surface.tertiary}'}},
    emphasized: {value: {base: '{colors.surface.elevated}', _dark: '{colors.surface.elevated}'}},
    inverted: {value: {base: '{colors.content.inverted}', _dark: '{colors.content.inverted}'}},
    panel: {value: {base: '{colors.surface.panel}', _dark: '{colors.surface.panel}'}},
    error: {value: {base: '{colors.surface.error}', _dark: '{colors.surface.error}'}},
    warning: {value: {base: '{colors.surface.warning}', _dark: '{colors.surface.warning}'}},
    success: {value: {base: '{colors.surface.success}', _dark: '{colors.surface.success}'}},
    info: {value: {base: '{colors.surface.info}', _dark: '{colors.surface.info}'}},
    primary: {value: {base: '{colors.surface.brand}', _dark: '{colors.surface.brand}'}},
  },
  fg: {
    DEFAULT: {value: {base: '{colors.content.primary}', _dark: '{colors.content.primary}'}},
    subtle: {value: {base: '{colors.content.tertiary}', _dark: '{colors.content.tertiary}'}},
    muted: {value: {base: '{colors.content.secondary}', _dark: '{colors.content.secondary}'}},
    inverted: {value: {base: '{colors.content.inverted}', _dark: '{colors.content.inverted}'}},
    error: {value: {base: '{colors.content.error}', _dark: '{colors.content.error}'}},
    warning: {value: {base: '{colors.content.warning}', _dark: '{colors.content.warning}'}},
    success: {value: {base: '{colors.content.success}', _dark: '{colors.content.success}'}},
    info: {value: {base: '{colors.content.info}', _dark: '{colors.content.info}'}},
    primary: {value: {base: '{colors.content.brand}', _dark: '{colors.content.brand}'}},
  },
  text: {
    DEFAULT: {value: {base: '{colors.content.primary}', _dark: '{colors.content.primary}'}},
    muted: {value: {base: '{colors.content.secondary}', _dark: '{colors.content.secondary}'}},
    subtle: {value: {base: '{colors.content.tertiary}', _dark: '{colors.content.tertiary}'}},
    inverted: {value: {base: '{colors.content.inverted}', _dark: '{colors.content.inverted}'}},
    error: {value: {base: '{colors.content.error}', _dark: '{colors.content.error}'}},
    warning: {value: {base: '{colors.content.warning}', _dark: '{colors.content.warning}'}},
    success: {value: {base: '{colors.content.success}', _dark: '{colors.content.success}'}},
    info: {value: {base: '{colors.content.info}', _dark: '{colors.content.info}'}},
  },
};