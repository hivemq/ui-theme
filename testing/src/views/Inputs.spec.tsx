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
import { fieldTypes, Inputs, inputVariants } from './Inputs'

// The section holds two tables: input variants first, the other field types second
const variantsTable = () => within(screen.getAllByRole('table')[0])
const fieldTypesTable = () => within(screen.getAllByRole('table')[1])

describe('Inputs', () => {
  describe('Rendering', () => {
    it('should render the section heading', () => {
      render(<Inputs />)
      expect(screen.getByRole('heading', { name: 'Inputs' })).toBeInTheDocument()
    })

    it('should render three states for every variant', () => {
      render(<Inputs />)
      expect(variantsTable().getAllByRole('textbox')).toHaveLength(inputVariants.length * 3)
    })
  })

  describe('States', () => {
    it('should mark the error inputs as invalid with a message', () => {
      render(<Inputs />)
      const invalid = variantsTable()
        .getAllByRole('textbox')
        .filter((input) => input.getAttribute('aria-invalid') === 'true')
      expect(invalid).toHaveLength(inputVariants.length)
      expect(screen.getAllByText('Put # last: factory/line-3/#')).toHaveLength(inputVariants.length)
    })

    it('should disable the disabled inputs', () => {
      render(<Inputs />)
      const disabled = variantsTable()
        .getAllByRole('textbox')
        .filter((input) => (input as HTMLInputElement).disabled)
      expect(disabled).toHaveLength(inputVariants.length)
    })
  })

  describe('Field types', () => {
    it('should render every field type once enabled and once disabled', () => {
      render(<Inputs />)
      for (const field of fieldTypes) {
        expect(fieldTypesTable().getByText(field.name)).toBeInTheDocument()
      }
      expect(fieldTypesTable().getAllByLabelText('Script ID')).toHaveLength(2)
      expect(fieldTypesTable().getAllByLabelText('Description')).toHaveLength(2)
      expect(fieldTypesTable().getAllByLabelText('Schema type')).toHaveLength(2)
      expect(fieldTypesTable().getAllByRole('spinbutton')).toHaveLength(2)
      expect(fieldTypesTable().getAllByRole('combobox', { name: 'QoS' })).toHaveLength(2)
    })

    it('should disable the second example of every field type', () => {
      render(<Inputs />)
      expect(fieldTypesTable().getAllByLabelText('Script ID')[1]).toBeDisabled()
      expect(fieldTypesTable().getAllByLabelText('Description')[1]).toBeDisabled()
      expect(fieldTypesTable().getAllByLabelText('Schema type')[1]).toBeDisabled()
      expect(fieldTypesTable().getAllByRole('spinbutton')[1]).toBeDisabled()
    })

    it('should show the attached label next to its input', () => {
      render(<Inputs />)
      expect(fieldTypesTable().getAllByText('ID')).toHaveLength(2)
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
