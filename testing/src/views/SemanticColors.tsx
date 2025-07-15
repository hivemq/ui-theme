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
import {Box, Heading, HStack, SimpleGrid, Text, VStack} from '@chakra-ui/react'

const semanticTokens = config.theme?.semanticTokens?.colors || {}

/**
 * A component that dynamically renders all semantic color tokens from the theme.
 */
export function SemanticTokens() {
  return (
    <Box p={{base: 4, md: 8}}>
      {Object.entries(semanticTokens).map(([groupName, tokens]) => (
        <Box key={groupName} as="section" mb={10}>
          <Heading as="h2" size="lg" mb={4} textTransform="capitalize" borderBottomWidth="2px" pb={2}>
            {groupName}
          </Heading>
          <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={6}>
            {Object.entries(tokens).map(([tokenName, tokenValue]) => {
              const lightValue = tokenValue.value?.base || tokenValue.value
              const darkValue = tokenValue.value?._dark || lightValue

              return (
                <Box key={tokenName} p={4} borderRadius="lg" borderWidth="1px" bg="chakra-body-bg" boxShadow="md">
                  <Text fontWeight="bold" mb={3} textAlign="center">
                    {tokenName}
                  </Text>
                  <HStack gap={4} align="stretch">
                    {/* Light Mode Swatch */}
                    <VStack flex="1" p={3} bg="white" borderRadius="md" borderWidth="1px" borderColor="gray.200">
                      <Text fontSize="sm" fontWeight="medium" alignSelf="start">
                        Light
                      </Text>
                      <Box w="full" h="50px" bg={lightValue} borderRadius="md"/>
                      <Text fontFamily="monospace" fontSize="xs" color="gray.600" pt={1}
                            title={lightValue}>
                        {lightValue}
                      </Text>
                    </VStack>
                    {/* Dark Mode Swatch */}
                    <VStack flex="1" p={3} bg="gray.800" borderRadius="md" borderWidth="1px" borderColor="gray.700">
                      <Text fontSize="sm" fontWeight="medium" color="white" alignSelf="start">
                        Dark
                      </Text>
                      <Box w="full" h="50px" bg={darkValue} borderRadius="md"/>
                      <Text fontFamily="monospace" fontSize="xs" color="gray.400" pt={1}
                            title={darkValue}>
                        {darkValue}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              )
            })}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  )
}
