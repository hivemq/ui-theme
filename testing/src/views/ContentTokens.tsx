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

import { Badge, Box, Code, Grid, HStack, Table, Text, Theme } from '@chakra-ui/react'
import { DataTable } from '~/components/layout/DataTable'
import { Section, Subheading } from '~/components/layout/Section'
import { hairline } from '~/components/layout/Swatch'
import {
  type Mode,
  referenceFor,
  resolveSemantic,
  type SemanticToken,
  semanticTokenList,
  tokensInGroup,
} from '~/util/tokens'

const contentTokens = tokensInGroup('content')

// Groups shown in the base table; palettes and chart tokens have their own sections
const baseGroups = ['bg', 'text', 'border']
const baseTokens = semanticTokenList.filter((token) => baseGroups.includes(token.group))
// Still shipped, so they're named on the page, but not shown alongside the tokens to use
export const deprecatedShellTokens = tokensInGroup('shell')

// Tokens meant as fills or for inverted grounds rather than text on bg.default
const nonTextNotes: Record<string, string> = {
  inverted: 'for bg.inverted',
  solid: 'fill, not text',
}

function ContentPanel({ mode }: { mode: Mode }) {
  return (
    <Theme
      appearance={mode}
      hasBackground={false}
      bg="bg.default"
      color="content.primary"
      borderWidth="1px"
      borderColor="border.emphasized"
      borderRadius="lg"
      px={4}
      pt={2}
      pb={3}
      aria-label={`${mode} mode content tokens`}
    >
      <Text
        fontSize="caption"
        fontWeight="medium"
        letterSpacing="wider"
        textTransform="uppercase"
        color="content.secondary"
        py={2}
      >
        {mode === 'light' ? 'Light · on gray.50' : 'Dark · on gray.950'}
      </Text>
      {contentTokens.map((token) => (
        <Grid
          key={token.name}
          templateColumns="36px 1fr auto"
          gap={2.5}
          alignItems="center"
          py={1.5}
          borderTopWidth="1px"
          borderColor="border"
        >
          <Text
            fontFamily="heading"
            fontWeight="bold"
            fontSize="xl"
            lineHeight="1"
            color={`content.${token.key}`}
          >
            Aa
          </Text>
          <Box>
            <Text fontFamily="mono" fontSize="sm">
              content.{token.key}
            </Text>
            <Text fontFamily="mono" fontSize="xs" color="content.secondary">
              {referenceFor(token, mode)} · {resolveSemantic(token, mode)}
            </Text>
          </Box>
          {nonTextNotes[token.key] && (
            <Text fontSize="caption" color="content.secondary">
              {nonTextNotes[token.key]}
            </Text>
          )}
        </Grid>
      ))}
    </Theme>
  )
}

function ModeChips({ token }: { token: SemanticToken }) {
  return (
    <HStack gap={1}>
      {(['light', 'dark'] as const).map((mode) => {
        const value = resolveSemantic(token, mode)
        const ground =
          mode === 'light' ? 'var(--chakra-colors-gray-50)' : 'var(--chakra-colors-gray-950)'
        return (
          <Box
            key={mode}
            boxSize={4.5}
            borderRadius="xs"
            boxShadow={hairline}
            background={`linear-gradient(${value}, ${value}), ${ground}`}
            title={`${mode}: ${value}`}
          />
        )
      })}
    </HStack>
  )
}

/**
 * Text colors in both modes, plus the base background, text and border tokens.
 */
export function ContentTokens() {
  return (
    <Section
      id="content"
      title="Content & surfaces"
      description={
        <>
          <Code size="sm">Text</Code> and <Code size="sm">Heading</Code> variants map to{' '}
          <Code size="sm">content.*</Code>. Each panel is fixed to one mode, whatever the page mode
          is, so both can be compared side by side.
        </>
      }
    >
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
        <ContentPanel mode="light" />
        <ContentPanel mode="dark" />
      </Grid>

      <Subheading>Base tokens</Subheading>
      <DataTable minW="480px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Token</Table.ColumnHeader>
            <Table.ColumnHeader>Light · Dark</Table.ColumnHeader>
            <Table.ColumnHeader>References</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {baseTokens.map((token) => (
            <Table.Row key={token.name}>
              <Table.Cell fontFamily="mono">{token.name}</Table.Cell>
              <Table.Cell>
                <ModeChips token={token} />
              </Table.Cell>
              <Table.Cell fontFamily="mono" fontSize="xs" color="content.secondary">
                {token.light} · {token.dark}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </DataTable>

      <Box
        borderWidth="1px"
        borderColor="border"
        borderRadius="md"
        px={4}
        py={3}
        data-testid="deprecated-shell-note"
      >
        <HStack gap={2} wrap="wrap" mb={1}>
          <Badge variant="subtle" colorPalette="warning">
            Deprecated
          </Badge>
          <Code size="sm">shell.*</Code>
          <Text as="span" color="content.secondary" fontFamily="mono" fontSize="xs">
            ({deprecatedShellTokens.map((token) => token.key).join(', ')})
          </Text>
        </HStack>
        <Text color="content.secondary">
          Legacy layout tokens, still shipped so existing apps keep working. Don't use them in new
          code; <Code size="sm">hivemq-theme-lint</Code> flags them. Replacements will come with a
          future theme release.
        </Text>
      </Box>
    </Section>
  )
}
