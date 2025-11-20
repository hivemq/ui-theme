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

import { Box, Button, type ConditionalValue, Heading, Table, Text } from '@chakra-ui/react'

// Only semantic color palettes - no primitive colors
const semanticColorPalettes = [
  'default',
  'brand',
  'secondary',
  'success',
  'info',
  'danger',
  'warning',
  'highlight',
] as const

const buttonVariants: ConditionalValue<
  'default' | 'outline' | 'solid' | 'ghost' | 'subtle' | 'surface' | 'plain'
>[] = ['default', 'solid', 'outline', 'ghost', 'subtle', 'surface', 'plain']

/**
 * A component that renders a matrix of button styles for each semantic color.
 */
export function ButtonVariations() {
  return (
    <Box>
      {semanticColorPalettes.map((colorName) => (
        <Box key={colorName} as="section" mb={16}>
          <Heading as="h2" size="xl" mb={6} textTransform="capitalize">
            {colorName}
          </Heading>
          <Box borderWidth="1px" borderRadius="lg" overflowX="auto">
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Variant</Table.ColumnHeader>
                  <Table.ColumnHeader>Default</Table.ColumnHeader>
                  <Table.ColumnHeader>Loading</Table.ColumnHeader>
                  <Table.ColumnHeader>Disabled</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {buttonVariants.map((variant) => (
                  <Table.Row key={variant.toString()}>
                    <Table.Cell>
                      <Text fontWeight="bold">{variant.toString()}</Text>
                    </Table.Cell>
                    {/* Default State */}
                    <Table.Cell>
                      <Button colorPalette={colorName} variant={variant}>
                        Button
                      </Button>
                    </Table.Cell>
                    {/* Loading State */}
                    <Table.Cell>
                      <Button colorPalette={colorName} variant={variant} loading>
                        Button
                      </Button>
                    </Table.Cell>
                    {/* Disabled State */}
                    <Table.Cell>
                      <Button colorPalette={colorName} variant={variant} disabled>
                        Button
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
