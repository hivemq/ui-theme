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
import { Inputs, inputVariants } from './Inputs'

describe('Inputs', () => {
  describe('Rendering', () => {
    it('should render the section heading', () => {
      render(<Inputs />)
      expect(screen.getByRole('heading', { name: 'Inputs' })).toBeInTheDocument()
    })

    it('should render three states for every variant', () => {
      render(<Inputs />)
      expect(screen.getAllByRole('textbox')).toHaveLength(inputVariants.length * 3)
    })
  })

  describe('States', () => {
    it('should mark the error inputs as invalid with a message', () => {
      render(<Inputs />)
      const invalid = screen
        .getAllByRole('textbox')
        .filter((input) => input.getAttribute('aria-invalid') === 'true')
      expect(invalid).toHaveLength(inputVariants.length)
      expect(screen.getAllByText('Put # last: factory/line-3/#')).toHaveLength(inputVariants.length)
    })

    it('should disable the disabled inputs', () => {
      render(<Inputs />)
      const disabled = screen
        .getAllByRole('textbox')
        .filter((input) => (input as HTMLInputElement).disabled)
      expect(disabled).toHaveLength(inputVariants.length)
    })
  })

  describe('Accessibility', () => {
    it('should label every input', () => {
      render(<Inputs />)
      expect(screen.getAllByLabelText('Topic filter')).toHaveLength(inputVariants.length * 2)
      expect(screen.getAllByLabelText('Client ID')).toHaveLength(inputVariants.length)
    })
  })
})
