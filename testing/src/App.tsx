import * as React from 'react'

import { theme } from '@hivemq/ui-theme'
import { ChakraBaseProvider, Box } from '@chakra-ui/react'

import { Buttons } from './views/Buttons'
import { Headings } from './views/headings'

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Box p={8}>
        <Headings />
      </Box>
      <hr />
      <Box p={8}>
        <Buttons />
      </Box>
      <hr />
    </ChakraBaseProvider>
  )
}

export default App
