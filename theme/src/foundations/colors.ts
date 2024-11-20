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
  // DEPRECATED
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
  950: '#001237',
  900: '#001F4D',
  800: '#02356E',
  700: '#05529B',
  600: '#006AC4',
  500: '#228EF0',
  400: '#6FB4FE',
  300: '#98CFF7',
  200: '#CCE5FB',
  100: '#E8F2FF',
  50: '#F7FAFE',
} as const

export const gray = {
  950: '#111111',
  900: '#18181B',
  800: '#27272A',
  700: '#3F3F46',
  600: '#52525B',
  500: '#71717A',
  400: '#A1A1AA',
  300: '#D4D4D8',
  200: '#E4E4E7',
  100: '#F4F4F5',
  50: '#FAFAFA',
} as const

export const green = {
  950: '#011B07',
  900: '#0A2E15',
  800: '#114922',
  700: '#186631',
  600: '#03893C',
  500: '#01AD4D',
  400: '#2AD066',
  300: '#72EE91',
  200: '#A6F9B6',
  100: '#D5FCDB',
  50: '#F0FCF2',
} as const

export const neutrals = {
  // DEPRECATED
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
  950: '#2E0800',
  900: '#4A1506',
  800: '#77290E',
  700: '#A03810',
  600: '#CC4C0A',
  500: '#F56D00',
  400: '#FF973A',
  300: '#FFB76B',
  200: '#FFDCB3',
  100: '#FFF0DC',
  50: '#FFF7ED',
} as const

export const purple = {
  950: '#1F0933',
  900: '#310C54',
  800: '#4C0F77',
  700: '#6C20AF',
  600: '#9227EB',
  500: '#B068FA',
  400: '#C590FD',
  300: '#DBBEFB',
  200: '#E8D8F9',
  100: '#F4ECFD',
  50: '#FBF6FF',
} as const

export const red = {
  950: '#2F0001',
  900: '#4F0001',
  800: '#78120E',
  700: '#9E1815',
  600: '#CB010B',
  500: '#E92823',
  400: '#FE6456',
  300: '#FEA599',
  200: '#FFD5CF',
  100: '#FFE9E6',
  50: '#FFF4F2',
} as const

export const yellow = {
  950: '#291101',
  900: '#411E01',
  800: '#6C3602',
  700: '#A96801',
  600: '#E49B1A',
  500: '#FFC000',
  400: '#FFD238',
  300: '#FDE269',
  200: '#FAED93',
  100: '#FBF7C4',
  50: '#FDFBE7',
} as const
