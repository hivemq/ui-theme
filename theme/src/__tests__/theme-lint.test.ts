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

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it } from 'vitest'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CLI_PATH = path.resolve(__dirname, '../../bin/theme-lint.js')

function runCli(args: string[] = []): { stdout: string; exitCode: number } {
  try {
    const stdout = execFileSync('node', [CLI_PATH, ...args], {
      encoding: 'utf8',
      cwd: __dirname,
    })
    return { stdout, exitCode: 0 }
  } catch (e: unknown) {
    const err = e as { stdout?: string; status?: number }
    return { stdout: err.stdout ?? '', exitCode: err.status ?? 1 }
  }
}

const tempDirs: string[] = []

function createTempTsx(content: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'theme-lint-'))
  tempDirs.push(dir)
  const file = path.join(dir, 'test.tsx')
  fs.writeFileSync(file, content)
  return dir
}

afterEach(() => {
  for (const dir of tempDirs) {
    fs.rmSync(dir, { recursive: true, force: true })
  }
  tempDirs.length = 0
})

describe('theme-lint CLI', () => {
  it('exits 0 and prints success when scanning a directory with no tsx files', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'theme-lint-empty-'))
    tempDirs.push(dir)
    fs.writeFileSync(path.join(dir, 'readme.txt'), 'not a tsx file')
    const { stdout, exitCode } = runCli([dir])
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

describe('hardcoded-rgb rule', () => {
  it('flags rgb() values', () => {
    const dir = createTempTsx("<Box color='rgb(255, 0, 0)'>text</Box>")
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
    expect(stdout).toContain('hardcoded-rgb')
    expect(stdout).toContain('rgb(')
  })

  it('flags rgba() values', () => {
    const dir = createTempTsx('<Box bg="rgba(255, 0, 0, 0.5)">text</Box>')
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
    expect(stdout).toContain('hardcoded-rgb')
    expect(stdout).toContain('rgba(')
  })
})

describe('hardcoded-font rule', () => {
  it('flags fontFamily with raw font names', () => {
    const dir = createTempTsx(`<Box fontFamily="'Roboto', sans-serif">text</Box>`)
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
    expect(stdout).toContain('hardcoded-font')
  })

  it('flags font-family in style objects', () => {
    const dir = createTempTsx(`const style = { fontFamily: "'Arial', sans-serif" }`)
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
    expect(stdout).toContain('hardcoded-font')
  })

  it('flags font-family CSS property', () => {
    const dir = createTempTsx(`const style = { 'font-family': "'Helvetica', sans-serif" }`)
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
    expect(stdout).toContain('hardcoded-font')
  })

  it('does not flag fontFamily with token values', () => {
    const dir = createTempTsx('<Heading fontFamily="heading">Title</Heading>')
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(0)
    expect(stdout).toContain('No theme violations found')
  })
})

describe('deprecated-shell rule', () => {
  it('flags shell.bg token', () => {
    const dir = createTempTsx('<Box bg="shell.bg">text</Box>')
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
    expect(stdout).toContain('deprecated-shell')
    expect(stdout).toContain('shell.bg')
  })

  it('flags shell.muted token', () => {
    const dir = createTempTsx("const bg = 'shell.muted'")
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
    expect(stdout).toContain('deprecated-shell')
  })

  it('does not flag non-shell tokens', () => {
    const dir = createTempTsx('<Box bg="bg">text</Box>')
    const { stdout, exitCode } = runCli([dir])
    expect(exitCode).toBe(0)
    expect(stdout).toContain('No theme violations found')
  })
})

describe('output formats', () => {
  it('uses grouped format by default', () => {
    const dir = createTempTsx('<Box color="#DE2C32">text</Box>')
    const { stdout } = runCli([dir])
    expect(stdout).toContain('theme-lint: ')
    expect(stdout).toContain('  line 1:')
    expect(stdout).toMatch(/1 violation.* found in 1 file/)
  })

  it('uses simple format with --simple flag', () => {
    const dir = createTempTsx('<Box color="#DE2C32">text</Box>')
    const { stdout } = runCli([dir, '--simple'])
    expect(stdout).toMatch(/test\.tsx:1: hardcoded-hex/)
    expect(stdout).not.toContain('theme-lint: ')
  })
})

describe('exit behavior', () => {
  it('exits 1 when violations found without --warn', () => {
    const dir = createTempTsx('<Box color="#DE2C32">text</Box>')
    const { exitCode } = runCli([dir])
    expect(exitCode).toBe(1)
  })

  it('exits 0 when violations found with --warn', () => {
    const dir = createTempTsx('<Box color="#DE2C32">text</Box>')
    const { exitCode } = runCli([dir, '--warn'])
    expect(exitCode).toBe(0)
  })

  it('exits 0 when no violations found', () => {
    const dir = createTempTsx('<Box bg="bg">text</Box>')
    const { exitCode } = runCli([dir])
    expect(exitCode).toBe(0)
  })
})
