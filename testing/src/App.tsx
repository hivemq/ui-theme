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

import { Box, ChakraBaseProvider, Heading } from '@chakra-ui/react'
import theme from '../../theme/src/main'

import { Alerts } from '@/views/Alerts.tsx'
import { Buttons } from '@/views/Buttons'
import { Colors } from '@/views/Colors'
import { Headings } from '@/views/Headings'
import { Links } from '@/views/Links.tsx'
import { SemanticColors } from '@/views/SemanticColors'
import { Texts } from '@/views/Texts'
import { ModePlayground } from './components/ModePlayground'

function App() {
  const style: React.CSSProperties = {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  }
  const floatingBoxStyle: React.CSSProperties = {
    position: 'fixed',
    top: 20,
    right: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem 1.5rem',
    borderWidth: 1,
    borderRadius: 8,
    width: 250,
  }

  return (
    <ChakraBaseProvider theme={theme}>
      <Box style={floatingBoxStyle} backgroundColor="background.bg-main-container">
        <ModePlayground />
      </Box>

      <Box style={style}>
        <Heading variant="h1">Colors</Heading>
        <Colors withText />

        <hr />

        <Heading variant="h1">Semantic Colors</Heading>
        <SemanticColors withText />

        <hr />

        <Heading variant="h1">Headings</Heading>
        <Headings />

        <hr />

        <Heading variant="h1">Texts</Heading>
        <Texts />

        <hr />

        <Heading variant="h1">Buttons</Heading>
        <Buttons />

        <hr />

        <Heading variant="h1"> Links</Heading>
        <Links />

        <hr />

        <Heading variant="h1"> Alerts</Heading>
        <Alerts />
      </Box>
    </ChakraBaseProvider>
  )
}

export default App
