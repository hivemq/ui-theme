/// <reference types="vitest" />

import { defineConfig } from 'vite'
import base from './vite.config'

// https://vitejs.dev/config/
export default defineConfig({
  ...base,
  test: {
    globals: true,
    testTimeout: 30000,
    reporters: ['default', 'json'],
    outputFile: 'results.json',
    setupFiles: ['setup-safetest.js'],
    include: ['**/*.safetest.?(c|m)[jt]s?(x)'],
    threads: !!process.env.CI,
    inspect: !process.env.CI,
    passWithNoTests: true,
  },
})
