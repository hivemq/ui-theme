import {theme} from '../../theme/src/main'
import {Box, ChakraBaseProvider, Heading} from '@chakra-ui/react'

import {Buttons} from '@/views/Buttons'
import {Headings} from '@/views/Headings'
import {Colors} from '@/views/Colors'
import {SemanticColors} from '@/views/SemanticColors'
import {Links} from '@/views/Links.tsx'
import {Alerts} from '@/views/Alerts.tsx'

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Box pl={6} pt={6}>
        <Heading variant="h1">Colors</Heading>
        <Box p={8}>
          <Colors withText />
        </Box>
        <hr />
        <Heading variant="h1" pt={4}>
          Semantic Colors
        </Heading>
        <Box p={8}>
          <SemanticColors withText />
        </Box>
        <hr />
        <Heading variant="h1" pt={4}>
          Headings
        </Heading>
        <Box p={8}>
          <Headings />
        </Box>
        <hr />
        <Heading variant="h1" pt={4}>
          Buttons
        </Heading>
        <Box p={8}>
          <Buttons />
        </Box>
        <hr />
        <Heading variant="h1" pt={4}>
          Links
        </Heading>
        <Box p={8}>
          <Links />
        </Box>
        <hr />
        <Heading variant="h1" pt={4}>
          Alerts
        </Heading>
        <Box p={8}>
          <Alerts />
        </Box>
      </Box>
    </ChakraBaseProvider>
  )
}

export default App
