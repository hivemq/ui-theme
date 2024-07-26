import {Alert, AlertTitle, Box, Heading, VStack} from '@chakra-ui/react'

export function Alerts() {
  //TODO Why does the alert always just render as plain text
  //TODO shouldn't it have the basic styles for chakra UI already
  const status = ['success', 'info', 'warning', 'error']
  const variants = ['subtle', 'solid']

  return (
    <>
      <VStack width="100%" gap={8} alignItems="start">
        {status.map((status) => {
          return (
            <Box key={status}>
              <Heading variant="h2" mb={2}>
                {status}
              </Heading>
              <Alert status={status} key={status}>
                <AlertTitle>Title</AlertTitle>
              </Alert>
            </Box>
          )
        })}
      </VStack>
    </>
  )
}
