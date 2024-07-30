import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@hivemq/ui-theme'
import { render } from 'safetest/react'
import { describe, expect, it } from 'safetest/vitest'

import { Headings } from '@/views/Headings'

// Whole App testing
describe('Headings', () => {
  it('Visual test all heading variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Headings />
      </ChakraBaseProvider>
    ))

    expect(await page.screenshot()).toMatchImageSnapshot()
  })
})
