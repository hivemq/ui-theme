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

import { Field, Input, Table } from '@chakra-ui/react'
import { DataTable } from '~/components/layout/DataTable'
import { Section } from '~/components/layout/Section'

export const inputVariants = ['outline', 'subtle', 'flushed'] as const

/**
 * Input variants in their default, error and disabled states.
 */
export function Inputs() {
  return (
    <Section
      id="inputs"
      title="Inputs"
      description="Each variant in its default, error and disabled state."
    >
      <DataTable minW="760px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>variant</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
            <Table.ColumnHeader>Error</Table.ColumnHeader>
            <Table.ColumnHeader>Disabled</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {inputVariants.map((variant) => (
            <Table.Row key={variant}>
              <Table.Cell fontFamily="mono" verticalAlign="top">
                {variant}
              </Table.Cell>
              <Table.Cell verticalAlign="top">
                <Field.Root>
                  <Field.Label>Topic filter</Field.Label>
                  <Input variant={variant} placeholder="factory/+/temperature" />
                  <Field.HelperText>+ matches one level, # matches the rest.</Field.HelperText>
                </Field.Root>
              </Table.Cell>
              <Table.Cell verticalAlign="top">
                <Field.Root invalid>
                  <Field.Label>Topic filter</Field.Label>
                  <Input variant={variant} defaultValue="factory/#/temp" />
                  <Field.ErrorText>Put # last: factory/line-3/#</Field.ErrorText>
                </Field.Root>
              </Table.Cell>
              <Table.Cell verticalAlign="top">
                <Field.Root disabled>
                  <Field.Label>Client ID</Field.Label>
                  <Input variant={variant} defaultValue="hmq_edge_01" />
                  <Field.HelperText>Assigned by the broker.</Field.HelperText>
                </Field.Root>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </DataTable>
    </Section>
  )
}
