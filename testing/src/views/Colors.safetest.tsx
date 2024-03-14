import { describe, it, expect } from 'safetest/vitest';
import { render } from 'safetest/react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from '@hivemq/ui-theme'

import { Colors } from './Colors';

// Whole App testing
describe('Colors', () => {
  it('Visual test all color variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Colors />
      </ChakraBaseProvider>
    ));

    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});