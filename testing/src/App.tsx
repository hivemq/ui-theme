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

import {Box, Tabs, useTabs} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import {ButtonVariations} from '~/views/ButtonVariations.tsx'
import {SemanticTokens} from '~/views/SemanticColors.tsx'
import {Colors} from './views/Colors.tsx'

export type ChildProps = {
  isDarkMode: boolean
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Apply theme to document root for global CSS to work
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const style: React.CSSProperties = {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    transition: 'background-color 0.2s ease-in-out',
    minHeight: '100vh',
  }

  const contentTabs = useTabs({
    defaultValue: 'color-tokens',
  })

  return (
    <Box style={style} bg="bg">
      {/* Theme switcher tabs */}
      <Box
        position="sticky"
        top="0"
        zIndex={999} // Use a theme value for z-index
        bg="bg"
        py={4}
      >
        <Tabs.Root
          size={'lg'}
          variant={'enclosed'}
          value={isDarkMode ? 'dark' : 'light'}
          onValueChange={(e) => setIsDarkMode(e.value === 'dark')}
        >
          <Tabs.List>
            <Tabs.Trigger color={'text'} value={'light'}>
              Light Mode
            </Tabs.Trigger>
            <Tabs.Trigger color={'text'} value={'dark'}>
              Dark Mode
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Box>

      {/* Content tabs */}
      <Tabs.RootProvider size={'lg'} value={contentTabs}>
        <Tabs.List>
          <Tabs.Trigger value={'color-tokens'}>Color Tokens</Tabs.Trigger>
          <Tabs.Trigger value={'semantic-tokens'}>Semantic Tokens</Tabs.Trigger>
          <Tabs.Trigger value={'buttons'}>Buttons</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={'color-tokens'}>
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
  )
}

export default App
