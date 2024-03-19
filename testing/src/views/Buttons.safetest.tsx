import { describe, it, expect } from 'safetest/vitest';
import { render } from 'safetest/react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from '@hivemq/ui-theme';

import { Buttons } from '@/views/Buttons.tsx';

// Whole App testing
describe('Buttons', () => {
  it('Visual test all button variants', async () => {
    const { page } = await render(() => (
      <ChakraBaseProvider theme={theme}>
        <Buttons />
      </ChakraBaseProvider>
    ));

    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});