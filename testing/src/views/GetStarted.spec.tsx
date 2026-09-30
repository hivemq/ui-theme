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
import { GetStarted, REPOSITORY_URL, setupSteps } from './GetStarted'

describe('GetStarted', () => {
  describe('Rendering', () => {
    it('should render the section heading', () => {
      render(<GetStarted />)
      expect(screen.getByRole('heading', { name: 'Get started' })).toBeInTheDocument()
    })

    it('should render the setup steps as an ordered list', () => {
      render(<GetStarted />)
      const steps = within(screen.getByRole('list')).getAllByRole('listitem')
      expect(steps).toHaveLength(setupSteps.length)
      setupSteps.forEach((step, index) => {
        expect(steps[index]).toHaveTextContent(step.title)
      })
    })

    it('should show every code block with a copy button', () => {
      render(<GetStarted />)
      const blocks = setupSteps.flatMap((step) => step.code)
      for (const code of blocks) {
        expect(screen.getByText(code, { normalizer: (text) => text })).toBeInTheDocument()
      }
      expect(screen.getAllByRole('button', { name: /copy/i })).toHaveLength(blocks.length)
    })
  })

  // Everything the README documents for consumers, updated where it predates Chakra UI v3
  describe('README parity', () => {
    const allCode = setupSteps.flatMap((step) => step.code).join('\n')

    it('should configure the registry and the auth token in .npmrc', () => {
      expect(allCode).toContain('@hivemq:registry=https://npm.pkg.github.com')
      // biome-ignore lint/suspicious/noTemplateCurlyInString: npm and pnpm expand ${NPM_TOKEN} from the environment in .npmrc
      expect(allCode).toContain('//npm.pkg.github.com/:_authToken=${NPM_TOKEN}')
    })

    it('should install only the peers Chakra UI v3 actually needs', () => {
      expect(allCode).toContain('pnpm add @hivemq/ui-theme @chakra-ui/react @emotion/react')
      expect(allCode).not.toContain('framer-motion')
      expect(allCode).not.toContain('@emotion/styled')
    })

    it('should generate types with the v3 command, including as a postinstall script', () => {
      expect(allCode).toContain('chakra typegen ./src/theme.ts')
      expect(allCode).toContain('"postinstall": "chakra typegen ./src/theme.ts"')
      expect(allCode).not.toContain('chakra-cli tokens')
    })

    it('should import every font weight the README lists', () => {
      for (const weight of [100, 300, 400, 500, 700, 900]) {
        expect(allCode).toContain(`@fontsource/roboto/${weight}.css`)
      }
      for (const weight of [100, 200, 300, 400, 500, 600, 700, 800, 900]) {
        expect(allCode).toContain(`@fontsource/raleway/${weight}.css`)
      }
      for (const weight of [400, 500, 700]) {
        expect(allCode).toContain(`@fontsource/intel-one-mono/${weight}.css`)
      }
    })

    it('should include the theme linter', () => {
      expect(allCode).toContain('npx hivemq-theme-lint src')
    })

    it('should point to the troubleshooting guide for 401 errors', () => {
      render(<GetStarted />)
      expect(screen.getByRole('link', { name: 'troubleshooting' })).toHaveAttribute(
        'href',
        `${REPOSITORY_URL}#unauthorized-error`,
      )
    })
  })

  describe('Links', () => {
    it('should link to the repository and its README', () => {
      render(<GetStarted />)
      expect(screen.getByRole('link', { name: /view on github/i })).toHaveAttribute(
        'href',
        REPOSITORY_URL,
      )
      expect(screen.getByRole('link', { name: /read the readme/i })).toHaveAttribute(
        'href',
        `${REPOSITORY_URL}#readme`,
      )
    })

    it('should open external links safely in a new tab', () => {
      render(<GetStarted />)
      for (const link of screen.getAllByRole('link')) {
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noreferrer')
      }
    })

    it('should explain that GitHub Packages needs a token', () => {
      render(<GetStarted />)
      expect(screen.getByText('read:packages')).toBeInTheDocument()
    })
  })
})
