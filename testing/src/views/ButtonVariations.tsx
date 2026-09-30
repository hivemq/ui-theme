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

import { Button, Code, HStack, Table } from '@chakra-ui/react'
import { DataTable } from '~/components/layout/DataTable'
import { Section, Subheading } from '~/components/layout/Section'

// Only semantic color palettes - no primitive colors. 'default' is Chakra's gray palette.
export const semanticColorPalettes = [
  'default',
  'brand',
  'secondary',
  'success',
  'info',
  'danger',
  'warning',
  'highlight',
] as const

export const buttonVariants = ['solid', 'subtle', 'surface', 'outline', 'ghost', 'plain'] as const

export const buttonSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

export const paletteProp = (palette: (typeof semanticColorPalettes)[number]) =>
  palette === 'default' ? undefined : palette

/**
 * Every button variant for every semantic palette, plus sizes and states.
 */
export function ButtonVariations() {
  return (
    <Section
      id="buttons"
      title="Buttons"
      description={
        <>
          Six variants for each of the eight palettes. <Code size="sm">default</Code> is Chakra's
          gray palette, resolved through HiveMQ's warm grays.
        </>
      }
    >
      <DataTable minW="820px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>colorPalette</Table.ColumnHeader>
            {buttonVariants.map((variant) => (
              <Table.ColumnHeader key={variant}>{variant}</Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {semanticColorPalettes.map((palette) => (
            <Table.Row key={palette}>
              <Table.Cell fontFamily="mono">{palette}</Table.Cell>
              {buttonVariants.map((variant) => (
                <Table.Cell key={variant}>
                  <Button size="sm" colorPalette={paletteProp(palette)} variant={variant}>
                    Publish
                  </Button>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </DataTable>

      <Subheading>Sizes and states</Subheading>
      <HStack gap={2.5} wrap="wrap">
        {buttonSizes.map((size) => (
          <Button key={size} size={size} colorPalette="brand">
            {size}
          </Button>
        ))}
        <Button colorPalette="brand" loading loadingText="Deploying">
          Deploy
        </Button>
        <Button colorPalette="brand" disabled>
          Disabled
        </Button>
      </HStack>
    </Section>
  )
}
