export const semanticTokens = {
  /**
   * Tier 1: Surface tokens (backgrounds and containers)
   */
  surface: {
    primary: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.black.DEFAULT}'}},
    secondary: {value: {base: '{colors.gray.50}', _dark: '{colors.gray.950}'}},
    tertiary: {value: {base: '{colors.gray.100}', _dark: '{colors.gray.900}'}},
    elevated: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.gray.950}'}},
    overlay: {value: {base: '{colors.white.800}', _dark: '{colors.black.800}'}},
    panel: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.black.950}'}},
    error: {value: {base: '{colors.red.50}', _dark: '{colors.red.950}'}},
    warning: {value: {base: '{colors.orange.50}', _dark: '{colors.orange.950}'}},
    success: {value: {base: '{colors.green.50}', _dark: '{colors.green.950}'}},
    info: {value: {base: '{colors.blue.50}', _dark: '{colors.blue.950}'}},
    brand: {value: {base: '{colors.yellow.50}', _dark: '{colors.yellow.950}'}},
  },

  /**
   * Shell tokens (UI shell and layout components)
   */
  shell: {
    bg: {value: {base: '{colors.gray.50}', _dark: '{colors.gray.900}'}},
    muted: {value: {base: '{colors.gray.100}', _dark: '{colors.gray.800}'}},
    subtle: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.700}'}},
    contrastBg: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.black.DEFAULT}'}},
    border: {value: {base: '{colors.gray.300}', _dark: '{colors.gray.700}'}},
    group: {value: {base: '{colors.gray.500}', _dark: '{colors.gray.500}'}},
    item: {value: {base: '{colors.gray.900}', _dark: '{colors.gray.50}'}},
  },

  /**
   * Tier 2: Content tokens (text and foreground elements)
   */
  content: {
    primary: {value: {base: '{colors.gray.900}', _dark: '{colors.gray.50}'}},
    secondary: {value: {base: '{colors.gray.700}', _dark: '{colors.gray.300}'}},
    tertiary: {value: {base: '{colors.gray.500}', _dark: '{colors.gray.500}'}},
    disabled: {value: {base: '{colors.gray.400}', _dark: '{colors.gray.600}'}},
    inverted: {value: {base: '{colors.gray.50}', _dark: '{colors.black.DEFAULT}'}},
    error: {value: {base: '{colors.red.600}', _dark: '{colors.red.400}'}},
    warning: {value: {base: '{colors.orange.600}', _dark: '{colors.orange.400}'}},
    success: {value: {base: '{colors.green.600}', _dark: '{colors.green.400}'}},
    info: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.400}'}},
    brand: {value: {base: '{colors.yellow.600}', _dark: '{colors.yellow.300}'}},
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
   * Enhanced color palette tokens using new semantic structure
   */
  gray: {
    contrast: {value: {base: '{colors.surface.primary}', _dark: '{colors.surface.primary}'}},
    fg: {value: {base: '{colors.content.primary}', _dark: '{colors.content.primary}'}},
    subtle: {value: {base: '{colors.surface.secondary}', _dark: '{colors.surface.secondary}'}},
    muted: {value: {base: '{colors.surface.tertiary}', _dark: '{colors.surface.tertiary}'}},
    emphasized: {
      value: {base: '{colors.border.emphasized}', _dark: '{colors.border.emphasized}'},
    },
    solid: {value: {base: '{colors.content.primary}', _dark: '{colors.content.primary}'}},
    focusRing: {value: {base: '{colors.gray.400}', _dark: '{colors.gray.400}'}},
  },
  red: {
    contrast: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.white.DEFAULT}'}},
    fg: {value: {base: '{colors.content.error}', _dark: '{colors.content.error}'}},
    subtle: {value: {base: '{colors.surface.error}', _dark: '{colors.surface.error}'}},
    muted: {value: {base: '{colors.red.200}', _dark: '{colors.red.800}'}},
    emphasized: {value: {base: '{colors.red.300}', _dark: '{colors.red.700}'}},
    solid: {value: {base: '{colors.red.500}', _dark: '{colors.red.500}'}},
    focusRing: {value: {base: '{colors.red.400}', _dark: '{colors.red.400}'}},
  },
  pink: {
    contrast: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.white.DEFAULT}'}},
    fg: {value: {base: '{colors.pink.700}', _dark: '{colors.pink.300}'}},
    subtle: {value: {base: '{colors.pink.100}', _dark: '{colors.pink.900}'}},
    muted: {value: {base: '{colors.pink.200}', _dark: '{colors.pink.800}'}},
    emphasized: {value: {base: '{colors.pink.300}', _dark: '{colors.pink.700}'}},
    solid: {value: {base: '{colors.pink.600}', _dark: '{colors.pink.600}'}},
    focusRing: {value: {base: '{colors.pink.400}', _dark: '{colors.pink.400}'}},
  },
  purple: {
    contrast: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.white.DEFAULT}'}},
    fg: {value: {base: '{colors.purple.700}', _dark: '{colors.purple.300}'}},
    subtle: {value: {base: '{colors.purple.100}', _dark: '{colors.purple.900}'}},
    muted: {value: {base: '{colors.purple.200}', _dark: '{colors.purple.800}'}},
    emphasized: {value: {base: '{colors.purple.300}', _dark: '{colors.purple.700}'}},
    solid: {value: {base: '{colors.purple.500}', _dark: '{colors.purple.500}'}},
    focusRing: {value: {base: '{colors.purple.400}', _dark: '{colors.purple.400}'}},
  },
  cyan: {
    contrast: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.white.DEFAULT}'}},
    fg: {value: {base: '{colors.cyan.700}', _dark: '{colors.cyan.300}'}},
    subtle: {value: {base: '{colors.cyan.100}', _dark: '{colors.cyan.900}'}},
    muted: {value: {base: '{colors.cyan.200}', _dark: '{colors.cyan.800}'}},
    emphasized: {value: {base: '{colors.cyan.300}', _dark: '{colors.cyan.700}'}},
    solid: {value: {base: '{colors.cyan.600}', _dark: '{colors.cyan.600}'}},
    focusRing: {value: {base: '{colors.cyan.400}', _dark: '{colors.cyan.400}'}},
  },
  blue: {
    contrast: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.white.DEFAULT}'}},
    fg: {value: {base: '{colors.content.info}', _dark: '{colors.content.info}'}},
    subtle: {value: {base: '{colors.surface.info}', _dark: '{colors.surface.info}'}},
    muted: {value: {base: '{colors.blue.200}', _dark: '{colors.blue.800}'}},
    emphasized: {value: {base: '{colors.blue.300}', _dark: '{colors.blue.700}'}},
    solid: {value: {base: '{colors.blue.500}', _dark: '{colors.blue.500}'}},
    focusRing: {value: {base: '{colors.blue.400}', _dark: '{colors.blue.400}'}},
  },
  teal: {
    contrast: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.white.DEFAULT}'}},
    fg: {value: {base: '{colors.teal.700}', _dark: '{colors.teal.300}'}},
    subtle: {value: {base: '{colors.teal.100}', _dark: '{colors.teal.900}'}},
    muted: {value: {base: '{colors.teal.200}', _dark: '{colors.teal.800}'}},
    emphasized: {value: {base: '{colors.teal.300}', _dark: '{colors.teal.700}'}},
    solid: {value: {base: '{colors.teal.600}', _dark: '{colors.teal.600}'}},
    focusRing: {value: {base: '{colors.teal.400}', _dark: '{colors.teal.400}'}},
  },
  green: {
    contrast: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.white.DEFAULT}'}},
    fg: {value: {base: '{colors.content.success}', _dark: '{colors.content.success}'}},
    subtle: {value: {base: '{colors.surface.success}', _dark: '{colors.surface.success}'}},
    muted: {value: {base: '{colors.green.200}', _dark: '{colors.green.800}'}},
    emphasized: {value: {base: '{colors.green.300}', _dark: '{colors.green.700}'}},
    solid: {value: {base: '{colors.green.500}', _dark: '{colors.green.500}'}},
    focusRing: {value: {base: '{colors.green.400}', _dark: '{colors.green.400}'}},
  },
  yellow: {
    contrast: {value: {base: '{colors.black.DEFAULT}', _dark: '{colors.black.DEFAULT}'}},
    fg: {value: {base: '{colors.content.brand}', _dark: '{colors.content.brand}'}},
    subtle: {value: {base: '{colors.surface.brand}', _dark: '{colors.surface.brand}'}},
    muted: {value: {base: '{colors.yellow.200}', _dark: '{colors.yellow.800}'}},
    emphasized: {value: {base: '{colors.yellow.500}', _dark: '{colors.yellow.500}'}},
    solid: {value: {base: '{colors.yellow.500}', _dark: '{colors.yellow.500}'}},
    focusRing: {value: {base: '{colors.yellow.400}', _dark: '{colors.yellow.400}'}},
  },
  orange: {
    contrast: {value: {base: '{colors.black.DEFAULT}', _dark: '{colors.black.DEFAULT}'}},
    fg: {value: {base: '{colors.content.warning}', _dark: '{colors.content.warning}'}},
    subtle: {value: {base: '{colors.surface.warning}', _dark: '{colors.surface.warning}'}},
    muted: {value: {base: '{colors.orange.200}', _dark: '{colors.orange.800}'}},
    emphasized: {value: {base: '{colors.orange.300}', _dark: '{colors.orange.700}'}},
    solid: {value: {base: '{colors.orange.500}', _dark: '{colors.orange.500}'}},
    focusRing: {value: {base: '{colors.orange.400}', _dark: '{colors.orange.400}'}},
  },
  /**
   * Global semantic tokens - updated to use new structure
   */
  bg: {
    DEFAULT: {value: {base: '{colors.white.DEFAULT}', _dark: '{colors.gray.950}'}},
    subtle: {value: {base: '{colors.surface.secondary}', _dark: '{colors.surface.secondary}'}},
    muted: {value: {base: '{colors.surface.tertiary}', _dark: '{colors.surface.tertiary}'}},
    emphasized: {
      value: {base: '{colors.surface.elevated}', _dark: '{colors.surface.elevated}'},
    },
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
}
