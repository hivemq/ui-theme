/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const env = process.env.NODE_ENV || 'development'
import { fileURLToPath } from 'node:url'
import packageConfig from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: env === 'test' ? 3001 : 3000,
  },
  //alias
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      external: [
        ...Object.keys(packageConfig.dependencies),
        ...Object.keys(packageConfig.devDependencies),
      ],
    },
  },
})
