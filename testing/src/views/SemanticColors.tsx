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

import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import type { ChildProps } from '~/App.tsx'
import { colors as primitiveColors } from '../../../theme/src/colors/primitive-colors'
import { semanticTokens } from '../../../theme/src/colors/semantic-tokens'

const semanticTokenGroups = Object.keys(semanticTokens)

/**
 * A helper function to resolve theme token references (e.g., '{colors.gray.50}')
 * to their actual color value from the primitive colors.
 */
const resolveTokenValue = (tokenRef: string | undefined, depth = 0): string => {
  // Prevent infinite recursion
  if (depth > 5) {
    return '#cccccc'
  }

  if (!tokenRef || !tokenRef.startsWith('{') || !tokenRef.endsWith('}')) {
    // Handle direct color values
    if (tokenRef === 'white') {
      return '#ffffff'
    }
    if (tokenRef === 'black') {
      return '#000000'
    }
    if (tokenRef?.startsWith('#')) {
      return tokenRef
    }
    if (tokenRef?.startsWith('rgba')) {
      return tokenRef
    }
    return tokenRef || '#000000'
  }

  // Extract the token path from the reference
  const tokenPath = tokenRef.slice(1, -1) // Remove the { and }

  // For token references, try to resolve from the primitive tokens first
  if (tokenPath.startsWith('colors.')) {
    const colorPath = tokenPath.replace('colors.', '')

    // Check if it's a semantic token reference
    if (colorPath.includes('.')) {
      const pathParts = colorPath.split('.')

      // Try primitive colors first
      let current: any = primitiveColors
      for (const part of pathParts) {
        if (current && typeof current === 'object') {
          current = current[part]
        } else {
          current = null
          break
        }
      }

      // If found in primitive colors, return it
      if (current && typeof current === 'object' && 'value' in current) {
        return current.value
      }

      // If not found in primitive colors, try semantic tokens
      current = semanticTokens as any
      for (const part of pathParts) {
        if (current && typeof current === 'object') {
          current = current[part]
        } else {
          current = null
          break
        }
      }

      // If found in semantic tokens, recursively resolve
      if (current && typeof current === 'object' && 'value' in current) {
        const semanticValue = current.value
        if (typeof semanticValue === 'object') {
          // Get the base value (we'll handle dark mode later if needed)
          const baseValue = semanticValue.base || semanticValue._light
          if (baseValue) {
            return resolveTokenValue(baseValue, depth + 1)
          }
        }
        return resolveTokenValue(semanticValue, depth + 1)
      }
    }
  }

  // If we can't resolve it, return a fallback color
  return '#cccccc'
}

/**
 * A component that renders color swatches for each semantic color palette.
 */
export function SemanticTokens({ isDarkMode }: ChildProps) {
  return (
    <Box>
      {semanticTokenGroups.map((colorName) => {
        const colorTokens = (semanticTokens as any)[colorName]

        if (typeof colorTokens !== 'object' || colorTokens === null) {
          return null
        }

        const tokenSuffixes = Object.keys(colorTokens)

        return (
          <Box key={colorName} as="section" mb={12}>
            <Heading
              as="h2"
              size="xl"
              mb={6}
              textTransform="capitalize"
              borderBottomWidth="2px"
              borderColor="border"
              color="text"
              pb={2}
            >
              {colorName}
            </Heading>
            <Flex wrap="wrap" gap={6}>
              {tokenSuffixes.map((tokenSuffix) => {
                const fullTokenName = `${colorName}.${tokenSuffix}`

                const tokenObj = (colorTokens as any)[tokenSuffix]

                if (!tokenObj) {
                  return null // Skip missing tokens silently
                }

                if (!tokenObj.value) {
                  return null // Skip tokens without value property
                }

                const tokenDefinition = tokenObj.value

                const tokenRef = isDarkMode
                  ? tokenDefinition._dark || tokenDefinition.base
                  : tokenDefinition.base

                // Try to resolve the token reference to an actual color value
                const finalColorValue = resolveTokenValue(tokenRef)

                // Skip tokens that couldn't be resolved to a valid color
                if (!finalColorValue) {
                  return null
                }

                let displayValue = tokenRef
                if (
                  typeof displayValue === 'string' &&
                  displayValue.startsWith('{') &&
                  displayValue.endsWith('}')
                ) {
                  displayValue = displayValue.slice(1, -1)
                }

                return (
                  <VStack key={fullTokenName} gap={1} align="flex-start">
                    <Box
                      w="120px"
                      h="80px"
                      bg={finalColorValue}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="border"
                      color="text"
                    />
                    <Box>
                      <Text fontSize="sm" fontWeight="medium" color={'text'}>
                        {fullTokenName}
                      </Text>
                      <Text fontSize="xs" color="text">
                        {displayValue}
                      </Text>
                      <Text fontSize="xs" color="text" fontFamily="monospace">
                        {finalColorValue}
                      </Text>
                    </Box>
                  </VStack>
                )
              })}
            </Flex>
          </Box>
        )
      })}
    </Box>
  )
}
