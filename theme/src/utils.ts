export function percentageToHex(percentage: number) {
  return `0${Math.floor((percentage * 255) / 100).toString(16)}`.slice(-2).toUpperCase()
}

/**
 * Turns a token (or an array of partial tokens) into the CSS class to reference it.
 * @param args token or an array of partial tokens
 * @returns {string} CSS variable name to reference the token
 * @example chakraTokenToCssVar('neutrals', 900) -> 'var(--chakra-colors-neutrals-900)'
 * @example chakraTokenToCssVar('neutrals.900') -> 'var(--chakra-colors-neutrals-900)'
 * @example chakraTokenToCssVar('backgrounds', 'bg.potato', 900)) -> 'var(--chakra-colors-backgrounds-bg-potato-900)'
 */
export function chakraTokenToCssVar(...args: Array<string | number>) {
  return `var(--chakra-colors-${args.flatMap((el) => `${el}`.split('.')).join('-')})`
}

/**
 * Create a structure representing colors in different modes
 * @param {string} light Color for light mode
 * @param {string} dark Color for dark mode
 * @returns {light,dark} Structure containing colors for light and dark modes
 */
export function themedColors(light: string, dark: string) {
  return {
    default: light,
    _dark: dark,
  }
}
