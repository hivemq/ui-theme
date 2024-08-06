import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@hivemq/ui-theme'
import { render } from 'safetest/react'
import { describe, expect, it } from 'safetest/vitest'

import { Texts } from '@/views/Texts'

// Whole App testing
describe('Texts', () => {
  it('Visual test all text variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Texts />
      </ChakraBaseProvider>
    ))

    expect(await page.screenshot()).toMatchImageSnapshot()
  })
})
