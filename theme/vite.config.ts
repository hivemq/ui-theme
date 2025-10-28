import { readFileSync } from 'node:fs'
import * as path from 'node:path'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// Manually read and parse the package.json file
const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      // Corrected path to your entry file
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      name: '@hivemq/ui-theme',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize peer dependencies that shouldn't be bundled
      external: Object.keys(pkg.peerDependencies || {}),
    },
  },
})
