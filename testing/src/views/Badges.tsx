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

import { Badge, Table } from '@chakra-ui/react'
import { DataTable } from '~/components/layout/DataTable'
import { Section } from '~/components/layout/Section'
import { paletteProp, semanticColorPalettes } from '~/views/ButtonVariations'

export const badgeVariants = ['solid', 'subtle', 'surface', 'outline', 'plain'] as const

// Example status labels: pick the palette for its meaning, not its hue
export const badgeLabels: Record<(typeof semanticColorPalettes)[number], string> = {
  default: 'Idle',
  brand: 'Enterprise',
  secondary: 'Draft',
  success: 'Connected',
  info: 'Retained',
  danger: 'Offline',
  warning: 'Degraded',
  highlight: 'Beta',
}

/**
 * Status badges for every semantic palette and variant.
 */
export function Badges() {
  return (
    <Section
      id="badges"
      title="Badges"
      description="Status labels for clients, sessions and extensions. Pick the palette for its meaning, not its hue."
    >
      <DataTable minW="620px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>colorPalette</Table.ColumnHeader>
            {badgeVariants.map((variant) => (
              <Table.ColumnHeader key={variant}>{variant}</Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {semanticColorPalettes.map((palette) => (
            <Table.Row key={palette}>
              <Table.Cell fontFamily="mono">{palette}</Table.Cell>
              {badgeVariants.map((variant) => (
                <Table.Cell key={variant}>
                  <Badge colorPalette={paletteProp(palette)} variant={variant}>
                    {badgeLabels[palette]}
                  </Badge>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </DataTable>
    </Section>
  )
}
