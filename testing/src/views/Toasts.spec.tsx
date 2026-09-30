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

import { describe, expect, it, vi } from 'vitest'
import { toaster } from '~/components/ui/toaster'
import { render, screen } from '~/test/test-utils'
import { Toasts, toastExamples } from './Toasts'

describe('Toasts', () => {
  describe('Rendering', () => {
    it('should render the section heading', () => {
      render(<Toasts />)
      expect(screen.getByRole('heading', { name: 'Toasts' })).toBeInTheDocument()
    })

    it('should render a preview for every toast type', () => {
      render(<Toasts />)
      expect(screen.getAllByTestId('toast-preview')).toHaveLength(toastExamples.length)
      for (const example of toastExamples) {
        expect(screen.getByText(example.title)).toBeInTheDocument()
      }
    })
  })

  describe('Interaction', () => {
    it('should fire a real toast for every type', async () => {
      const create = vi.spyOn(toaster, 'create')
      const { user } = render(<Toasts />)
      for (const example of toastExamples) {
        await user.click(screen.getByRole('button', { name: `Show ${example.type} toast` }))
        expect(create).toHaveBeenLastCalledWith(
          expect.objectContaining({ type: example.type, title: example.title }),
        )
      }
      expect(create).toHaveBeenCalledTimes(toastExamples.length)
      create.mockRestore()
    })
  })
})
