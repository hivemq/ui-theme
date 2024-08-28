import { describe, expect, test } from 'vitest'
import { chakraTokenToCssVar, percentageToHex, themedColors } from './utils'

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
    [100, 'FF']
  ])('transform percentage (%i) into -> hex value (%i)', (value, expected) => {
    expect(percentageToHex(value)).toEqual(expected)
  })

  test('chakraTokenToCssVar', () => {
    expect(chakraTokenToCssVar('potato', '123')).toEqual('var(--chakra-colors-potato-123)')
    expect(chakraTokenToCssVar('potato.123')).toEqual('var(--chakra-colors-potato-123)')
    expect(chakraTokenToCssVar('backgrounds', 'bg.potato', 900)).toEqual(
      'var(--chakra-colors-backgrounds-bg-potato-900)',
    )
  })

  test('themedColors', () => {
    const expectedOutput = {
      default: 'sausage.20',
      _dark: 'tomato.50',
    }
    expect(themedColors('sausage.20', 'tomato.50')).toEqual(expectedOutput)
  })
})
