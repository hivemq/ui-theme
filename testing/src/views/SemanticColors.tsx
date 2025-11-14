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

import {Box, Flex, Heading, Text, VStack} from '@chakra-ui/react'
import type {ChildProps} from '~/App.tsx'
import {colors as primitiveColors} from '../../../theme/src/colors/primitive-colors'
import {semanticTokens} from '../../../theme/src/colors/semantic-tokens'

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

    // Handle simple color references like 'colors.black' or 'colors.white'
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

    // If we found a color group object with DEFAULT, use that
    if (current && typeof current === 'object') {
      if ('value' in current) {
        // Direct value found (e.g., gray.50)
        return current.value
      } else if ('DEFAULT' in current && current.DEFAULT && 'value' in current.DEFAULT) {
        // Color group with DEFAULT (e.g., black.DEFAULT, white.DEFAULT)
        return current.DEFAULT.value
      }
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

  // If we can't resolve it, return a fallback color
  return '#cccccc'
}

/**
 * A component that renders color swatches for each semantic color palette.
 */
export function SemanticTokens({isDarkMode}: ChildProps) {
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

                // Get values for both modes to display
                const baseTokenRef = tokenDefinition.base
                const darkTokenRef = tokenDefinition._dark || tokenDefinition.base

                // Use the appropriate token based on current mode
                const currentTokenRef = isDarkMode ? darkTokenRef : baseTokenRef

                // Try to resolve the token reference to an actual color value
                const finalColorValue = resolveTokenValue(currentTokenRef)

                // Skip tokens that couldn't be resolved to a valid color
                if (!finalColorValue) {
                  return null
                }

                let displayValue = currentTokenRef
                if (
                  typeof displayValue === 'string' &&
                  displayValue.startsWith('{') &&
                  displayValue.endsWith('}')
                ) {
                  displayValue = displayValue.slice(1, -1)
                }

                // Check if there's a corresponding contrast token
                const hasContrastToken = (semanticTokens as any)[colorName]?.contrast

                // Resolve contrast color if it exists
                const contrastColorValue = hasContrastToken
                  ? resolveTokenValue(
                    isDarkMode
                      ? (semanticTokens as any)[colorName].contrast.value._dark ||
                      (semanticTokens as any)[colorName].contrast.value.base
                      : (semanticTokens as any)[colorName].contrast.value.base,
                  )
                  : null

                return (
                  <VStack key={fullTokenName} gap={1} align="flex-start">
                    <Box
                      w="120px"
                      h="80px"
                      bg={finalColorValue}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="border"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                    >
                      {hasContrastToken && contrastColorValue && (
                        <Text
                          fontSize="xs"
                          fontWeight="bold"
                          color={contrastColorValue}
                          textAlign="center"
                        >
                          Aa
                        </Text>
                      )}
                    </Box>
                    <Box>
                      <Text fontSize="sm" fontWeight="medium" color={'text'}>
                        {fullTokenName}
                      </Text>
                      <Text fontSize="xs" color="text">
                        {displayValue}
                      </Text>
                      <Text fontSize="2xs" color="text" fontFamily="monospace" lineHeight="1.2">
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
