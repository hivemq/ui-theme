import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@hivemq/ui-theme'
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
