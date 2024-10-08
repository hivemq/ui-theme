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

import { defineStyleConfig } from '@chakra-ui/react'

type TypographySettings = {
  fontSizeRem: number
  lineHeightMultiplier: number
  letterSpacingPercentage: number
}

const l1Settings: TypographySettings = {
  fontSizeRem: 0.875,
  lineHeightMultiplier: 1,
  letterSpacingPercentage: 6.5,
}
const l2Settings: TypographySettings = {
  fontSizeRem: 0.75,
  lineHeightMultiplier: 1,
  letterSpacingPercentage: 5,
}
const b1Settings: TypographySettings = {
  fontSizeRem: 1,
  lineHeightMultiplier: 1.5,
  letterSpacingPercentage: 6.5,
}
const b2Settings: TypographySettings = {
  fontSizeRem: 0.875,
  lineHeightMultiplier: 1,
  letterSpacingPercentage: 5,
}
const m1Settings: TypographySettings = {
  fontSizeRem: 1,
  lineHeightMultiplier: 1.5,
  letterSpacingPercentage: 5,
}
const m2Settings: TypographySettings = {
  fontSizeRem: 0.875,
  lineHeightMultiplier: 1,
  letterSpacingPercentage: 5,
}
const metricsFont = 'Roboto Mono'

type TypographyProps = {
  fontFamily?: string
  fontSize?: string
  lineHeight?: string
  letterSpacing?: string
  textTransform?: string
}

function defineTypographyStyle(
  name: string,
  settings: TypographySettings,
  otherParameters?: TypographyProps,
) {
  return {
    fontSize: name,
    lineHeight: `${settings.lineHeightMultiplier * settings.fontSizeRem}`,
    letterSpacing: `${(settings.letterSpacingPercentage / 100) * settings.fontSizeRem}rem`,
    ...(otherParameters || {}),
  }
}

const variants = {
  P1: {
    fontSize: 'P1',
    lineHeight: '1.75rem',
  },
  P2: {
    fontSize: 'P2',
    lineHeight: '1.5rem',
  },
  P3: {
    fontSize: 'P3',
    lineHeight: '1.25rem',
  },
  P4: {
    fontSize: 'P4',
    lineHeight: '1rem',
  },
  P5: {
    fontSize: 'P5',
    lineHeight: '1rem',
  },
  L1: defineTypographyStyle('L1', l1Settings, { textTransform: 'uppercase' }),
  L2: defineTypographyStyle('L2', l2Settings, { textTransform: 'uppercase' }),
  B1: defineTypographyStyle('B1', b1Settings),
  B2: defineTypographyStyle('B2', b2Settings),
  M1: defineTypographyStyle('M1', m1Settings, { fontFamily: metricsFont }),
  M2: defineTypographyStyle('M2', m2Settings, { fontFamily: metricsFont }),
}

export const fontSizes = {
  P1: '1.125rem', // can be referenced from sizes/<sizeName>/fontSize e.g. sizes/P1/fontSize
  P2: '1rem',
  P3: '0.875rem',
  P4: '0.75rem',
  P5: '0.625rem',
  L1: `${l1Settings.fontSizeRem}rem`,
  L2: `${l2Settings.fontSizeRem}rem`,
  B1: `${b1Settings.fontSizeRem}rem`,
  B2: `${b2Settings.fontSizeRem}rem`,
  M1: `${m1Settings.fontSizeRem}rem`,
  M2: `${m2Settings.fontSizeRem}rem`,
}

export const textTheme = defineStyleConfig({
  variants,
})
