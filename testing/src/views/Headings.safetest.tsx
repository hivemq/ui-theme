import { describe, it, expect } from 'safetest/vitest';
import { render } from 'safetest/react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from '@hivemq/ui-theme'

import { Headings } from './Headings';

// Whole App testing
describe('Headings', () => {
  it('Visual test all heading variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Headings />
      </ChakraBaseProvider>
    ));

    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});