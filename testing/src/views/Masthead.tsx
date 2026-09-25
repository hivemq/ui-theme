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
  Box,
  Button,
  Code,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  Theme,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { HiveSwitch } from '~/components/hive/HiveSwitch'
import {
  getSemanticToken,
  HUE_RAMPS,
  primitiveValue,
  RAMP_STEPS,
  semanticTokenList,
  themeVersion,
} from '~/util/tokens'

const metaItems = [`@hivemq/ui-theme ${themeVersion}`, 'Chakra UI v3', 'Apache-2.0']

interface TierProps {
  label: string
  title: string
  note: ReactNode
  children: ReactNode
}

function Tier({ label, title, note, children }: TierProps) {
  return (
    <Stack
      gap={2.5}
      p={4}
      borderWidth="1px"
      borderColor="border.emphasized"
      borderRadius="lg"
      bg="bg.panel"
    >
      <Text fontSize="caption" color="content.secondary">
        {label}
      </Text>
      {children}
      <Text fontFamily="mono" fontSize="sm" fontWeight="medium">
        {title}
      </Text>
      <Text fontSize="caption" color="content.secondary">
        {note}
      </Text>
    </Stack>
  )
}

function Arrow() {
  return (
    <Flex
      align="center"
      justify="center"
      color="content.tertiary"
      fontSize="xl"
      aria-hidden="true"
      transform={{ base: 'rotate(90deg)', md: 'none' }}
    >
      →
    </Flex>
  )
}

/**
 * Page header: name, version, color mode switch and the three token tiers.
 */
export function Masthead() {
  const brandSolid = getSemanticToken('brand.solid')
  const primitiveCount = HUE_RAMPS.length * RAMP_STEPS.length

  return (
    <Stack as="header" gap={5} pt={12} pb={10}>
      <Flex justify="space-between" align="center" wrap="wrap" gap={3}>
        <Text
          fontSize="caption"
          fontWeight="medium"
          letterSpacing="wider"
          textTransform="uppercase"
          color="content.secondary"
        >
          Design system
        </Text>
        <HiveSwitch />
      </Flex>
      <Heading
        as="h1"
        fontSize={{ base: '4xl', md: '5xl' }}
        fontWeight="extrabold"
        lineHeight="1.05"
      >
        <Box as="span" boxShadow="inset 0 -0.3em 0 var(--chakra-colors-brand-solid)" px="2px">
          HiveMQ
        </Box>{' '}
        UI Theme
      </Heading>
      <HStack gap={2} wrap="wrap">
        {metaItems.map((item) => (
          <Code key={item} variant="outline" size="sm">
            {item}
          </Code>
        ))}
      </HStack>
      <Text fontSize="subtitle" color="content.secondary" maxW="68ch">
        The shared Chakra UI theme behind HiveMQ's web consoles: warm-gray neutrals, a honey-yellow
        brand, and one semantic layer that sets every color for light and dark mode. Everything on
        this page is read from the theme package. Click any swatch to copy its token path.
      </Text>

      <Grid
        templateColumns={{ base: '1fr', md: '1fr 28px 1fr 28px 1fr' }}
        gap={2}
        mt={2}
        aria-label="How a token becomes a component"
      >
        <Tier
          label="Tier 1 · Primitive"
          title="colors.yellow.300"
          note={`${primitiveValue('yellow.300')} · one of ${primitiveCount} ramp steps. Apps use semantic tokens instead; hivemq-theme-lint --strict flags primitives.`}
        >
          <Box h={14} borderRadius="md" background={primitiveValue('yellow.300') ?? undefined} />
        </Tier>
        <Arrow />
        <Tier
          label="Tier 2 · Semantic"
          title="brand.solid"
          note={`One of ${semanticTokenList.length} semantic tokens. Each has a light and a dark value.`}
        >
          <Grid templateColumns="1fr 1fr" gap={1.5} fontFamily="mono" fontSize="xs">
            {(['light', 'dark'] as const).map((mode) => (
              // Each box is forced into one mode, so brand.solid resolves to that mode's value
              <Theme
                key={mode}
                appearance={mode}
                hasBackground={false}
                bg="brand.solid"
                color="brand.contrast"
                p={2}
                h={14}
                borderRadius="md"
                data-testid={`brand-solid-${mode}`}
              >
                {mode}
                <br />
                {mode === 'light' ? brandSolid?.light : brandSolid?.dark}
              </Theme>
            ))}
          </Grid>
        </Tier>
        <Arrow />
        <Tier
          label="Tier 3 · Recipe"
          title={'<Button colorPalette="brand">'}
          note="Chakra recipes read colorPalette.*, so one palette name themes every variant."
        >
          <Box>
            <Button colorPalette="brand">Connect broker</Button>
          </Box>
        </Tier>
      </Grid>
    </Stack>
  )
}
