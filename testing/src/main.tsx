import App from '@/App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { bootstrap } from 'safetest/react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '../../theme/src/main'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = ReactDOM.createRoot(document.getElementById('root')!)

bootstrap({
  element: (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        {/* ColorModeScript ensures that the initial color mode matches the preference */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
      </ChakraProvider>
    </React.StrictMode>
  ),
  importGlob: import.meta.glob('./**/*.safetest.{j,t}s{,x}'),
  render: (element) => root.render(element),
})
