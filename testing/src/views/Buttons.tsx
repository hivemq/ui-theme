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

import { Box, Button, HStack, Heading } from '@chakra-ui/react'

export function Buttons() {
  const variants = ['solid', 'subtle', 'surface', 'outline', 'ghost', 'plain'] as const
  const sizes = ['xs', 'sm', 'md', 'lg'] as const

  return (
    <>
      <HStack width="100%" gap={8} alignItems="start">
        {variants.map((variant) => {
          return (
            <Box key={variant}>
              <Heading as="h2" mb={2}>
                {variant}
              </Heading>
              {sizes.map((size) => {
                return (
                  <Box key={size} p={2}>
                    <Heading as="h3">{size}</Heading>
                    <HStack alignItems="start" mt={2}>
                      <Button variant={variant} size={size}>
                        Button
                      </Button>
                      <Button variant={variant} size={size} disabled>
                        Button
                      </Button>
                    </HStack>
                  </Box>
                )
              })}
            </Box>
          )
        })}
      </HStack>
    </>
  )
}
