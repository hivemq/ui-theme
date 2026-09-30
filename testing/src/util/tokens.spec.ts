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

import { describe, expect, it } from 'vitest'
import {
  buildUsageMap,
  categoricalColors,
  getSemanticToken,
  primitiveValue,
  resolveSemantic,
  type SemanticToken,
  semanticTokenList,
  stripReference,
} from './tokens'

describe('tokens', () => {
  describe('stripReference', () => {
    it('should strip the colors reference wrapper', () => {
      expect(stripReference('{colors.gray.50}')).toBe('gray.50')
    })

    it('should return plain values unchanged', () => {
      expect(stripReference('white')).toBe('white')
    })
  })

  describe('primitiveValue', () => {
    it('should resolve a ramp step', () => {
      expect(primitiveValue('yellow.300')).toBe('#FFC111')
    })

    it('should resolve a bare color to its DEFAULT value', () => {
      expect(primitiveValue('white')).toBe('rgba(255, 255, 255, 1)')
    })

    it('should resolve alpha and categorical steps', () => {
      expect(primitiveValue('black.200')).toBe('rgba(1, 1, 1, 0.08)')
      expect(primitiveValue('categorical.1')).toBe('#007DE6')
    })

    it('should return null for paths that do not exist', () => {
      expect(primitiveValue('gray.1000')).toBeNull()
      expect(primitiveValue('nope.50')).toBeNull()
    })
  })

  describe('semanticTokenList', () => {
    it('should read light and dark references from the theme source', () => {
      expect(getSemanticToken('brand.solid')).toMatchObject({
        group: 'brand',
        key: 'solid',
        light: 'yellow.300',
        dark: 'yellow.500',
        deprecated: false,
      })
    })

    it('should mark only shell tokens as deprecated', () => {
      const deprecated = semanticTokenList.filter((token) => token.deprecated)
      expect(deprecated.length).toBeGreaterThan(0)
      expect(deprecated.every((token) => token.group === 'shell')).toBe(true)
    })
  })

  describe('resolveSemantic', () => {
    it('should resolve a token per mode', () => {
      const token = getSemanticToken('content.primary') as SemanticToken
      expect(resolveSemantic(token, 'light')).toBe(primitiveValue('gray.900'))
      expect(resolveSemantic(token, 'dark')).toBe(primitiveValue('gray.50'))
    })

    it('should return null when a reference does not resolve', () => {
      const token: SemanticToken = {
        name: 'test.token',
        group: 'test',
        key: 'token',
        light: 'gray.50',
        dark: 'gray.9 00',
        deprecated: false,
      }
      expect(resolveSemantic(token, 'dark')).toBeNull()
    })
  })

  describe('buildUsageMap', () => {
    it('should list the semantic tokens that use a primitive', () => {
      expect(buildUsageMap().get('yellow.300')).toContain('brand.solid (light)')
    })

    it('should leave deprecated tokens out', () => {
      const entries = [...buildUsageMap().values()].flat()
      expect(entries.some((entry) => entry.startsWith('shell.'))).toBe(false)
    })
  })

  it('should expose twelve categorical colors', () => {
    expect(categoricalColors).toHaveLength(12)
  })
})
