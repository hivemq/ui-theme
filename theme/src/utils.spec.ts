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

import { describe, expect, test } from 'vitest'
import { percentageToHex } from './utils'

describe('utils', () => {
  test.each([
    [0, '00'],
    [5, '0C'],
    [10, '19'],
    [15, '26'],
    [20, '33'],
    [25, '3F'],
    [30, '4C'],
    [35, '59'],
    [40, '66'],
    [45, '72'],
    [50, '7F'],
    [55, '8C'],
    [60, '99'],
    [65, 'A5'],
    [70, 'B2'],
    [75, 'BF'],
    [80, 'CC'],
    [85, 'D8'],
    [90, 'E5'],
    [95, 'F2'],
    [100, 'FF'],
  ])('transform percentage (%i) into -> hex value (%i)', (value, expected) => {
    expect(percentageToHex(value)).toEqual(expected)
  })
})
