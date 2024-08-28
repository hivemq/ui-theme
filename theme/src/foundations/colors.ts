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

import { percentageToHex } from '../utils'

export const amber = {
  700: '#3B2C00',
  600: '#4D3900',
  500: '#8B6A08',
  400: '#E5AF09',
  300: '#FFC000',
  200: '#F2E7C4',
  100: '#FCF6E3',
  50: '#FCF9F0',
  alpha: `#FFC000${percentageToHex(30)}`,
} as const

export const blue = {
  700: '#00162B',
  600: '#001E3B',
  500: '#002F5C',
  400: '#0061BD',
  300: '#006ED6',
  200: '#BCD7F1',
  100: '#E8F3FC',
  50: '#F2F7FC',
  alpha: `#006ED6${percentageToHex(15)}`,
} as const

export const green = {
  700: '#0B210F',
  600: '#13371A',
  500: '#22592C',
  400: '#4FBF64',
  300: '#5DDF75',
  200: '#D5F8DB',
  100: '#EBFCEE',
  50: '#F4FCF5',
  alpha: `#5DDF75${percentageToHex(25)}`,
} as const

export const neutrals = {
  950: '#0E0D0A',
  900: '#171612',
  800: '#2A2925',
  700: '#403E3A',
  600: '#706E67',
  500: '#8C8A84',
  400: '#9C9A94',
  300: '#C7C5BF',
  200: '#E5E3DF',
  100: '#F0F0F0',
  50: '#FAFAFA',
  WHITE: '#FFFFFF',
  alpha: `#706E67${percentageToHex(30)}`,
} as const

export const orange = {
  700: '#381E00',
  600: '#3F2200',
  500: '#643500',
  400: '#D37100',
  300: '#FF8800',
  200: '#FDE0BE',
  100: '#FCF1E3',
  50: '#FCF7F0',
  alpha: `#FF8800${percentageToHex(20)}`,
} as const

export const purple = {
  700: '#170C3D',
  600: '#1B0E47',
  500: '#291766',
  400: '#5C38D9',
  300: '#6D47F7',
  200: '#D9D3F0',
  100: '#F3F0FC',
  50: '#F8F7FC',
  alpha: `#6D47F7${percentageToHex(15)}`,
} as const

export const red = {
  700: '#2E060C',
  600: '#400811',
  500: '#660314',
  400: '#C70C2C',
  300: '#E80E34',
  200: '#F0D5DA',
  100: '#FCF2F4',
  50: '#FCF7F8',
  alpha: `#E80E34${percentageToHex(15)}`,
} as const
