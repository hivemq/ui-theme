import { theme } from '../../theme/src/main'
import { ChakraBaseProvider, Box } from '@chakra-ui/react'

import { Buttons } from './views/Buttons'
import { Headings } from './views/Headings'
import { Colors } from './views/Colors'

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Box p={8}>
        <Colors withText />
      </Box>
      <hr />
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
