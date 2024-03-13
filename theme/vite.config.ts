import { resolve } from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es', 'umd'],
      name: '@hivemq/ui-theme',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize peer dependencies that shouldn't be bundled
      external: Object.keys(peerDependencies)
    }
  },
})
