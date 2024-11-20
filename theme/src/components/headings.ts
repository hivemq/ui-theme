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

import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

function headingStyle(fontSizeRem: number, lineHeightRem: number) {
  return defineStyle({
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: `${fontSizeRem}rem`,
    lineHeight: `${lineHeightRem}rem`,
    letterSpacing: `-${0.02 * fontSizeRem}rem`, // -2%
  })
}

const h1 = headingStyle(2.25, 2.75)

const h2 = headingStyle(1.875, 2.25)

const h3 = headingStyle(1.5, 2)

const h4 = headingStyle(1, 1.25)

const h5 = headingStyle(0.875, 1)

const variants = {
  h1,
  h2,
  h3,
  h4,
  h5,
} as const

type HeaderVariant = typeof variants

const variantMap = new Map(Object.entries(variants))
const DEFAULT_VARIANT = h1

export const headingTheme = defineStyleConfig({
  baseStyle: defineStyle((props) => {
    let selectedVariant: HeaderVariant[keyof HeaderVariant] | undefined

    if (props.variant && variantMap.has(props.variant)) {
      selectedVariant = variantMap.get(props.variant)
    }

    if (!!props.as && variantMap.has(props.as)) {
      selectedVariant = variantMap.get(props.as)
    }

    return selectedVariant || DEFAULT_VARIANT
  }),
  variants,
  defaultProps: {
    variant: undefined,
  },
})
