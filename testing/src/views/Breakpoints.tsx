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

import { Box, Code, Grid, Stack, Text } from '@chakra-ui/react'
import { config } from '@hivemq/ui-theme'
import { Section } from '~/components/layout/Section'
import { subtleFill } from '~/components/layout/Swatch'

const ROOT_FONT_SIZE = 16

export const breakpoints = Object.entries(config.theme?.breakpoints ?? {}).map(([name, value]) => ({
  name,
  rem: value,
  px: Number.parseFloat(value) * ROOT_FONT_SIZE,
}))

const axisMax = Math.max(...breakpoints.map((breakpoint) => breakpoint.px))
const axisTicks = [0, 0.25, 0.5, 0.75, 1].map((fraction) => Math.round(axisMax * fraction))
const percent = (px: number) => `${(px / axisMax) * 100}%`

const labelColumn = { base: '112px 1fr', md: '160px 1fr' }

/**
 * The theme's breakpoints as minimum-width ranges.
 */
export function Breakpoints() {
  return (
    <Section
      id="breakpoints"
      title="Breakpoints"
      description={
        <>
          Mobile-first minimum widths, as set in the theme config. <Code size="sm">sm</Code> starts
          at 320px rather than Chakra's default 480px, and <Code size="sm">3xl</Code> adds a tier
          for very wide screens.
        </>
      }
    >
      <Stack gap={2}>
        {breakpoints.map((breakpoint) => (
          <Grid
            key={breakpoint.name}
            templateColumns={labelColumn}
            gap={3}
            alignItems="center"
            data-testid="breakpoint"
          >
            <Text fontFamily="mono" fontSize="sm">
              {breakpoint.name}{' '}
              <Box as="span" color="content.secondary">
                {breakpoint.rem} · {breakpoint.px}px
              </Box>
            </Text>
            <Box h={4.5} bg={subtleFill} borderRadius="xs" position="relative">
              <Box
                position="absolute"
                top={0}
                bottom={0}
                right={0}
                left={percent(breakpoint.px)}
                bg="info.muted"
                borderLeftWidth="2px"
                borderColor="info.solid"
                borderEndRadius="xs"
              />
            </Box>
          </Grid>
        ))}
        <Grid templateColumns={labelColumn} gap={3} aria-hidden="true">
          <Box />
          <Box
            position="relative"
            h={4.5}
            fontFamily="mono"
            fontSize="xs"
            color="content.secondary"
          >
            {axisTicks.map((tick, index) => (
              <Text
                as="span"
                key={tick}
                position="absolute"
                left={percent(tick)}
                transform={
                  index === 0
                    ? undefined
                    : index === axisTicks.length - 1
                      ? 'translateX(-100%)'
                      : 'translateX(-50%)'
                }
              >
                {tick}
              </Text>
            ))}
          </Box>
        </Grid>
      </Stack>
    </Section>
  )
}
