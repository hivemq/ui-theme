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

import { Box, Code, Flex, Grid, HStack, Link, Stack, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { LuExternalLink } from 'react-icons/lu'
import { Section } from '~/components/layout/Section'
import { ClipboardIconButton, ClipboardRoot } from '~/components/ui/clipboard'

export const REPOSITORY_URL = 'https://github.com/hivemq/ui-theme'
const README_URL = `${REPOSITORY_URL}#readme`
const TROUBLESHOOTING_URL = `${REPOSITORY_URL}#unauthorized-error`
const THEME_LINTER_URL = `${REPOSITORY_URL}/tree/main/theme#theme-linter`
const GITHUB_PACKAGES_AUTH_URL =
  'https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages'

// The font weights the README lists for each family
const FONT_IMPORTS = [
  ...[100, 300, 400, 500, 700, 900].map((weight) => `import '@fontsource/roboto/${weight}.css'`),
  ...[100, 200, 300, 400, 500, 600, 700, 800, 900].map(
    (weight) => `import '@fontsource/raleway/${weight}.css'`,
  ),
  ...[400, 500, 700].map((weight) => `import '@fontsource/intel-one-mono/${weight}.css'`),
].join('\n')

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      color="content.primary"
      textDecoration="underline"
    >
      {children}
    </Link>
  )
}

// Follows the README, updated for Chakra UI v3: its peer list and `chakra-cli tokens` command
// date from v2. The setup mirrors this repository's own demo (testing/src/theme.ts).
export const setupSteps: { title: string; description: ReactNode; code: string[] }[] = [
  {
    title: 'Point the @hivemq scope at GitHub Packages',
    description: (
      <>
        Add both lines to your project's <Code size="sm">.npmrc</Code>, and set{' '}
        <Code size="sm">NPM_TOKEN</Code> to a GitHub personal access token (classic) with the{' '}
        <Code size="sm">read:packages</Code> scope. GitHub Packages needs a token even for public
        packages; see{' '}
        <ExternalLink href={GITHUB_PACKAGES_AUTH_URL}>
          authenticating to GitHub Packages
        </ExternalLink>
        . If the install fails with <Code size="sm">401 Unauthorized</Code>, see the README's{' '}
        <ExternalLink href={TROUBLESHOOTING_URL}>troubleshooting</ExternalLink>.
      </>
    ),
    code: [
      // biome-ignore lint/suspicious/noTemplateCurlyInString: npm and pnpm expand ${NPM_TOKEN} from the environment in .npmrc
      '@hivemq:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=${NPM_TOKEN}',
    ],
  },
  {
    title: 'Install the theme and Chakra UI v3',
    description:
      'The theme needs @chakra-ui/react 3.29 or later and its peer @emotion/react, in a React 18 or later app.',
    code: ['pnpm add @hivemq/ui-theme @chakra-ui/react @emotion/react'],
  },
  {
    title: 'Create the system and provide it',
    description: (
      <>
        Merge the HiveMQ config into Chakra's defaults, then pass the result to{' '}
        <Code size="sm">ChakraProvider</Code>.
      </>
    ),
    code: [
      `import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import { config } from '@hivemq/ui-theme'

export const system = createSystem(defaultConfig, config)

// <ChakraProvider value={system}>…</ChakraProvider>`,
    ],
  },
  {
    title: 'Generate token types',
    description: (
      <>
        Gives your editor autocomplete for the HiveMQ tokens (<Code size="sm">content.primary</Code>
        , <Code size="sm">brand.solid</Code> and so on). Point it at the file from step 3. To keep
        the types current, run it on every install by adding it as your{' '}
        <Code size="sm">postinstall</Code> script.
      </>
    ),
    code: [
      'pnpm add -D @chakra-ui/cli\npnpm chakra typegen ./src/theme.ts',
      '"scripts": {\n  "postinstall": "chakra typegen ./src/theme.ts"\n}',
    ],
  },
  {
    title: 'Install the fonts',
    description: (
      <>
        Fonts aren't bundled with the theme: Raleway for headings, Roboto for body text and IntelOne
        Mono for code. Install them, then import the weights in your entry file (e.g.{' '}
        <Code size="sm">main.ts</Code>) or <Code size="sm">index.css</Code>.
      </>
    ),
    code: [
      'pnpm add @fontsource/roboto @fontsource/raleway @fontsource/intel-one-mono',
      FONT_IMPORTS,
    ],
  },
  {
    title: 'Check your code with the theme linter (optional)',
    description: (
      <>
        The package ships <Code size="sm">hivemq-theme-lint</Code>. It flags hard-coded colors, raw
        font names and deprecated <Code size="sm">shell.*</Code> tokens; add{' '}
        <Code size="sm">--strict</Code> to also flag primitive tokens. See the{' '}
        <ExternalLink href={THEME_LINTER_URL}>linter docs</ExternalLink> for every flag.
      </>
    ),
    code: ['npx hivemq-theme-lint src'],
  },
]

function CodeSnippet({ code }: { code: string }) {
  return (
    <Flex
      align="flex-start"
      gap={2}
      bg={{ base: 'blackAlpha.100', _dark: 'whiteAlpha.100' }}
      borderRadius="md"
      px={3}
      py={2}
    >
      <Box
        as="pre"
        flex={1}
        minW={0}
        overflowX="auto"
        fontFamily="mono"
        fontSize="xs"
        lineHeight="1.6"
        m={0}
      >
        {code}
      </Box>
      <ClipboardRoot value={code}>
        <ClipboardIconButton size="2xs" variant="ghost" aria-label="Copy code" />
      </ClipboardRoot>
    </Flex>
  )
}

/**
 * How to add the theme to an app, with links to the repository and README.
 */
export function GetStarted() {
  return (
    <Section
      id="get-started"
      title="Get started"
      description="Add the theme to a Chakra UI v3 app. The last step is optional."
    >
      <Stack as="ol" gap={5} listStyleType="none" p={0} m={0}>
        {setupSteps.map((step, index) => (
          <Grid
            as="li"
            key={step.title}
            templateColumns="28px minmax(0, 1fr)"
            gap={3}
            alignItems="start"
          >
            <Flex
              boxSize={7}
              align="center"
              justify="center"
              borderRadius="full"
              bg="brand.solid"
              color="brand.contrast"
              fontSize="caption"
              fontWeight="bold"
              aria-hidden="true"
            >
              {index + 1}
            </Flex>
            <Stack gap={1.5} minW={0}>
              <Text fontWeight="medium">{step.title}</Text>
              <Text color="content.secondary">{step.description}</Text>
              {step.code.map((code) => (
                <CodeSnippet key={code} code={code} />
              ))}
            </Stack>
          </Grid>
        ))}
      </Stack>
      <HStack gap={5} wrap="wrap">
        <Link
          href={REPOSITORY_URL}
          target="_blank"
          rel="noreferrer"
          color="content.primary"
          textDecoration="underline"
        >
          View on GitHub <LuExternalLink aria-hidden="true" />
        </Link>
        <Link
          href={README_URL}
          target="_blank"
          rel="noreferrer"
          color="content.primary"
          textDecoration="underline"
        >
          Read the README <LuExternalLink aria-hidden="true" />
        </Link>
      </HStack>
    </Section>
  )
}
