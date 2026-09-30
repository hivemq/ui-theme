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

import { Checkbox, Code, HStack, Table } from '@chakra-ui/react'
import { DataTable } from '~/components/layout/DataTable'
import { Section, Subheading } from '~/components/layout/Section'
import { paletteProp, semanticColorPalettes } from '~/views/ButtonVariations'

export const checkboxVariants = ['solid', 'outline', 'subtle'] as const
export const checkboxSizes = ['xs', 'sm', 'md', 'lg'] as const

type CheckedState = boolean | 'indeterminate'

export const checkboxStates: {
  label: string
  name: string
  checked: CheckedState
  disabled?: boolean
}[] = [
  { label: 'Unchecked', name: 'Clean start', checked: false },
  { label: 'Checked', name: 'Retain', checked: true },
  { label: 'Indeterminate', name: 'All topics', checked: 'indeterminate' },
  { label: 'Disabled', name: 'Persistent', checked: true, disabled: true },
]

/**
 * Checkbox variants, states and sizes.
 */
export function Checkboxes() {
  return (
    <Section
      id="checkboxes"
      title="Checkboxes"
      description={
        <>
          Checkboxes default to blue (<Code size="sm">blue.600</Code>), with a white control in
          light mode and <Code size="sm">gray.800</Code> in dark. Pass a{' '}
          <Code size="sm">colorPalette</Code> to use any semantic palette.
        </>
      }
    >
      <DataTable minW="680px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>variant</Table.ColumnHeader>
            {checkboxStates.map((state) => (
              <Table.ColumnHeader key={state.label}>{state.label}</Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {checkboxVariants.map((variant) => (
            <Table.Row key={variant}>
              <Table.Cell fontFamily="mono">{variant}</Table.Cell>
              {checkboxStates.map((state) => (
                <Table.Cell key={state.label}>
                  <Checkbox.Root
                    variant={variant}
                    defaultChecked={state.checked}
                    disabled={state.disabled}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{state.name}</Checkbox.Label>
                  </Checkbox.Root>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </DataTable>

      <Subheading>Color palettes</Subheading>
      <DataTable minW="680px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>colorPalette</Table.ColumnHeader>
            {checkboxStates.map((state) => (
              <Table.ColumnHeader key={state.label}>{state.label}</Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {semanticColorPalettes.map((palette) => (
            <Table.Row key={palette} data-testid={`checkbox-palette-${palette}`}>
              {/* Without a colorPalette prop the recipe's pinned blue applies, not Chakra's gray */}
              <Table.Cell fontFamily="mono">
                {palette === 'default' ? 'default (blue)' : palette}
              </Table.Cell>
              {checkboxStates.map((state) => (
                <Table.Cell key={state.label}>
                  <Checkbox.Root
                    colorPalette={paletteProp(palette)}
                    defaultChecked={state.checked}
                    disabled={state.disabled}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{state.name}</Checkbox.Label>
                  </Checkbox.Root>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </DataTable>

      <Subheading>Sizes</Subheading>
      <HStack gap={6} wrap="wrap">
        {checkboxSizes.map((size) => (
          <Checkbox.Root key={size} size={size} defaultChecked>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>{size}</Checkbox.Label>
          </Checkbox.Root>
        ))}
      </HStack>
    </Section>
  )
}
