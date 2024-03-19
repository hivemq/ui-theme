/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const env = process.env.NODE_ENV || 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: env === 'test' ? 3001 : 3000
  },
  //alias
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  test: {
    globals: true,
    reporters: ['basic', 'json'],
    outputFile: 'results.json',
    setupFiles: ['setup-safetest'],
    include: ['**/*.safetest.?(c|m)[jt]s?(x)'],
  },
})
