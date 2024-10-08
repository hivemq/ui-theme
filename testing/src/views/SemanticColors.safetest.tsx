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

import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from '@hivemq/ui-theme'
import { render } from 'safetest/react'
import { describe, expect, it } from 'safetest/vitest'

import { SemanticColors } from '@/views/SemanticColors'

// Whole App testing
describe('SemanticColors', () => {
  it('Visual test all semantic color variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <SemanticColors />
      </ChakraBaseProvider>
    ))

    expect(await page.screenshot()).toMatchImageSnapshot()
  })
})
