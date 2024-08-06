import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@hivemq/ui-theme'
import { render } from 'safetest/react'
import { describe, expect, it } from 'safetest/vitest'

import { Colors } from '@/views/Colors.tsx'

// Whole App testing
describe('Colors', () => {
  it('Visual test all color variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Colors />
      </ChakraBaseProvider>
    ))

    expect(await page.screenshot()).toMatchImageSnapshot()
  })
})
