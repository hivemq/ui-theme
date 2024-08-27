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

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ColorModeProvider,
  DarkMode,
  LightMode,
  Text,
  useColorMode,
} from '@chakra-ui/react'

export function ModePlayground() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Mode playground
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box display="flex" flexDirection="column" gap="2" py="4">
              color mode: {colorMode}
              <LightMode>
                <Button size="sm">Light Mode Always</Button>
              </LightMode>
              <DarkMode>
                <Button size="sm">Dark Mode Always</Button>
              </DarkMode>
              <Button size="sm" onClick={toggleColorMode}>
                Toggle Mode
              </Button>
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
              <LightMode>
                <Text color="text.text-base">
                  This text uses the default light mode text color.
                </Text>
              </LightMode>
              <ColorModeProvider
                value="dark"
                options={{ useSystemColorMode: false, initialColorMode: 'dark' }}
              >
                <Text color="text.text-base">This text uses the default dark mode text color.</Text>
              </ColorModeProvider>
              <Text>This text uses the normal text color depending on the current mode.</Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}
