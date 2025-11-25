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

import { Alert, Box, Heading, Table, Text } from '@chakra-ui/react'

const alertStatuses = ['info', 'warning', 'success', 'error'] as const

const alertVariants = ['subtle', 'surface', 'outline', 'solid'] as const

export function Alerts() {
  return (
    <Box>
      {alertStatuses.map((colorPalette) => (
        <Box key={colorPalette} as="section" mb={16}>
          <Heading as="h2" size="xl" mb={6} textTransform="capitalize">
            {colorPalette}
          </Heading>
          <Box borderWidth="1px" borderRadius="lg" overflowX="auto">
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Variant</Table.ColumnHeader>
                  <Table.ColumnHeader>Small</Table.ColumnHeader>
                  <Table.ColumnHeader>Medium</Table.ColumnHeader>
                  <Table.ColumnHeader>Large</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {alertVariants.map((variant) => (
                  <Table.Row key={variant}>
                    <Table.Cell>
                      <Text fontWeight="bold">{variant}</Text>
                    </Table.Cell>
                    {/* Small Size */}
                    <Table.Cell>
                      <Alert.Root colorPalette={colorPalette} variant={variant} size="sm">
                        <Alert.Indicator />
                        <Alert.Content>
                          <Alert.Title>Alert Title</Alert.Title>
                          <Alert.Description>This is a {colorPalette} alert.</Alert.Description>
                        </Alert.Content>
                      </Alert.Root>
                    </Table.Cell>
                    {/* Medium Size */}
                    <Table.Cell>
                      <Alert.Root colorPalette={colorPalette} variant={variant} size="md">
                        <Alert.Indicator />
                        <Alert.Content>
                          <Alert.Title>Alert Title</Alert.Title>
                          <Alert.Description>This is a {colorPalette} alert.</Alert.Description>
                        </Alert.Content>
                      </Alert.Root>
                    </Table.Cell>
                    {/* Large Size */}
                    <Table.Cell>
                      <Alert.Root colorPalette={colorPalette} variant={variant} size="lg">
                        <Alert.Indicator />
                        <Alert.Content>
                          <Alert.Title>Alert Title</Alert.Title>
                          <Alert.Description>This is a {colorPalette} alert.</Alert.Description>
                        </Alert.Content>
                      </Alert.Root>
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
