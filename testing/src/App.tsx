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

import {Box, ChakraProvider, Heading} from '@chakra-ui/react'
import {system as theme} from './theme'
import {Colors} from "./views/Colors.tsx";
import {SemanticTokens} from "~/views/SemanticColors.tsx";
import {SemanticButtons} from "~/views/SemanticButtons.tsx";

function App() {
  const style: React.CSSProperties = {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  }

  return (
    <ChakraProvider value={theme}>
      <Box style={style}>
        <Heading as="h1" fontSize={36}>Color Tokens</Heading>
        <Colors/>
        <hr/>
        <Heading as="h1" fontSize={36}>Semantic Token</Heading>
        <SemanticTokens/>
        <hr/>
        <Heading as="h1" fontSize={36}>Buttons</Heading>
        <SemanticButtons/>
      </Box>
    </ChakraProvider>
  )
}

export default App
