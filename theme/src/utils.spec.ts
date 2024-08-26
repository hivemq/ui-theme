import { describe, expect, test } from "vitest"
import { chakraTokenToCssVar, percentageToHex, themedColors } from "./utils"

describe('utils', () => {
  test('percentageToHex', () => {
    expect(percentageToHex(0)).toEqual('00')
    expect(percentageToHex(5)).toEqual('0C')
    expect(percentageToHex(10)).toEqual('19')
    expect(percentageToHex(15)).toEqual('26')
    expect(percentageToHex(20)).toEqual('33')
    expect(percentageToHex(25)).toEqual('3F')
    expect(percentageToHex(30)).toEqual('4C')
    expect(percentageToHex(35)).toEqual('59')
    expect(percentageToHex(40)).toEqual('66')
    expect(percentageToHex(45)).toEqual('72')
    expect(percentageToHex(50)).toEqual('7F')
    expect(percentageToHex(55)).toEqual('8C')
    expect(percentageToHex(60)).toEqual('99')
    expect(percentageToHex(65)).toEqual('A5')
    expect(percentageToHex(70)).toEqual('B2')
    expect(percentageToHex(75)).toEqual('BF')
    expect(percentageToHex(80)).toEqual('CC')
    expect(percentageToHex(85)).toEqual('D8')
    expect(percentageToHex(90)).toEqual('E5')
    expect(percentageToHex(95)).toEqual('F2')
    expect(percentageToHex(100)).toEqual('FF')
  })

  test('chakraTokenToCssVar', () => {
    expect(chakraTokenToCssVar('potato', '123')).toEqual('var(--chakra-colors-potato-123)')
    expect(chakraTokenToCssVar('potato.123')).toEqual('var(--chakra-colors-potato-123)')
    expect(chakraTokenToCssVar('backgrounds', 'bg.potato', 900)).toEqual('var(--chakra-colors-backgrounds-bg-potato-900)')
  })

  test('themedColors', () => {
    const expectedOutput = {
      default: 'sausage.20',
      _dark: 'tomato.50',
    }
    expect(themedColors('sausage.20', 'tomato.50')).toEqual(expectedOutput)
  })
})
