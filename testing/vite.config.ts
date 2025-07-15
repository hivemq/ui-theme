/// <reference types="vitest" />

import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import packageConfig from './package.json'

const env = process.env.NODE_ENV || 'development'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: env === 'test' ? 3001 : 3000,
  },
  // Set the base if we are in a build environment to ensure the right path for the chunks
  base: process.env.NODE_ENV === 'development' ? undefined : '/ui-theme/',
  //alias
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      external: [...Object.keys(packageConfig.devDependencies)],
      output: {
        // Ensuring all node_modules are bundled into one vendor chunk. No need for fonts and ui-theme to be bundled though
        manualChunks: {
          vendor: Object.keys(packageConfig.dependencies).filter(
            (dep) => dep !== '@hivemq/ui-theme' && !dep.startsWith('@fontsource'),
          ),
        },
      },
    },
  },
})
