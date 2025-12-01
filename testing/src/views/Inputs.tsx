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

import { Box, Field, Input, Table, Text } from '@chakra-ui/react'

const inputVariants = ['outline', 'subtle', 'flushed'] as const

/**
 * A component that renders a matrix of input variants.
 * Shows different variants and states for the default input.
 */
export function Inputs() {
  return (
    <Box>
      <Box borderWidth="1px" borderRadius="lg" overflowX="auto">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Variant</Table.ColumnHeader>
              <Table.ColumnHeader>Default</Table.ColumnHeader>
              <Table.ColumnHeader>Error</Table.ColumnHeader>
              <Table.ColumnHeader>Disabled</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {inputVariants.map((variant) => (
              <Table.Row key={variant}>
                <Table.Cell>
                  <Text fontWeight="bold">{variant}</Text>
                </Table.Cell>
                {/* Default State */}
                <Table.Cell>
                  <Field.Root>
                    <Field.Label>Label</Field.Label>
                    <Input variant={variant} placeholder="Enter text..." />
                    <Field.HelperText>Helper text</Field.HelperText>
                  </Field.Root>
                </Table.Cell>
                {/* Error State */}
                <Table.Cell>
                  <Field.Root invalid>
                    <Field.Label>Label</Field.Label>
                    <Input variant={variant} placeholder="Enter text..." />
                    <Field.ErrorText>This field has an error</Field.ErrorText>
                  </Field.Root>
                </Table.Cell>
                {/* Disabled State */}
                <Table.Cell>
                  <Field.Root disabled>
                    <Field.Label>Label</Field.Label>
                    <Input variant={variant} placeholder="Disabled" disabled />
                    <Field.HelperText>Disabled input</Field.HelperText>
                  </Field.Root>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  )
}
