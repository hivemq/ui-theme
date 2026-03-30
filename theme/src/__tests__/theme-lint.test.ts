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

import { describe, it, expect } from 'vitest'
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import os from 'node:os'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CLI_PATH = path.resolve(__dirname, '../../bin/theme-lint.js')

function runCli(args: string[] = []): { stdout: string; exitCode: number } {
  try {
    const stdout = execFileSync('node', [CLI_PATH, ...args], {
      encoding: 'utf8',
      cwd: __dirname,
    })
    return { stdout, exitCode: 0 }
  } catch (e: any) {
    return { stdout: e.stdout ?? '', exitCode: e.status ?? 1 }
  }
}

function createTempTsx(content: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'theme-lint-'))
  const file = path.join(dir, 'test.tsx')
  fs.writeFileSync(file, content)
  return dir
}

describe('theme-lint CLI', () => {
  it('exits 0 and prints success when scanning a directory with no tsx files', () => {
    const { stdout, exitCode } = runCli([path.resolve(__dirname, '../../dist')])
    expect(exitCode).toBe(0)
    expect(stdout).toContain('No theme violations found')
  })
})

describe('hardcoded-hex rule', () => {
  it('flags 6-digit hex colors', () => {
    const dir = createTempTsx('<Box color="#DE2C32">text</Box>')
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
    expect(stdout).toContain('hardcoded-hex')
    expect(stdout).toContain('#DE2C32')
  })

  it('flags 3-digit hex colors', () => {
    const dir = createTempTsx("<Box bg='#fff'>text</Box>")
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
    expect(stdout).toContain('hardcoded-hex')
    expect(stdout).toContain('#fff')
  })

  it('flags 8-digit hex colors (with alpha)', () => {
    const dir = createTempTsx('<Box color="#DE2C32FF">text</Box>')
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
    expect(stdout).toContain('hardcoded-hex')
  })

  it('does not flag CSS token references like colors.red.500', () => {
    const dir = createTempTsx("<Box color='{colors.red.500}'>text</Box>")
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(0)
    expect(stdout).toContain('No theme violations found')
  })

  it('does not flag lines with hivemq-theme-lint-ignore comment', () => {
    const dir = createTempTsx('<Box color="#DE2C32">text</Box> // hivemq-theme-lint-ignore')
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(0)
    expect(stdout).toContain('No theme violations found')
  })
})
