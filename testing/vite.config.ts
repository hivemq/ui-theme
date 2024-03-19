/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const env = process.env.NODE_ENV || 'development';
import packageConfig from './package.json';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: env === 'test' ? 3001 : 3000
  },
  //alias
  resolve: {
    alias: {
      '@': fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: [...Object.keys(packageConfig.dependencies), ...Object.keys(packageConfig.devDependencies)],
    },
  },
})
