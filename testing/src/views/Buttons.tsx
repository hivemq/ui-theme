import {Box, Button, Heading, HStack} from '@chakra-ui/react'

export function Buttons() {
  const variants = ['primary', 'secondary', 'outline', 'ghost', 'dangerous']
  const sizes = ['xs', 'sm', 'md', 'lg']

  return (
    <>
      <HStack width="100%" gap={8} alignItems="start">
        {variants.map(variant => {
          return (
            <Box key={variant}>
              <Heading variant="h2" mb={2}>{variant} </Heading>
                {sizes.map(size => {
                  return (
                      <Box key={size} p={2}>
                        <Heading variant="h3">{size}</Heading>
                        <HStack alignItems="start" mt={2}>
                            <Button variant={variant} size={size}>Button</Button>
                            <Button variant={variant} size={size} isDisabled>Button</Button>
                        </HStack>
                      </Box>
                )})}
            </Box>
          )
        })}
      </HStack>
    </>
  )
}
