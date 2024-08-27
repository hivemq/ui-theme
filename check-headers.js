import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const regexToIgnore = [
  /^\./, // ignore all files and directories starting with '.'
  /__image_snapshots__/,
  /^(node_modules|public|docs|dist)/, // ignore common directories
  /^(LICENSE|HEADER)$/,
  /^vite\./,
  /^tsconfig\./,
  /.*\.(md|yaml|json|html|png|d\.ts|css)$/,
  /setup-safetest.js/,
]

// Define the expected header
const expectedHeader = `/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/\n`

// Function to check if a file starts with the expected header
function checkFileHeader(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  if (!content.startsWith(expectedHeader)) {
    console.error(`File ${filePath} does not start with the expected header.`)
    process.exitCode = 1
  }
}

const thisFile = process.argv[1].split('/').slice(-1)[0]

// Recursively check all files in a directory
function checkDirectory(dirPath) {
  const files = fs.readdirSync(dirPath)
  for (const file of files) {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)

    const ignore = file === thisFile || regexToIgnore.some((regex) => regex.test(file))

    console.log(filePath, stat.isDirectory() ? ' (d)' : '', ignore ? ' IGNORE' : '')
    if (!ignore) {
      if (stat.isDirectory()) {
        checkDirectory(filePath)
      } else {
        checkFileHeader(filePath)
      }
    }
  }
}

// Check files in the current directory or specified directory
const dirToCheck = process.argv[2] || '.'
checkDirectory(path.resolve(__dirname, dirToCheck))
