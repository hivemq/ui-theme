/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
