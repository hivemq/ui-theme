import { HStack, Heading, VStack, Text } from '@chakra-ui/react'
import { colors } from '../../../theme/src/main'

export function Colors({withText = false}: {withText?: boolean}) {
  const width = withText ? 120 : 50

  return (
    <>
      <VStack alignItems="start" gap={withText ? 8 : 2}>
        {Object.entries(colors).map(([_key, value]) => {
          return (
            <VStack alignItems="start">
              {withText && <Heading variant="h2">{_key}</Heading>}
              <HStack>
                {Object.entries(value).map(([weight, color]) => {

                  return (
                    <VStack alignItems="start" gap={1}>
                      <div style={{ backgroundColor: color, width, height: width }}>
                      </div>
                      {withText && (
                        <div>
                          <Text>{_key}-{weight}</Text>
                          <Text color="surface.500">{color}</Text>
                        </div>
                      )}
                    </VStack>
                  )
                })}
                <br />
              </HStack>
            </VStack>
          )
        })}
      </VStack>
    </>
  )
}