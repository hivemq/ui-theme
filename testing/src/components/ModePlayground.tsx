import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ColorModeProvider, DarkMode, LightMode, useColorMode, Text } from '@chakra-ui/react'

export function ModePlayground() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Mode playground
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box display="flex" flexDirection="column" gap="2" py="4">
            color mode: { colorMode }
            <LightMode>
              <Button size='sm'>
                Light Mode Always
              </Button>
            </LightMode>

            <DarkMode>
              <Button size='sm'>
                Dark Mode Always
              </Button>
            </DarkMode>

            <Button size='sm' onClick={toggleColorMode}>
              Toggle Mode
            </Button>
          </Box>

          <Box p="4" bg='background.bg-subtle' borderRadius="md" right="5" gap="4" borderWidth="1px" display="flex" flexDirection="column">
            <LightMode>
              <Text color="text.text-base">
                This text uses the default light mode text color.
              </Text>
            </LightMode>
            <ColorModeProvider value="dark" options={{ useSystemColorMode: false, initialColorMode: 'dark' }}>
              <Text color="text.text-base">
                This text uses the default dark mode text color.
              </Text>
            </ColorModeProvider>
            <Text>
              This text uses the normal text color depending on the current mode.
            </Text>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    </>
  )
}
