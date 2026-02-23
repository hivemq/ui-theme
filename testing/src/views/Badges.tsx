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

import { Badge, Box, Heading, Table, Text } from '@chakra-ui/react'

const badgeVariants = ['solid', 'outline', 'subtle', 'surface', 'plain'] as const

const badgeSizes = ['xs', 'sm', 'md', 'lg'] as const

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

export function Badges() {
  return (
    <Box>
      {/* Section 2: Color Palettes × Variants */}
      {semanticColorPalettes.map((colorPalette) => (
        <Box key={colorPalette} as="section" mb={16}>
          <Heading as="h2" size="xl" mb={6} textTransform="capitalize">
            {colorPalette}
          </Heading>
          <Box borderWidth="1px" borderRadius="lg" overflowX="auto">
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Variant</Table.ColumnHeader>
                  {badgeSizes.map((size) => (
                    <Table.ColumnHeader key={size}>{size}</Table.ColumnHeader>
                  ))}
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {badgeVariants.map((variant) => (
                  <Table.Row key={variant}>
                    <Table.Cell>
                      <Text fontWeight="bold">{variant}</Text>
                    </Table.Cell>
                    {badgeSizes.map((size) => (
                      <Table.Cell key={size}>
                        <Badge colorPalette={colorPalette} variant={variant} size={size}>
                          Badge
                        </Badge>
                      </Table.Cell>
                    ))}
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
