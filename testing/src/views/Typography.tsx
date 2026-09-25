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

import { Code, Grid, Heading, Stack, Table, Text } from '@chakra-ui/react'
import { DataTable } from '~/components/layout/DataTable'
import { Section, Subheading } from '~/components/layout/Section'

export const fontFamilies = [
  {
    role: 'Heading',
    token: 'heading',
    face: 'Raleway',
    sample: 'Broker cluster overview',
    props: { fontSize: '3xl', fontWeight: 'bold', lineHeight: '1.15' },
  },
  {
    role: 'Body',
    token: 'body',
    face: 'Roboto',
    sample:
      'Clients connect over MQTT 5 with TLS. Sessions persist for 24 hours after disconnect, and retained messages are replicated to every node.',
    props: { fontSize: 'md', maxW: '60ch' },
  },
  {
    role: 'Monospace',
    token: 'mono',
    face: 'IntelOne Mono',
    sample: 'factory/line-3/+/temperature · qos=1 · retain=false · client=edge-gw-07',
    props: { fontSize: 'md', overflowWrap: 'anywhere' },
  },
] as const

export const semanticFontSizes = [
  {
    token: 'caption',
    mapsTo: 'xs · 0.75rem · 12px',
    sample: 'Last seen 2 min ago',
    heading: false,
  },
  {
    token: 'body',
    mapsTo: 'sm · 0.875rem · 14px',
    sample: 'Subscriptions on this client use shared groups.',
    heading: false,
  },
  { token: 'subtitle', mapsTo: 'md · 1rem · 16px', sample: 'Session expiry', heading: false },
  { token: 'title', mapsTo: 'xl · 1.25rem · 20px', sample: 'Bridge configuration', heading: true },
  { token: 'header', mapsTo: '2xl · 1.5rem · 24px', sample: 'Data Hub policies', heading: true },
  { token: 'display', mapsTo: '4xl · 2.25rem · 36px', sample: 'Broker overview', heading: true },
] as const

// Text and Heading recipe variants and the content token each maps to (theme/src/config.ts)
export const textVariants = [
  { variant: 'default', token: 'primary', on: 'Text · Heading' },
  { variant: 'muted', token: 'secondary', on: 'Text · Heading' },
  { variant: 'subtle', token: 'tertiary', on: 'Text · Heading' },
  { variant: 'danger', token: 'danger', on: 'Text · Heading' },
  { variant: 'warning', token: 'warning', on: 'Text · Heading' },
  { variant: 'success', token: 'success', on: 'Text · Heading' },
  { variant: 'info', token: 'info', on: 'Text · Heading' },
  { variant: 'brand', token: 'brand', on: 'Heading' },
] as const

/**
 * Font families, the semantic size scale and the Text/Heading variants.
 */
export function Typography() {
  return (
    <Section
      id="type"
      title="Typography"
      description={
        <>
          Raleway for headings, Roboto for everything read, and a monospace face for topics, client
          IDs and payloads. Fonts aren't bundled with the theme; each app installs them through{' '}
          <Code size="sm">@fontsource</Code>.
        </>
      }
    >
      <Stack gap={0}>
        {fontFamilies.map((family) => (
          <Grid
            key={family.token}
            templateColumns={{ base: '1fr', md: '160px 1fr' }}
            gap={{ base: 1.5, md: 4 }}
            py={4}
            borderTopWidth="1px"
            borderColor="border"
            alignItems="baseline"
          >
            <Stack gap={0.5}>
              <Text fontWeight="medium">{family.role}</Text>
              <Text fontSize="caption" color="content.secondary">
                <Code size="sm">fonts.{family.token}</Code> · {family.face}
              </Text>
            </Stack>
            <Text fontFamily={family.token} {...family.props}>
              {family.sample}
            </Text>
          </Grid>
        ))}
      </Stack>

      <Subheading>Semantic sizes</Subheading>
      <DataTable minW="600px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Token</Table.ColumnHeader>
            <Table.ColumnHeader>Maps to</Table.ColumnHeader>
            <Table.ColumnHeader>Sample</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {semanticFontSizes.map((size) => (
            <Table.Row key={size.token}>
              <Table.Cell fontFamily="mono">{size.token}</Table.Cell>
              <Table.Cell fontFamily="mono" fontSize="xs" color="content.secondary">
                {size.mapsTo}
              </Table.Cell>
              <Table.Cell>
                {size.heading ? (
                  <Heading as="p" fontSize={size.token} fontWeight="bold" lineHeight="1.15">
                    {size.sample}
                  </Heading>
                ) : (
                  <Text fontSize={size.token}>{size.sample}</Text>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </DataTable>

      <Subheading>Text and Heading variants</Subheading>
      <DataTable minW="560px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>variant</Table.ColumnHeader>
            <Table.ColumnHeader>Token</Table.ColumnHeader>
            <Table.ColumnHeader>Sample</Table.ColumnHeader>
            <Table.ColumnHeader>Available on</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {textVariants.map((item) => (
            <Table.Row key={item.variant}>
              <Table.Cell fontFamily="mono">{item.variant}</Table.Cell>
              <Table.Cell fontFamily="mono" fontSize="xs" color="content.secondary">
                content.{item.token}
              </Table.Cell>
              <Table.Cell>
                <Heading as="p" fontSize="md" fontWeight="bold" color={`content.${item.token}`}>
                  Session queue at 82%
                </Heading>
              </Table.Cell>
              <Table.Cell fontSize="caption" color="content.secondary">
                {item.on}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </DataTable>
    </Section>
  )
}
