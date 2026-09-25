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
import { render, screen } from '~/test/test-utils'
import { categoricalColors } from '~/util/tokens'
import { ChartColors } from './ChartColors'

describe('ChartColors', () => {
  describe('Rendering', () => {
    it('should render the example chart as an image with a description', () => {
      render(<ChartColors />)
      expect(screen.getByRole('img', { name: /hourly publish rate/i })).toBeInTheDocument()
    })

    it('should label the chart data as an example', () => {
      render(<ChartColors />)
      expect(screen.getByText('Example data')).toBeInTheDocument()
    })

    it('should render every categorical color', () => {
      render(<ChartColors />)
      const swatches = screen.getAllByRole('button', { name: /^Copy colors\.categorical\./ })
      expect(swatches).toHaveLength(categoricalColors.length)
    })
  })

  describe('Chart tokens', () => {
    it('should color bars with the chart tokens', () => {
      const { container } = render(<ChartColors />)
      const fills = [...container.querySelectorAll('rect')].map((rect) => rect.getAttribute('fill'))
      expect(fills.filter((fill) => fill?.includes('chart-selected'))).toHaveLength(1)
      expect(fills.every((fill) => fill?.includes('chart-'))).toBe(true)
    })
  })
})
