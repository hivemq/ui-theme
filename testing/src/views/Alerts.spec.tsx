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
import { Alerts, alertExamples, alertVariants } from './Alerts'

describe('Alerts', () => {
  describe('Rendering', () => {
    it('should render the section heading', () => {
      render(<Alerts />)
      expect(screen.getByRole('heading', { name: 'Alerts' })).toBeInTheDocument()
    })

    it('should render one alert per status', () => {
      const { container } = render(<Alerts />)
      expect(container.querySelectorAll('.chakra-alert__root')).toHaveLength(alertExamples.length)
    })

    it('should render every alert title and description', () => {
      render(<Alerts />)
      for (const example of alertExamples) {
        expect(screen.getByText(example.title)).toBeInTheDocument()
        expect(screen.getByText(example.description)).toBeInTheDocument()
      }
    })
  })

  describe('Variant switch', () => {
    it('should offer every variant and start on subtle', () => {
      render(<Alerts />)
      for (const variant of alertVariants) {
        expect(screen.getByRole('radio', { name: variant })).toBeInTheDocument()
      }
      expect(screen.getByRole('radio', { name: 'subtle' })).toBeChecked()
    })

    it('should switch the variant', async () => {
      const { user, container } = render(<Alerts />)
      await user.click(screen.getByText('solid'))
      expect(screen.getByRole('radio', { name: 'solid' })).toBeChecked()
      expect(container.querySelectorAll('.chakra-alert__root')).toHaveLength(alertExamples.length)
    })
  })
})
