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

export const semanticTokens = {
  /**
   * Background tokens
   */
  bg: {
    DEFAULT: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.950}' } },
  },

  /**
   * Text tokens
   */
  text: {
    DEFAULT: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.50}' } },
  },

  /**
   * Border tokens
   */
  border: {
    DEFAULT: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.50}' } },
  },

  /**
   * Tier 2: Content tokens (text and foreground elements)
   */
  content: {
    primary: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.50}' } },
    secondary: { value: { base: '{colors.gray.700}', _dark: '{colors.gray.300}' } },
    tertiary: { value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' } },
    disabled: { value: { base: '{colors.gray.400}', _dark: '{colors.gray.600}' } },
    inverted: { value: { base: '{colors.gray.50}', _dark: '{colors.black}' } },
    error: { value: { base: '{colors.red.600}', _dark: '{colors.red.400}' } },
    warning: { value: { base: '{colors.orange.600}', _dark: '{colors.orange.400}' } },
    success: { value: { base: '{colors.green.600}', _dark: '{colors.green.400}' } },
    info: { value: { base: '{colors.blue.600}', _dark: '{colors.blue.400}' } },
    brand: { value: { base: '{colors.yellow.600}', _dark: '{colors.yellow.300}' } },
    solid: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.800}' } },
  },

  /**
   * Shell tokens (UI shell and layout components)
   */
  shell: {
    bg: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.900}' } },
    muted: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.800}' } },
    subtle: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.700}' } },
    contrastBg: { value: { base: '{colors.white}', _dark: '{colors.black}' } },
    border: { value: { base: '{colors.gray.300}', _dark: '{colors.gray.700}' } },
    group: { value: { base: '{colors.gray.500}', _dark: '{colors.gray.500}' } },
    item: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.50}' } },
  },

  secondary: {
    contrast: { value: { base: '{colors.black}', _dark: '{colors.white}' } },
    fg: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.500}' } },
    subtle: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.900}' } },
    muted: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.800}' } },
    emphasized: { value: { base: '{colors.gray.300}', _dark: '{colors.gray.700}' } },
    solid: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.500}' } },
    focusRing: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.400}' } },
  },
  brand: {
    contrast: { value: { base: '{colors.black}', _dark: '{colors.black}' } },
    fg: { value: { base: '{colors.yellow.300}', _dark: '{colors.yellow.500}' } },
    subtle: { value: { base: '{colors.yellow.100}', _dark: '{colors.yellow.900}' } },
    muted: { value: { base: '{colors.yellow.200}', _dark: '{colors.yellow.800}' } },
    emphasized: { value: { base: '{colors.yellow.200}', _dark: '{colors.yellow.700}' } },
    solid: { value: { base: '{colors.yellow.300}', _dark: '{colors.yellow.500}' } },
    focusRing: { value: { base: '{colors.yellow.300}', _dark: '{colors.yellow.500}' } },
  },
  success: {
    contrast: { value: { base: '{colors.white}', _dark: '{colors.white}' } },
    fg: { value: { base: '{colors.green.600}', _dark: '{colors.green.400}' } },
    subtle: { value: { base: '{colors.green.50}', _dark: '{colors.green.950}' } },
    muted: { value: { base: '{colors.green.200}', _dark: '{colors.green.800}' } },
    emphasized: { value: { base: '{colors.green.300}', _dark: '{colors.green.700}' } },
    solid: { value: { base: '{colors.green.500}', _dark: '{colors.green.500}' } },
    focusRing: { value: { base: '{colors.green.400}', _dark: '{colors.green.400}' } },
  },
  danger: {
    contrast: { value: { base: '{colors.white}', _dark: '{colors.white}' } },
    fg: { value: { base: '{colors.red.600}', _dark: '{colors.red.400}' } },
    subtle: { value: { base: '{colors.red.50}', _dark: '{colors.red.950}' } },
    muted: { value: { base: '{colors.red.300}', _dark: '{colors.red.800}' } },
    emphasized: { value: { base: '{colors.red.400}', _dark: '{colors.red.700}' } },
    solid: { value: { base: '{colors.red.600}', _dark: '{colors.red.500}' } },
    focusRing: { value: { base: '{colors.red.500}', _dark: '{colors.red.400}' } },
  },
  warning: {
    contrast: { value: { base: '{colors.white}', _dark: '{colors.white}' } },
    fg: { value: { base: '{colors.orange.600}', _dark: '{colors.orange.400}' } },
    subtle: { value: { base: '{colors.orange.50}', _dark: '{colors.orange.950}' } },
    muted: { value: { base: '{colors.orange.200}', _dark: '{colors.orange.800}' } },
    emphasized: { value: { base: '{colors.orange.300}', _dark: '{colors.orange.700}' } },
    solid: { value: { base: '{colors.orange.500}', _dark: '{colors.orange.500}' } },
    focusRing: { value: { base: '{colors.orange.400}', _dark: '{colors.orange.400}' } },
  },
  info: {
    contrast: { value: { base: '{colors.white}', _dark: '{colors.white}' } },
    fg: { value: { base: '{colors.blue.600}', _dark: '{colors.blue.400}' } },
    subtle: { value: { base: '{colors.blue.50}', _dark: '{colors.blue.950}' } },
    muted: { value: { base: '{colors.blue.200}', _dark: '{colors.blue.800}' } },
    emphasized: { value: { base: '{colors.blue.300}', _dark: '{colors.blue.700}' } },
    solid: { value: { base: '{colors.blue.500}', _dark: '{colors.blue.500}' } },
    focusRing: { value: { base: '{colors.blue.400}', _dark: '{colors.blue.400}' } },
  },
  highlight: {
    contrast: { value: { base: '{colors.white}', _dark: '{colors.white}' } },
    fg: { value: { base: '{colors.purple.600}', _dark: '{colors.purple.400}' } },
    subtle: { value: { base: '{colors.purple.50}', _dark: '{colors.purple.950}' } },
    muted: { value: { base: '{colors.purple.200}', _dark: '{colors.purple.800}' } },
    emphasized: { value: { base: '{colors.purple.300}', _dark: '{colors.purple.700}' } },
    solid: { value: { base: '{colors.purple.500}', _dark: '{colors.purple.500}' } },
    focusRing: { value: { base: '{colors.purple.400}', _dark: '{colors.purple.400}' } },
  },
}
