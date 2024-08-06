import { describe, it, expect } from 'safetest/vitest';
import { render } from 'safetest/react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from '@hivemq/ui-theme'

import { Texts } from '@/views/Texts';

// Whole App testing
describe('Texts', () => {
  it('Visual test all text variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Texts />
      </ChakraBaseProvider>
    ));

    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});