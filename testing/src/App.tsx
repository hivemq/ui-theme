/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {Box, ChakraProvider, Tabs, useTabs} from '@chakra-ui/react';
import {system as theme} from './theme';
import {Colors} from './views/Colors.tsx';
import {SemanticTokens} from '~/views/SemanticColors.tsx';
import {ButtonVariations} from '~/views/ButtonVariations.tsx';
import {useState} from 'react';

export type ChildProps = {
  isDarkMode: boolean
}


function App() {
  // State to manage the current color mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const style: React.CSSProperties = {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    // Transition for a smoother background color change
    transition: 'background-color 0.2s ease-in-out',
    minHeight: '100vh',
  };

  const contentTabs = useTabs({
    defaultValue: 'color-tokens',
  });

  return (
    // The ChakraProvider provides the theme to all components
    <ChakraProvider value={theme}>
      {/* The data-theme attribute is what tells Chakra UI to switch its color mode.
        It will automatically apply the `_dark` styles from your theme config.
      */}
      <Box data-theme={isDarkMode ? 'dark' : 'light'} style={style} bg="bg.canvas">
        {/* Theme switcher tabs */}
        <Tabs.Root
          size={'lg'} variant={'enclosed'} defaultValue={'light'}
          onValueChange={(value) => setIsDarkMode(value.value === 'dark')}
        >
          <Tabs.List>
            <Tabs.Trigger value={'light'}>Light Mode</Tabs.Trigger>
            <Tabs.Trigger value={'dark'}>Dark Mode</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>

        {/* Content tabs */}
        <Tabs.RootProvider size={'lg'} value={contentTabs}>
          <Tabs.List>
            <Tabs.Trigger value={'color-tokens'}>Color Tokens</Tabs.Trigger>
            <Tabs.Trigger value={'semantic-tokens'}>Semantic Tokens</Tabs.Trigger>
            <Tabs.Trigger value={'buttons'}>Buttons</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value={'color-tokens'}>
            {/* The isDarkMode prop is passed down as requested */}
            <Colors/>
          </Tabs.Content>
          <Tabs.Content value={'semantic-tokens'}>
            <SemanticTokens isDarkMode={isDarkMode}/>
          </Tabs.Content>
          <Tabs.Content value={'buttons'}>
            <ButtonVariations/>
          </Tabs.Content>
        </Tabs.RootProvider>
      </Box>
    </ChakraProvider>
  );
}

export default App;
