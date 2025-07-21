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

import {config} from '@hivemq/ui-theme'
import {Box, Flex, Heading, Text, VStack} from '@chakra-ui/react'

// Get the semantic token color definitions from the theme configuration.
const semanticTokens = config.theme?.semanticTokens?.colors || {}
const semanticTokenGroups = Object.keys(semanticTokens)

/**
 * A component that renders color swatches for each semantic color palette.
 */
export function SemanticTokens() {
  return (
    <Box>
      {semanticTokenGroups.map((colorName) => {
        const colorTokens = semanticTokens[colorName]

        // Ensure the token group is an object before trying to get its keys.
        if (typeof colorTokens !== 'object' || colorTokens === null) {
          return null
        }

        const tokenSuffixes = Object.keys(colorTokens)

        return (
          <Box key={colorName} as="section" mb={12}>
            <Heading as="h2" size="xl" mb={6} textTransform="capitalize">
              {colorName}
            </Heading>
            <Flex wrap="wrap" gap={6}>
              {tokenSuffixes.map((tokenSuffix) => {
                const fullTokenName = `${colorName}.${tokenSuffix}`
                // @ts-ignore
                //TODO Adapt this to light mode / dark mode
                const tokenValue = colorTokens[tokenSuffix].value.base

                let displayValue = tokenValue;
                if (typeof displayValue === 'string' && displayValue.startsWith('{') && displayValue.endsWith('}')) {
                  displayValue = displayValue.slice(1, -1);
                }

                return (
                  <VStack key={fullTokenName} gap={1} align="flex-start">
                    <Box
                      w="120px"
                      h="80px"
                      bg={fullTokenName}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="blackAlpha.200" // A subtle border to see light/white colors
                    />
                    <Box>
                      <Text fontSize="sm" fontWeight="medium">
                        {fullTokenName}
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        {displayValue}
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