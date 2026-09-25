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

import { Box, Code, Flex, Grid, Stack, Text } from '@chakra-ui/react'
import { Section, Subheading } from '~/components/layout/Section'
import { Swatch } from '~/components/layout/Swatch'
import { categoricalColors } from '~/util/tokens'

// Example data: PUBLISH messages per second (thousands), hourly from 06:00
const publishRate = [6.1, 6.8, 8.4, 11.2, 12.9, 13.6, 12.1, 14.2, 13.4, 12.2, 10.8, 9.3]
const firstHour = 6
const yTicks = [0, 5, 10, 15]

const chart = { width: 640, height: 230, left: 44, right: 8, top: 20, bottom: 28, max: 15 }
const plotWidth = chart.width - chart.left - chart.right
const plotHeight = chart.height - chart.top - chart.bottom
const bandWidth = plotWidth / publishRate.length
const peakIndex = publishRate.indexOf(Math.max(...publishRate))

const y = (value: number) => chart.top + plotHeight - (value / chart.max) * plotHeight
const color = (token: string) => `var(--chakra-colors-${token.replace('.', '-')})`

function PublishRateChart() {
  return (
    <svg
      viewBox={`0 0 ${chart.width} ${chart.height}`}
      width="100%"
      role="img"
      aria-label={`Bar chart of hourly publish rate, peaking at ${publishRate[peakIndex]}k per second at ${firstHour + peakIndex}:00`}
      style={{ display: 'block', height: 'auto' }}
    >
      {yTicks.map((tick) => (
        <g key={tick}>
          <line
            x1={chart.left}
            x2={chart.width - chart.right}
            y1={y(tick)}
            y2={y(tick)}
            stroke={color('chart.grid')}
          />
          <text
            x={chart.left - 8}
            y={y(tick) + 4}
            textAnchor="end"
            fontSize="11"
            fill={color('content.secondary')}
          >
            {tick === 0 ? '0' : `${tick}k`}
          </text>
        </g>
      ))}
      {publishRate.map((value, index) => {
        const x = chart.left + index * bandWidth + bandWidth * 0.2
        const barWidth = bandWidth * 0.6
        const isPeak = index === peakIndex
        return (
          <g key={`${firstHour + index}`}>
            <rect
              x={x}
              y={y(value)}
              width={barWidth}
              height={chart.top + plotHeight - y(value)}
              rx="2"
              fill={color(isPeak ? 'chart.selected' : 'chart.primary')}
            />
            <text
              x={x + barWidth / 2}
              y={chart.height - 8}
              textAnchor="middle"
              fontSize="11"
              fill={color('content.secondary')}
            >
              {String(firstHour + index).padStart(2, '0')}
            </text>
            {isPeak && (
              <text
                x={x + barWidth / 2}
                y={y(value) - 6}
                textAnchor="middle"
                fontSize="12"
                fontWeight="500"
                fill={color('content.primary')}
              >
                {value}k
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

/**
 * Chart tokens in use, plus the categorical series colors.
 */
export function ChartColors() {
  return (
    <Section
      id="charts"
      title="Chart colors"
      description={
        <>
          Chart libraries like Recharts need raw values, so read these with{' '}
          <Code size="sm">useToken('colors', ['chart.primary'])</Code>. The twelve categorical
          colors are for series that carry no status meaning.
        </>
      }
    >
      <Stack gap={2} p={4} borderWidth="1px" borderColor="border.emphasized" borderRadius="lg">
        <Flex justify="space-between" wrap="wrap" gap={2}>
          <Text fontWeight="medium">PUBLISH messages / s, cluster eu-central</Text>
          <Text fontSize="caption" color="content.secondary">
            Example data
          </Text>
        </Flex>
        <PublishRateChart />
        <Text fontSize="caption" color="content.secondary">
          Bars use <Code size="sm">chart.primary</Code>, the peak uses{' '}
          <Code size="sm">chart.selected</Code>, and the rules use <Code size="sm">chart.grid</Code>
          .
        </Text>
      </Stack>

      <Subheading>Categorical</Subheading>
      <Box overflowX="auto">
        <Grid templateColumns="repeat(12, minmax(0, 1fr))" gap={1.5} minW="640px">
          {categoricalColors.map(({ name, value }) => (
            <Swatch
              key={name}
              token={`colors.${name}`}
              background={value}
              label={name.replace('categorical.', '')}
              caption={value.replace('#', '')}
            />
          ))}
        </Grid>
      </Box>
    </Section>
  )
}
