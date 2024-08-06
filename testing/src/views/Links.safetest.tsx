import { describe, it, expect } from 'safetest/vitest';
import { render } from 'safetest/react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from '@hivemq/ui-theme'

import { Links } from '@/views/Links';

// Whole App testing
describe('Links', () => {
  it('Visual test all link variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Links />
      </ChakraBaseProvider>
    ));

    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});