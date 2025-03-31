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

import { Accordion, Box, Button, Text } from '@chakra-ui/react'
import { ColorModeButton, ColorModeProvider, useColorMode } from '~/ui/color-mode'

export function ModePlayground() {
  const { colorMode } = useColorMode()
  return (
    <>
      <Accordion.Root>
        <Accordion.Item value="a">
          <h2>
            <Accordion.ItemTrigger>
              <Box as="span" flex="1" textAlign="left">
                Mode playground
              </Box>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
          </h2>
          <Accordion.ItemContent pb={4}>
            <Accordion.ItemBody>
              <Box display="flex" flexDirection="column" gap="2" py="4">
                color mode: {colorMode}
                <ColorModeProvider forcedTheme="light">
                  <Button size="sm">Light Mode Always</Button>
                </ColorModeProvider>
                <ColorModeProvider forcedTheme="dark">
                  <Button size="sm">Dark Mode Always</Button>
                </ColorModeProvider>
                <ColorModeButton>Toggle Mode</ColorModeButton>
              </Box>

              <Box
                p="4"
                bg="background.bg-subtle"
                borderRadius="md"
                right="5"
                gap="4"
                borderWidth="1px"
                display="flex"
                flexDirection="column"
              >
                <ColorModeProvider forcedTheme="light">
                  <Text color="text.text-base">
                    This text uses the default light mode text color.
                  </Text>
                </ColorModeProvider>
                <ColorModeProvider forcedTheme="dark">
                  <Text color="text.text-base">
                    This text uses the default dark mode text color.
                  </Text>
                </ColorModeProvider>
                <Text>This text uses the normal text color depending on the current mode.</Text>
              </Box>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  )
}
