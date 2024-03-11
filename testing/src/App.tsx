import * as React from 'react'

import { Button, HStack, VStack } from '@chakra-ui/react'

function App() {
  const sizes = ['sm', 'md', 'lg', 'xl']
  const variants = ['primary', 'secondary', 'outline', 'ghost', 'dangerous', 'link']

  return (
    <>
      <VStack width="100%" gap={4} alignItems="start">
        {variants.map(variant => {
          return (
            <>
              <HStack alignItems="start">
                {sizes.map(size => {
                  return (
                    <>
                      <Button variant={variant} size={size}>Button</Button>
                    </>
                  )
                })}
              </HStack>
              <HStack alignItems="start">
                {sizes.map(size => {
                  return (
                    <>
                      <Button variant={variant} size={size} isDisabled={true}>Button</Button>
                    </>
                  )
                })}
              </HStack>
            </>
          )
        })}
      </VStack>
    </>
  )
}

export default App
