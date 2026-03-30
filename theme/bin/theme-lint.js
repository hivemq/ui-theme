#!/usr/bin/env node

/*
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
*/

import fs from 'node:fs'
import path from 'node:path'

const SKIP_DIRS = new Set([
  'node_modules',
  'dist',
  'build',
  'coverage',
  '__image_snapshots__',
])

function parseArgs(argv) {
  const args = argv.slice(2)
  const flags = { warn: false, simple: false }
  let directory = '.'

  for (const arg of args) {
    if (arg === '--warn') {
      flags.warn = true
    } else if (arg === '--simple') {
      flags.simple = true
    } else if (!arg.startsWith('--')) {
      directory = arg
    }
  }

  return { directory: path.resolve(directory), flags }
}

function findTsxFiles(dir) {
  const files = []

  function walk(currentDir) {
    let entries
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true })
    } catch {
      return
    }

    for (const entry of entries) {
      const name = entry.name
      if (name.startsWith('.') || SKIP_DIRS.has(name)) {
        continue
      }

      const fullPath = path.join(currentDir, name)
      if (entry.isDirectory()) {
        walk(fullPath)
      } else if (name.endsWith('.tsx')) {
        files.push(fullPath)
      }
    }
  }

  walk(dir)
  return files.sort()
}

function checkFile(_filePath) {
  return []
}

function formatGrouped(violationsByFile, baseDir) {
  const lines = []
  let total = 0

  for (const [filePath, violations] of violationsByFile) {
    const relPath = path.relative(baseDir, filePath)
    lines.push(`theme-lint: ${relPath}`)
    for (const v of violations) {
      lines.push(`  line ${v.line}: ${v.rule} — ${v.message}`)
      total++
    }
    lines.push('')
  }

  const fileCount = violationsByFile.size
  lines.push(`${total} violation${total !== 1 ? 's' : ''} found in ${fileCount} file${fileCount !== 1 ? 's' : ''}`)
  return lines.join('\n')
}

function formatSimple(violationsByFile, baseDir) {
  const lines = []

  for (const [filePath, violations] of violationsByFile) {
    const relPath = path.relative(baseDir, filePath)
    for (const v of violations) {
      lines.push(`${relPath}:${v.line}: ${v.rule} — ${v.message}`)
    }
  }

  return lines.join('\n')
}

function main() {
  const { directory, flags } = parseArgs(process.argv)
  const files = findTsxFiles(directory)

  const violationsByFile = new Map()

  for (const file of files) {
    const violations = checkFile(file)
    if (violations.length > 0) {
      violationsByFile.set(file, violations)
    }
  }

  if (violationsByFile.size === 0) {
    console.log('No theme violations found.')
    process.exit(0)
  }

  const output = flags.simple
    ? formatSimple(violationsByFile, directory)
    : formatGrouped(violationsByFile, directory)

  console.log(output)
  process.exit(flags.warn ? 0 : 1)
}

main()
