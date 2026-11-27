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

import {
  Code,
  createListCollection,
  Field,
  Group,
  Input,
  InputAddon,
  NativeSelect,
  NumberInput,
  Portal,
  Select,
  Table,
  Textarea,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { DataTable } from '~/components/layout/DataTable'
import { Section, Subheading } from '~/components/layout/Section'

export const inputVariants = ['outline', 'subtle', 'flushed'] as const

const qosLevels = createListCollection({
  items: [
    { label: 'At most once (0)', value: '0' },
    { label: 'At least once (1)', value: '1' },
    { label: 'Exactly once (2)', value: '2' },
  ],
})

const schemaTypes = ['JSON', 'Protobuf']

/**
 * The other form fields that share the input's fill (`bg.input`), each in its default `outline`
 * variant. Rendered once enabled and once disabled.
 */
export const fieldTypes: { name: string; render: (disabled: boolean) => ReactNode }[] = [
  {
    name: 'input + addon',
    render: (disabled) => (
      <Field.Root disabled={disabled}>
        <Field.Label>Script ID</Field.Label>
        <Group attached w="full">
          <InputAddon>ID</InputAddon>
          <Input placeholder="fahrenheit-to-celsius" />
        </Group>
      </Field.Root>
    ),
  },
  {
    name: 'textarea',
    render: (disabled) => (
      <Field.Root disabled={disabled}>
        <Field.Label>Description</Field.Label>
        <Textarea placeholder="Converts temperature readings" rows={2} />
      </Field.Root>
    ),
  },
  {
    name: 'native select',
    render: (disabled) => (
      <Field.Root disabled={disabled}>
        <Field.Label>Schema type</Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field>
            {schemaTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Field.Root>
    ),
  },
  {
    name: 'select',
    render: (disabled) => (
      <Select.Root collection={qosLevels} defaultValue={['1']} disabled={disabled}>
        <Select.HiddenSelect />
        <Select.Label>QoS</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a QoS level" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {qosLevels.items.map((level) => (
                <Select.Item item={level} key={level.value}>
                  {level.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    ),
  },
  {
    name: 'number input',
    render: (disabled) => (
      <Field.Root disabled={disabled}>
        <Field.Label>Keep alive (s)</Field.Label>
        <NumberInput.Root defaultValue="60" min={0} w="full">
          <NumberInput.Control />
          <NumberInput.Input />
        </NumberInput.Root>
      </Field.Root>
    ),
  },
]

/**
 * Input variants in their default, error and disabled states, followed by the other form fields
 * that share the input's fill.
 */
export function Inputs() {
  return (
    <Section
      id="inputs"
      title="Inputs"
      description={
        <>
          Each variant in its default, error and disabled state. Outline fields are filled with{' '}
          <Code size="sm">bg.input</Code>: white in light mode, one step lighter than the panel in
          dark mode. An attached label uses <Code size="sm">bg.inputAddon</Code> so it stays apart
          from its field.
        </>
      }
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

      <Subheading>Field types</Subheading>
      <DataTable minW="640px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>field</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
            <Table.ColumnHeader>Disabled</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fieldTypes.map((field) => (
            <Table.Row key={field.name}>
              <Table.Cell fontFamily="mono" verticalAlign="top">
                {field.name}
              </Table.Cell>
              <Table.Cell verticalAlign="top">{field.render(false)}</Table.Cell>
              <Table.Cell verticalAlign="top">{field.render(true)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </DataTable>
    </Section>
  )
}
