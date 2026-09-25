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

import { Box, Code, Grid, HStack, Stack, Text } from '@chakra-ui/react'
import { Section, Subheading } from '~/components/layout/Section'
import { Swatch } from '~/components/layout/Swatch'
import { ALPHA_RAMPS, buildUsageMap, HUE_RAMPS, primitiveValue, RAMP_STEPS } from '~/util/tokens'

const usage = buildUsageMap()

// Alpha overlays are drawn on the ground each one is meant for
const alphaGround = {
  black: 'gray.50',
  white: 'gray.950',
} as const

interface RampRowProps {
  name: string
  backgroundFor: (step: string) => string
  captionFor: (step: string) => string
}

function RampRow({ name, backgroundFor, captionFor }: RampRowProps) {
  return (
    <Grid
      templateColumns="72px repeat(11, minmax(0, 1fr))"
      gap={1.5}
      alignItems="start"
      role="group"
      aria-label={`${name} ramp`}
    >
      <Text fontFamily="mono" fontSize="sm" pt={3}>
        {name}
      </Text>
      {RAMP_STEPS.map((step) => (
        <Swatch
          key={step}
          token={`colors.${name}.${step}`}
          background={backgroundFor(step)}
          label={step}
          caption={captionFor(step)}
          usedBy={usage.get(`${name}.${step}`)}
        />
      ))}
    </Grid>
  )
}

/**
 * The primitive color ramps (tier 1).
 */
export function Primitives() {
  return (
    <Section
      id="primitives"
      title="Primitive ramps"
      description="Ten hue ramps, eleven steps each (50–950), plus alpha-white and alpha-black overlays. Grays lean warm, with a slight yellow cast, so they sit comfortably next to the brand yellow. A dot marks a step at least one semantic token uses; hover a swatch to see which."
    >
      <HStack gap={1.5} fontSize="caption" color="content.secondary">
        <Box boxSize={1.5} borderRadius="full" bg="brand.fg" aria-hidden="true" />
        <span>used by a semantic token</span>
      </HStack>
      <Box overflowX="auto">
        <Stack gap={3.5} minW="760px">
          {HUE_RAMPS.map((name) => (
            <RampRow
              key={name}
              name={name}
              backgroundFor={(step) => primitiveValue(`${name}.${step}`) ?? 'transparent'}
              captionFor={(step) => (primitiveValue(`${name}.${step}`) ?? '').replace('#', '')}
            />
          ))}
        </Stack>
      </Box>

      <Subheading>Alpha overlays</Subheading>
      <Text fontSize="caption" color="content.secondary">
        Black alphas are drawn on <Code size="sm">gray.50</Code>, white alphas on{' '}
        <Code size="sm">gray.950</Code>. <Code size="sm">bg.muted</Code> uses step 200 of each.
      </Text>
      <Box overflowX="auto">
        <Stack gap={3.5} minW="760px">
          {ALPHA_RAMPS.map((name) => {
            const ground = primitiveValue(alphaGround[name])
            return (
              <RampRow
                key={name}
                name={name}
                backgroundFor={(step) => {
                  const overlay = primitiveValue(`${name}.${step}`)
                  return `linear-gradient(${overlay}, ${overlay}), ${ground}`
                }}
                captionFor={(step) => {
                  const alpha = /([\d.]+)\)$/.exec(primitiveValue(`${name}.${step}`) ?? '')
                  return alpha ? `${Math.round(Number(alpha[1]) * 100)}%` : ''
                }}
              />
            )
          })}
        </Stack>
      </Box>
    </Section>
  )
}
