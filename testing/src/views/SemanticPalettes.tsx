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

import { Box, Code, Grid, Table, Text, useClipboard } from '@chakra-ui/react'
import { DataTable } from '~/components/layout/DataTable'
import { Section } from '~/components/layout/Section'
import { hairline } from '~/components/layout/Swatch'
import {
  getSemanticToken,
  PALETTE_SLOTS,
  PALETTES,
  resolveSemantic,
  type SemanticToken,
} from '~/util/tokens'

// What each colorPalette slot is for, in the order the matrix shows them
export const slotUsage: Record<(typeof PALETTE_SLOTS)[number], string> = {
  contrast: 'Text and icons on a solid fill',
  fg: 'Colored text and icons on the page ground',
  faint: 'The lightest tint (status palettes only)',
  subtle: 'Tinted backgrounds, e.g. subtle badges and alerts',
  muted: 'Hover fill for subtle controls, and outline borders',
  emphasized: 'Stronger borders, e.g. around toasts',
  solid: 'Filled controls: solid buttons, checked checkboxes, toasts',
  focusRing: 'The focus outline',
}

// Diagonal hatching marks a reference that doesn't resolve to a primitive
const unresolvedPattern =
  'repeating-linear-gradient(135deg, transparent 0 4px, var(--chakra-colors-border-emphasized) 4px 5px)'

function ModeHalf({ token, mode }: { token: SemanticToken; mode: 'light' | 'dark' }) {
  const value = resolveSemantic(token, mode)
  return (
    <Box
      background={value ?? unresolvedPattern}
      title={value ? `${mode}: ${value}` : `${mode}: unresolved`}
    />
  )
}

function PaletteCell({ token }: { token: SemanticToken }) {
  const clipboard = useClipboard({ value: `colors.${token.name}`, timeout: 1500 })
  return (
    <Box>
      <Grid
        as="button"
        templateColumns="1fr 1fr"
        w="full"
        h="34px"
        borderRadius="sm"
        overflow="hidden"
        cursor="pointer"
        boxShadow={hairline}
        onClick={clipboard.copy}
        aria-label={`Copy colors.${token.name}`}
        _focusVisible={{
          outline: '2px solid',
          outlineColor: 'brand.focusRing',
          outlineOffset: '2px',
        }}
      >
        <ModeHalf token={token} mode="light" />
        <ModeHalf token={token} mode="dark" />
      </Grid>
      <Text fontFamily="mono" fontSize="2xs" color="content.secondary" mt={1} lineHeight="1.35">
        <Box as="span" display="block">
          {clipboard.copied ? 'Copied' : token.light}
        </Box>
        <Box as="span" display="block">
          {resolveSemantic(token, 'dark') ? token.dark : `${token.dark} (unresolved)`}
        </Box>
      </Text>
    </Box>
  )
}

/**
 * The seven semantic palettes and the slots Chakra recipes read through `colorPalette`.
 */
export function SemanticPalettes() {
  return (
    <Section
      id="palettes"
      title="Semantic palettes"
      description={
        <>
          Seven palettes, each exposing the slots that Chakra recipes read through{' '}
          <Code size="sm">colorPalette</Code>. Each cell shows the light value on the left and the
          dark value on the right, with the primitive each one points to underneath.
        </>
      }
    >
      <DataTable minW="900px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Palette</Table.ColumnHeader>
            {PALETTE_SLOTS.map((slot) => (
              <Table.ColumnHeader key={slot}>{slot}</Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {PALETTES.map((palette) => (
            <Table.Row key={palette}>
              <Table.Cell fontFamily="mono">{palette}</Table.Cell>
              {PALETTE_SLOTS.map((slot) => {
                const token = getSemanticToken(`${palette}.${slot}`)
                return (
                  <Table.Cell key={slot} verticalAlign="top">
                    {token ? (
                      <PaletteCell token={token} />
                    ) : (
                      <Box
                        h="34px"
                        display="grid"
                        placeItems="center"
                        borderWidth="1px"
                        borderStyle="dashed"
                        borderColor="border.emphasized"
                        borderRadius="sm"
                        color="content.tertiary"
                        aria-label="Not defined"
                      >
                        —
                      </Box>
                    )}
                  </Table.Cell>
                )
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </DataTable>
      <Grid
        as="dl"
        templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
        columnGap={8}
        rowGap={1.5}
        m={0}
        aria-label="What each slot is for"
      >
        {PALETTE_SLOTS.map((slot) => (
          <Grid key={slot} templateColumns="96px minmax(0, 1fr)" gap={3} alignItems="baseline">
            <Box as="dt">
              <Code size="sm">{slot}</Code>
            </Box>
            <Text as="dd" m={0} color="content.secondary">
              {slotUsage[slot]}
            </Text>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}
