import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  HStack,
  Heading,
} from '@chakra-ui/react'

export function Alerts() {
  const variants: Array<'success' | 'error' | 'warning' | 'info'> = [
    'success',
    'error',
    'warning',
    'info',
  ]

  return (
    <>
      <HStack width="100%" gap={8} alignItems="start">
        {variants.map((variant) => {
          return (
            <Box key={variant} p={2}>
              <Heading variant="h2" mb={2}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Heading>
              <Alert variant={variant} status={variant}>
                <AlertIcon />
                <Box flex="1">
                  <AlertTitle>
                    {variant.charAt(0).toUpperCase() + variant.slice(1)} Alert
                  </AlertTitle>
                  <AlertDescription>This is a {variant} alert.</AlertDescription>
                </Box>
              </Alert>
            </Box>
          )
        })}
      </HStack>
    </>
  )
}
