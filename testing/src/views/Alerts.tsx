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

import { Box, Alert as ChakraAlert, Heading, HStack } from '@chakra-ui/react'

export function Alerts() {
  const variants = ['subtle', 'surface', 'outline', 'solid'] as const

  return (
    <HStack width="100%" gap={8} alignItems="start">
      {variants.map((variant) => {
        return (
          <Box key={variant} p={2}>
            <Heading as="h2" mb={2}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Heading>
            <ChakraAlert.Root
              status="error"
              // flexDirection="column"
              // alignItems="center"
              // justifyContent="center"
              // textAlign="center"
              variant={variant}
            >
              <ChakraAlert.Indicator />
              <ChakraAlert.Content>
                <ChakraAlert.Title mt={4} mb={1} mx={0} fontSize="lg">
                  {variant.charAt(0).toUpperCase() + variant.slice(1)} Alert
                </ChakraAlert.Title>
                <ChakraAlert.Description maxWidth="sm">
                  This is a {variant} alert.
                </ChakraAlert.Description>
              </ChakraAlert.Content>
            </ChakraAlert.Root>
          </Box>
        )
      })}
    </HStack>
  )
}
