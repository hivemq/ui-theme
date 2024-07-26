import { theme } from '../../theme/src/main'
import { Box, ChakraBaseProvider, Heading } from '@chakra-ui/react'

import { Buttons } from '@/views/Buttons'
import { Headings } from '@/views/Headings'
import { Colors } from '@/views/Colors'
import { SemanticColors } from '@/views/SemanticColors'
import { Links } from '@/views/Links.tsx'

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Heading variant="h1">Colors</Heading>
      <Box p={8}>
        <Colors withText />
      </Box>
      <hr />
      <Heading variant="h1">Semantic Colors</Heading>
      <Box p={8}>
        <SemanticColors withText />
      </Box>
      <hr />
      <Heading variant="h1">Headings</Heading>
      <Box p={8}>
        <Headings />
      </Box>
      <hr />
      <Heading variant="h1">Buttons</Heading>
      <Box p={8}>
        <Buttons />
      </Box>
      <hr />
      <Heading variant="h1"> Links</Heading>
      <Box p={8}>
        <Links />
      </Box>
    </ChakraBaseProvider>
  )
}

export default App
