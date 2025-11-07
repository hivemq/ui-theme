export const semanticTokens = {
  /**
   * Background tokens
   */
  bg: {
    DEFAULT: {value: {base: '{colors.gray.50}', _dark: '{colors.gray.950}'}},
  },
  
  /**
   * Text tokens
   */
  text: {
    DEFAULT: {value: {base: '{colors.gray.900}', _dark: '{colors.gray.50}'}},
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
}
