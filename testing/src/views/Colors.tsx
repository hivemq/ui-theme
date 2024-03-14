import { HStack, Heading, VStack, Text } from '@chakra-ui/react'
import { colors } from '../../../theme/src/main'

const BORDER_WIDTH_IN_PIXEL = 2

export function Colors({withText = false}: {withText?: boolean}) {
  const ELEMENT_WIDTH = (withText ? 150 : 50) - BORDER_WIDTH_IN_PIXEL
  const colorScale = new Set(["0", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"])

  return (
    <>
      <VStack alignItems="start" gap={withText ? 8 : 2}>
        {Object.entries(colors).map(([_key, value]) => {
          return (
            <VStack alignItems="start">
              {withText && <Heading variant="h2">{_key}</Heading>}

              <HStack>
                {Array.from(colorScale).map((weight) => {
                  // @ts-expect-error - Colors do not exist on the predefined types
                  const COLOR_VALUE = value[weight]! || 'transparent'

                  const styles = {
                    backgroundColor: COLOR_VALUE,
                    width: ELEMENT_WIDTH,
                    height: ELEMENT_WIDTH,
                    border: `${BORDER_WIDTH_IN_PIXEL}px solid ${COLOR_VALUE === 'transparent' ? '#ddd' : COLOR_VALUE}`,
                  }

                  return (
                    <VStack alignItems="start" gap={1}>
                      <div style={styles}>
                      </div>
                      {withText && (
                        <Text fontFamily="monospace">
                          <Text>{_key}.{weight}</Text>
                          {COLOR_VALUE === 'transparent' ?
                            <Text color="destructive.500" fontWeight={600}>UNDEFINED</Text> :
                            <Text color="surface.500">{COLOR_VALUE}</Text>
                          }
                        </Text>
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