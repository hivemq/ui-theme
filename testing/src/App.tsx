import { Box, ChakraBaseProvider, Heading } from '@chakra-ui/react'
import { theme } from '../../theme/src/main'

import { Alerts } from '@/views/Alerts.tsx'
import { Buttons } from '@/views/Buttons'
import { Colors } from '@/views/Colors'
import { Headings } from '@/views/Headings'
import { Links } from '@/views/Links.tsx'
import { SemanticColors } from '@/views/SemanticColors'
import { Texts } from '@/views/Texts'

function App() {
  const style: React.CSSProperties = {
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

        <hr />

        <Heading variant="h1"> Links</Heading>
        <Alerts />
      </Box>
    </ChakraBaseProvider>
  )
}

export default App
