import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@hivemq/ui-theme'
import { render } from 'safetest/react'
import { describe, expect, it } from 'safetest/vitest'

import { Links } from '@/views/Links'

// Whole App testing
describe('Links', () => {
  it('Visual test all link variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Links />
      </ChakraBaseProvider>
    ))

    expect(await page.screenshot()).toMatchImageSnapshot()
  })
})
