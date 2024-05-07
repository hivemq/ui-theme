import { Button, Heading, HStack, VStack } from '@chakra-ui/react'

export function Buttons() {
  const variants = ['primary', 'secondary', 'outline', 'ghost', 'dangerous', 'link']

  return (
    <>
      <VStack width="100%" gap={4} alignItems="start">
        {variants.map(variant => {
          return (
            <div key={variant}>
              <Heading variant="h2">{variant}</Heading>
              <HStack alignItems="start">
                <Button variant={variant}>Button</Button>
                <Button variant={variant} isDisabled>Button</Button>
              </HStack>
            </div>
          )
        })}
      </VStack>
    </>
  )
}