import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@hivemq/ui-theme'
import { render } from 'safetest/react'
import { describe, expect, it } from 'safetest/vitest'

import { Alerts } from '@/views/Alerts'

// Whole App testing
describe('Alerts', () => {
  it('Visual test all alert variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Alerts />
      </ChakraBaseProvider>
    ))

    expect(await page.screenshot()).toMatchImageSnapshot()
  })
})
