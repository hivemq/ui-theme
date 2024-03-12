import { Button, HStack, VStack } from '@chakra-ui/react'

export function Buttons() {
  const sizes = ['sm', 'md', 'lg', 'xl']
  const variants = ['primary', 'secondary', 'outline', 'ghost', 'dangerous', 'link']

  return (
    <>
      <VStack width="100%" gap={4} alignItems="start">
        {variants.map(variant => {
          return (
            <>
              <HStack alignItems="start">
                {sizes.map(size => <Button variant={variant} size={size}>Button</Button>)}
              </HStack>
              <HStack alignItems="start">
                {sizes.map(size => <Button variant={variant} size={size} isDisabled>Button</Button>)}
              </HStack>
            </>
          )
        })}
      </VStack>
    </>
  )
}