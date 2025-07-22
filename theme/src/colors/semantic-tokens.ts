export const semanticTokens = {
  /**
   * HiveMQ related custom semantic Tokens
   */
  primary: {
    bg: {value: {base: '{colors.yellow.400}', _dark: '{colors.yellow.400}'}},
    bg_hover: {value: {base: '{colors.yellow.500}', _dark: '{colors.yellow.500}'}},
    fg: {value: {base: '{colors.black}', _dark: '{colors.black}'}},
    border: {value: {base: '{colors.yellow.500}', _dark: '{colors.yellow.500}'}},
  },
  secondary: {
    bg: {value: {base: '{colors.blue.500}', _dark: '{colors.blue.400}'}},
    bg_hover: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.500}'}},
    border: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.500}'}},
    fg: {value: {base: 'white', _dark: '{colors.blue.950}'}},
  },
  success: {
    bg: {value: {base: '{colors.green.500}', _dark: '{colors.green.400}'}},
    bg_hover: {value: {base: '{colors.green.600}', _dark: '{colors.green.500}'}},
    border: {value: {base: '{colors.green.600}', _dark: '{colors.green.500}'}},
    fg: {value: {base: 'white', _dark: '{colors.green.950}'}},
  },
  info: {
    fg: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.400}'}},
    bg: {value: {base: '{colors.blue.200}', _dark: '{colors.blue.950}'}},
    bg_hover: {value: {base: '{colors.blue.300}', _dark: '{colors.blue.800}'}},
    text: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.300}'}},
    border: {value: {base: '{colors.blue.300}', _dark: '{colors.blue.400}'}},
  },
  warning: {
    bg: {value: {base: '{colors.orange.500}', _dark: '{colors.orange.400}'}},
    bg_hover: {value: {base: '{colors.orange.600}', _dark: '{colors.orange.500}'}},
    border: {value: {base: '{colors.orange.600}', _dark: '{colors.orange.500}'}},
    fg: {value: {base: 'white', _dark: '{colors.orange.950}'}},
  },
  error: {
    bg: {value: {base: '{colors.red.500}', _dark: '{colors.red.400}'}},
    bg_hover: {value: {base: '{colors.red.600}', _dark: '{colors.red.500}'}},
    border: {value: {base: '{colors.red.600}', _dark: '{colors.red.500}'}},
    fg: {value: {base: 'white', _dark: '{colors.red.950}'}},
  },
  highlight: {
    bg: {value: {base: '{colors.purple.500}', _dark: '{colors.purple.400}'}},
    bg_hover: {value: {base: '{colors.purple.600}', _dark: '{colors.purple.500}'}},
    border: {value: {base: '{colors.purple.600}', _dark: '{colors.purple.500}'}},
    fg: {value: {base: 'white', _dark: '{colors.purple.950}'}},
  },
  /**
   * Global
   */
  bg: {
    DEFAULT: {value: {base: '{colors.white}', _dark: '{colors.black}'}},
    subtle: {value: {base: '{colors.gray.50}', _dark: '{colors.gray.950}'}},
    muted: {value: {base: '{colors.gray.100}', _dark: '{colors.gray.900}'}},
    emphasized: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
    inverted: {value: {base: '{colors.black}', _dark: '{colors.white}'}},
    panel: {value: {base: '{colors.white}', _dark: '{colors.black.950}'}},
    error: {value: {base: '{colors.red.50}', _dark: '{colors.red.950}'}},
    warning: {value: {base: '{colors.orange.50}', _dark: '{colors.orange.950}'}},
    success: {value: {base: '{colors.green.50}', _dark: '{colors.green.950}'}},
    info: {value: {base: '{colors.blue.50}', _dark: '{colors.blue.950}'}},
    primary: {value: {base: '{colors.yellow.50}', _dark: '{colors.yellow.950}'}},
  },
  fg: {
    DEFAULT: {value: {base: '{colors.black}', _dark: '{colors.gray.50}'}},
    subtle: {value: {base: '{colors.gray.400}', _dark: '{colors.gray.500}'}},
    muted: {value: {base: '{colors.gray.600}', _dark: '{colors.gray.600}'}},
    inverted: {value: {base: '{colors.gray.50}', _dark: '{colors.black}'}},
    error: {value: {base: '{colors.red.600}', _dark: '{colors.red.500}'}},
    warning: {value: {base: '{colors.orange.500}', _dark: '{colors.orange.400}'}},
    success: {value: {base: '{colors.green.600}', _dark: '{colors.green.400}'}},
    info: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.400}'}},
    primary: {value: {base: '{colors.yellow.300}', _dark: '{colors.yellow.300}'}},
  },
  border: {
    DEFAULT: {value: {base: '{colors.gray.200}', _dark: '{colors.gray.800}'}},
    subtle: {value: {base: '{colors.gray.50}', _dark: '{colors.gray.950}'}},
    muted: {value: {base: '{colors.gray.100}', _dark: '{colors.gray.900}'}},
    emphasized: {value: {base: '{colors.gray.300}', _dark: '{colors.gray.700}'}},
    inverted: {value: {base: '{colors.gray.800}', _dark: '{colors.gray.200}'}},
    error: {value: {base: '{colors.red.500}', _dark: '{colors.gray.400}'}},
    warning: {value: {base: '{colors.orange.500}', _dark: '{colors.gray.400}'}},
    success: {value: {base: '{colors.green.500}', _dark: '{colors.gray.400}'}},
    info: {value: {base: '{colors.blue.500}', _dark: '{colors.gray.400}'}},
  },
  text: {
    DEFAULT: {value: {base: '{colors.black}', _dark: '{colors.black.50}'}},
    muted: {value: {base: '{colors.gray.600}', _dark: '{colors.gray.400}'}},
    subtle: {value: {base: '{colors.gray.400}', _dark: '{colors.gray.500}'}},
    inverted: {value: {base: '{colors.gray.50}', _dark: '{colors.black}'}},
    error: {value: {base: '{colors.red.600}', _dark: '{colors.red.500}'}},
    warning: {value: {base: '{colors.yellow.600}', _dark: '{colors.yellow.300}'}},
    success: {value: {base: '{colors.green.600}', _dark: '{colors.green.300}'}},
    info: {value: {base: '{colors.blue.600}', _dark: '{colors.blue.300}'}},
  },
};