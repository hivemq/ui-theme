import * as React from 'react'

import { Buttons } from './views/buttons'
import { Box } from '@chakra-ui/react'
import { Headings } from './views/headings'

function App() {
  return (
    <>
      <Box p={8}>
        <Headings />
      </Box>
      <hr />
      <Box p={8}>
        <Buttons />
      </Box>
      <hr />
    </>
  )
}

export default App
