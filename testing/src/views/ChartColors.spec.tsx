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

import { describe, expect, it } from 'vitest'
import { render, screen, within } from '~/test/test-utils'
import { categoricalColors } from '~/util/tokens'
import { ChartColors } from './ChartColors'

describe('ChartColors', () => {
  describe('Rendering', () => {
    it('should render the single series line chart as an image with a description', () => {
      render(<ChartColors />)
      expect(
        screen.getByRole('img', { name: /line chart of hourly publish rate/i }),
      ).toBeInTheDocument()
    })

    it('should render the multi series bar chart as an image with a description', () => {
      render(<ChartColors />)
      expect(
        screen.getByRole('img', { name: /bar chart of publish rate per cluster/i }),
      ).toBeInTheDocument()
    })

    it('should label both charts as example data', () => {
      render(<ChartColors />)
      expect(screen.getAllByText('Example data')).toHaveLength(2)
    })

    it('should render every categorical color', () => {
      render(<ChartColors />)
      const swatches = screen.getAllByRole('button', { name: /^Copy colors\.categorical\./ })
      expect(swatches).toHaveLength(categoricalColors.length)
    })
  })

  describe('Single series line chart', () => {
    it('should stroke the line with chart.primary', () => {
      render(<ChartColors />)
      const chart = screen.getByRole('img', { name: /line chart/i })
      const line = chart.querySelector('path[data-series]')
      expect(line?.getAttribute('stroke')).toContain('chart-primary')
    })

    it('should mark exactly the peak with chart.selected', () => {
      render(<ChartColors />)
      const chart = screen.getByRole('img', { name: /line chart/i })
      const fills = [...chart.querySelectorAll('circle')].map((dot) => dot.getAttribute('fill'))
      expect(fills.filter((fill) => fill?.includes('chart-selected'))).toHaveLength(1)
      expect(fills.every((fill) => fill?.includes('chart-'))).toBe(true)
    })
  })

  describe('Multi series bar chart', () => {
    it('should fill each series with a distinct categorical color in fixed order', () => {
      render(<ChartColors />)
      const chart = screen.getByRole('img', { name: /bar chart/i })
      const fills = [...chart.querySelectorAll('rect')].map((bar) => bar.getAttribute('fill'))
      const distinct = [...new Set(fills)]
      expect(distinct).toEqual([
        'var(--chakra-colors-categorical-1)',
        'var(--chakra-colors-categorical-2)',
        'var(--chakra-colors-categorical-3)',
        'var(--chakra-colors-categorical-4)',
      ])
    })

    it('should list every series in a legend', () => {
      render(<ChartColors />)
      const legend = screen.getByRole('list', { name: /series/i })
      const items = within(legend).getAllByRole('listitem')
      expect(items.map((item) => item.textContent)).toEqual([
        'eu-central',
        'us-east',
        'ap-south',
        'eu-west',
      ])
    })
  })
})
