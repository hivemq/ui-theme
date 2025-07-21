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

import {Box, ChakraProvider, Tabs, useTabs} from '@chakra-ui/react'
import {system as theme} from './theme'
import {Colors} from "./views/Colors.tsx";
import {SemanticTokens} from "~/views/SemanticColors.tsx";
import {ButtonVariations} from "~/views/ButtonVariations.tsx";

function App() {
  const style: React.CSSProperties = {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  }

  const tabs = useTabs({
    defaultValue: "color-tokens",
  })

  return (
    <ChakraProvider value={theme}>
      <Box style={style}>
        <Tabs.RootProvider size={'lg'} variant={'enclosed'} value={tabs}>
          <Tabs.List>
            <Tabs.Trigger value={'color-tokens'}>
              Color Tokens
            </Tabs.Trigger>
            <Tabs.Trigger value={'semantic-tokens'}>
              Semantic Tokens
            </Tabs.Trigger>
            <Tabs.Trigger value={'buttons'}>
              Buttons
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value={'color-tokens'}>
            <Colors/>
          </Tabs.Content>
          <Tabs.Content value={'semantic-tokens'}>
            <SemanticTokens/>
          </Tabs.Content>
          <Tabs.Content value={'buttons'}>
            <ButtonVariations/>
          </Tabs.Content>
        </Tabs.RootProvider>
      </Box>

    </ChakraProvider>
  )
}

export default App
