import { theme } from '../../theme/src/main'
import { Box, ChakraBaseProvider, Heading, Text } from '@chakra-ui/react'

import { Alerts } from '@/views/Alerts.tsx'
import { Buttons } from '@/views/Buttons'
import { Colors } from '@/views/Colors'
import { Headings } from '@/views/Headings'
import { Texts } from '@/views/Texts'
import { Colors } from '@/views/Colors'
import { SemanticColors } from '@/views/SemanticColors'

function App() {
  const style = {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  }
  return (
    <ChakraBaseProvider theme={theme}>
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
      </Box>
    </ChakraBaseProvider>
  )
}

export default App
