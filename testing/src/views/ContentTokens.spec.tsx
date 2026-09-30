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
import { tokensInGroup } from '~/util/tokens'
import { ContentTokens, deprecatedShellTokens } from './ContentTokens'

describe('ContentTokens', () => {
  const contentTokens = tokensInGroup('content')

  describe('Rendering', () => {
    it('should render a fixed light panel and a fixed dark panel', () => {
      render(<ContentTokens />)
      expect(screen.getByLabelText('light mode content tokens')).toHaveClass('light')
      expect(screen.getByLabelText('dark mode content tokens')).toHaveClass('dark')
    })

    it('should list every content token in both panels', () => {
      render(<ContentTokens />)
      for (const token of contentTokens) {
        expect(screen.getAllByText(`content.${token.key}`)).toHaveLength(2)
      }
    })
  })

  describe('Base tokens', () => {
    it('should list only the tokens to use: bg, text and border', () => {
      render(<ContentTokens />)
      const expected = ['bg', 'text', 'border'].flatMap((group) => tokensInGroup(group))
      const tables = screen.getAllByRole('table')
      const table = tables[tables.length - 1]
      expect(within(table).getAllByRole('row')).toHaveLength(expected.length + 1)
      expect(within(table).queryByText(/^shell\./)).not.toBeInTheDocument()
    })
  })

  describe('Deprecated tokens', () => {
    it('should name every shell token in one compact note', () => {
      render(<ContentTokens />)
      const note = screen.getByTestId('deprecated-shell-note')
      expect(within(note).getByText('Deprecated')).toBeInTheDocument()
      expect(deprecatedShellTokens).toHaveLength(tokensInGroup('shell').length)
      for (const token of deprecatedShellTokens) {
        expect(note).toHaveTextContent(token.key)
      }
    })

    it('should tell readers not to use them and what flags them', () => {
      render(<ContentTokens />)
      const note = screen.getByTestId('deprecated-shell-note')
      expect(note).toHaveTextContent("Don't use them in new code")
      expect(note).toHaveTextContent('hivemq-theme-lint')
    })
  })
})
