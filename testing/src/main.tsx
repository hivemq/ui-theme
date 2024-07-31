import App from '@/App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { bootstrap } from 'safetest/react'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = ReactDOM.createRoot(document.getElementById('root')!)

bootstrap({
  element: (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ),
  importGlob: import.meta.glob('./**/*.safetest.{j,t}s{,x}'),
  render: (element) => root.render(element),
})
