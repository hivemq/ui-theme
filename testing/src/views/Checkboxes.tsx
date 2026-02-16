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

import { Box, Checkbox, Heading, Table, Text } from '@chakra-ui/react'

const checkboxVariants = ['solid', 'outline', 'subtle'] as const
const checkboxSizes = ['xs', 'sm', 'md', 'lg'] as const

/**
 * A component that renders a matrix of checkbox variants and sizes.
 * Shows different variants, sizes, and states for the themed checkbox.
 */
export function Checkboxes() {
  return (
    <Box>
      {/* Variants × States matrix */}
      <Box as="section" mb={16}>
        <Heading as="h2" size="xl" mb={6}>
          Variants
        </Heading>
        <Box borderWidth="1px" borderRadius="lg" overflowX="auto">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Variant</Table.ColumnHeader>
                <Table.ColumnHeader>Unchecked</Table.ColumnHeader>
                <Table.ColumnHeader>Checked</Table.ColumnHeader>
                <Table.ColumnHeader>Indeterminate</Table.ColumnHeader>
                <Table.ColumnHeader>Disabled</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {checkboxVariants.map((variant) => (
                <Table.Row key={variant}>
                  <Table.Cell>
                    <Text fontWeight="bold">{variant}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox.Root variant={variant}>
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label>Label</Checkbox.Label>
                    </Checkbox.Root>
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox.Root variant={variant} defaultChecked>
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label>Label</Checkbox.Label>
                    </Checkbox.Root>
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox.Root variant={variant} checked="indeterminate">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label>Label</Checkbox.Label>
                    </Checkbox.Root>
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox.Root variant={variant} disabled defaultChecked>
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label>Label</Checkbox.Label>
                    </Checkbox.Root>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>

      {/* Sizes */}
      <Box as="section" mb={16}>
        <Heading as="h2" size="xl" mb={6}>
          Sizes
        </Heading>
        <Box borderWidth="1px" borderRadius="lg" overflowX="auto">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Size</Table.ColumnHeader>
                <Table.ColumnHeader>Unchecked</Table.ColumnHeader>
                <Table.ColumnHeader>Checked</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {checkboxSizes.map((size) => (
                <Table.Row key={size}>
                  <Table.Cell>
                    <Text fontWeight="bold">{size}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox.Root size={size}>
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label>Label</Checkbox.Label>
                    </Checkbox.Root>
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox.Root size={size} defaultChecked>
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label>Label</Checkbox.Label>
                    </Checkbox.Root>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>
    </Box>
  )
}
