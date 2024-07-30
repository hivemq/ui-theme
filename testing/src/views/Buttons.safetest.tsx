import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@hivemq/ui-theme'
import { render } from 'safetest/react'
import { describe, expect, it } from 'safetest/vitest'

import { Buttons } from '@/views/Buttons'

// Whole App testing
describe('Buttons', () => {
  it('Visual test all button variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Buttons />
      </ChakraBaseProvider>
    ))

    expect(await page.screenshot()).toMatchImageSnapshot()
  })
})
