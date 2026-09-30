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

import { Box, Container, Grid, Link, Text } from '@chakra-ui/react'
import { type NavGroup, SideNav } from '~/components/layout/SideNav'
import { Toaster } from '~/components/ui/toaster'
import { themeVersion } from '~/util/tokens'
import { Alerts } from '~/views/Alerts'
import { Badges } from '~/views/Badges'
import { Breakpoints } from '~/views/Breakpoints'
import { ButtonVariations } from '~/views/ButtonVariations'
import { ChartColors } from '~/views/ChartColors'
import { Checkboxes } from '~/views/Checkboxes'
import { ContentTokens } from '~/views/ContentTokens'
import { GetStarted, REPOSITORY_URL } from '~/views/GetStarted'
import { Inputs } from '~/views/Inputs'
import { Masthead } from '~/views/Masthead'
import { Primitives } from '~/views/Primitives'
import { SemanticPalettes } from '~/views/SemanticPalettes'
import { Toasts } from '~/views/Toasts'
import { Typography } from '~/views/Typography'

// Ids must match the `id` of each view's Section
export const navGroups: NavGroup[] = [
  {
    label: 'Overview',
    items: [{ id: 'get-started', label: 'Get started' }],
  },
  {
    label: 'Foundations',
    items: [
      { id: 'primitives', label: 'Primitives' },
      { id: 'palettes', label: 'Semantic palettes' },
      { id: 'content', label: 'Content & surfaces' },
      { id: 'charts', label: 'Chart colors' },
      { id: 'type', label: 'Typography' },
      { id: 'breakpoints', label: 'Breakpoints' },
    ],
  },
  {
    label: 'Components',
    items: [
      { id: 'buttons', label: 'Buttons' },
      { id: 'badges', label: 'Badges' },
      { id: 'alerts', label: 'Alerts' },
      { id: 'inputs', label: 'Inputs' },
      { id: 'checkboxes', label: 'Checkboxes' },
      { id: 'toasts', label: 'Toasts' },
    ],
  },
]

function App() {
  return (
    // The theme defines fontSizes.body (14px) but doesn't apply it globally, so the page sets it here
    <Box bg="bg.default" color="content.primary" fontSize="body" lineHeight="tall" minH="100dvh">
      <Container maxW="1280px" px={{ base: 4, md: 6 }}>
        <Masthead />
        <Grid
          templateColumns={{ base: 'minmax(0, 1fr)', lg: '188px minmax(0, 1fr)' }}
          gap={{ lg: 12 }}
        >
          <SideNav groups={navGroups} />
          <Box as="main" minW={0} pb={16}>
            <GetStarted />
            <Primitives />
            <SemanticPalettes />
            <ContentTokens />
            <ChartColors />
            <Typography />
            <Breakpoints />
            <ButtonVariations />
            <Badges />
            <Alerts />
            <Inputs />
            <Checkboxes />
            <Toasts />
          </Box>
        </Grid>
        <Text
          as="footer"
          py={6}
          borderTopWidth="1px"
          borderColor="border"
          fontSize="caption"
          color="content.secondary"
        >
          Generated from @hivemq/ui-theme {themeVersion} ·{' '}
          <Link href={REPOSITORY_URL} target="_blank" rel="noreferrer" textDecoration="underline">
            View on GitHub
          </Link>
        </Text>
      </Container>
      <Toaster />
    </Box>
  )
}

export default App
