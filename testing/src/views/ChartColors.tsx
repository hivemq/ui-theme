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

import { Box, Code, Flex, Grid, List, Stack, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { Section, Subheading } from '~/components/layout/Section'
import { Swatch } from '~/components/layout/Swatch'
import { categoricalColors } from '~/util/tokens'

const chart = { width: 640, height: 230, left: 44, right: 8, top: 20, bottom: 28, max: 15 }
const plotWidth = chart.width - chart.left - chart.right
const plotHeight = chart.height - chart.top - chart.bottom
const yTicks = [0, 5, 10, 15]

const y = (value: number) => chart.top + plotHeight - (value / chart.max) * plotHeight
const color = (token: string) => `var(--chakra-colors-${token.replace('.', '-')})`

function GridLines() {
  return (
    <>
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
    </>
  )
}

function XLabel({ x, children }: { x: number; children: ReactNode }) {
  return (
    <text
      x={x}
      y={chart.height - 8}
      textAnchor="middle"
      fontSize="11"
      fill={color('content.secondary')}
    >
      {children}
    </text>
  )
}

// Example data: PUBLISH messages per second (thousands), hourly from 06:00
const publishRate = [6.1, 6.8, 8.4, 11.2, 12.9, 13.6, 12.1, 14.2, 13.4, 12.2, 10.8, 9.3]
const firstHour = 6
const peakIndex = publishRate.indexOf(Math.max(...publishRate))
const lineBandWidth = plotWidth / publishRate.length
const lineX = (index: number) => chart.left + index * lineBandWidth + lineBandWidth / 2

function PublishRateLineChart() {
  const path = publishRate
    .map((value, index) => `${index === 0 ? 'M' : 'L'}${lineX(index)} ${y(value)}`)
    .join(' ')
  return (
    <svg
      viewBox={`0 0 ${chart.width} ${chart.height}`}
      width="100%"
      role="img"
      aria-label={`Line chart of hourly publish rate, peaking at ${publishRate[peakIndex]}k per second at ${firstHour + peakIndex}:00`}
      style={{ display: 'block', height: 'auto' }}
    >
      <GridLines />
      <path
        data-series="publish-rate"
        d={path}
        fill="none"
        stroke={color('chart.primary')}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {publishRate.map((value, index) => {
        const isPeak = index === peakIndex
        return (
          <g key={`${firstHour + index}`}>
            <circle
              cx={lineX(index)}
              cy={y(value)}
              r={isPeak ? 5 : 3.5}
              fill={color(isPeak ? 'chart.selected' : 'chart.primary')}
              stroke={color('bg')}
              strokeWidth="2"
            />
            <XLabel x={lineX(index)}>{String(firstHour + index).padStart(2, '0')}</XLabel>
            {isPeak && (
              <text
                x={lineX(index)}
                y={y(value) - 10}
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

// Example data: PUBLISH messages per second (thousands) per cluster, in two-hour buckets from 06:00
const clusters = [
  { name: 'eu-central', token: 'categorical.1', values: [6.4, 9.8, 13.1, 13.8, 11.5, 8.9] },
  { name: 'us-east', token: 'categorical.2', values: [3.1, 4.2, 6.9, 9.7, 12.4, 10.6] },
  { name: 'ap-south', token: 'categorical.3', values: [8.2, 7.1, 5.3, 4.0, 3.4, 5.8] },
  { name: 'eu-west', token: 'categorical.4', values: [4.5, 6.3, 8.0, 8.6, 7.2, 5.1] },
]
const buckets = ['06', '08', '10', '12', '14', '16']
const bucketWidth = plotWidth / buckets.length
const barGap = 2
const groupPadding = bucketWidth * 0.15
const barWidth = (bucketWidth - groupPadding * 2 - barGap * (clusters.length - 1)) / clusters.length

function ClusterBarChart() {
  return (
    <svg
      viewBox={`0 0 ${chart.width} ${chart.height}`}
      width="100%"
      role="img"
      aria-label={`Bar chart of publish rate per cluster in two-hour buckets, comparing ${clusters.map((cluster) => cluster.name).join(', ')}`}
      style={{ display: 'block', height: 'auto' }}
    >
      <GridLines />
      {buckets.map((bucket, bucketIndex) => {
        const groupX = chart.left + bucketIndex * bucketWidth + groupPadding
        return (
          <g key={bucket}>
            {clusters.map((cluster, clusterIndex) => {
              const value = cluster.values[bucketIndex]
              return (
                <rect
                  key={cluster.name}
                  x={groupX + clusterIndex * (barWidth + barGap)}
                  y={y(value)}
                  width={barWidth}
                  height={chart.top + plotHeight - y(value)}
                  rx="2"
                  fill={color(cluster.token)}
                />
              )
            })}
            <XLabel x={groupX + (bucketWidth - groupPadding * 2) / 2}>{bucket}</XLabel>
          </g>
        )
      })}
    </svg>
  )
}

function ClusterLegend() {
  return (
    <List.Root aria-label="Series" flexDirection="row" flexWrap="wrap" gap={4} listStyleType="none">
      {clusters.map((cluster) => (
        <List.Item key={cluster.name} display="flex" alignItems="center" gap={1.5}>
          <Box boxSize={2.5} borderRadius="xs" bg={cluster.token} />
          <Text fontSize="caption" color="content.secondary">
            {cluster.name}
          </Text>
        </List.Item>
      ))}
    </List.Root>
  )
}

interface ChartCardProps {
  title: string
  legend?: ReactNode
  caption: ReactNode
  children: ReactNode
}

function ChartCard({ title, legend, caption, children }: ChartCardProps) {
  return (
    <Stack gap={2} p={4} borderWidth="1px" borderColor="border.emphasized" borderRadius="lg">
      <Flex justify="space-between" wrap="wrap" gap={2}>
        <Text fontWeight="medium">{title}</Text>
        <Text fontSize="caption" color="content.secondary">
          Example data
        </Text>
      </Flex>
      {legend}
      {children}
      <Text fontSize="caption" color="content.secondary">
        {caption}
      </Text>
    </Stack>
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
          <Code size="sm">useToken('colors', ['chart.primary'])</Code>. A single series uses the{' '}
          <Code size="sm">chart</Code> tokens. Several series that carry no status meaning use the
          twelve categorical colors, in order.
        </>
      }
    >
      <Subheading>Single series</Subheading>
      <ChartCard
        title="PUBLISH messages / s, cluster eu-central"
        caption={
          <>
            The line uses <Code size="sm">chart.primary</Code>, the peak uses{' '}
            <Code size="sm">chart.selected</Code>, and the rules use{' '}
            <Code size="sm">chart.grid</Code>.
          </>
        }
      >
        <PublishRateLineChart />
      </ChartCard>

      <Subheading>Categorical</Subheading>
      <ChartCard
        title="PUBLISH messages / s, per cluster"
        legend={<ClusterLegend />}
        caption={
          <>
            Each cluster keeps its color from <Code size="sm">categorical.1</Code> onwards, in fixed
            order. Status colors stay reserved for state, so they are never used as series colors.
          </>
        }
      >
        <ClusterBarChart />
      </ChartCard>
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
