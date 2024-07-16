import { HStack, Heading, VStack, Text } from '@chakra-ui/react'
import * as colors from '@/../../theme/src/foundations/colors'

const BORDER_WIDTH_IN_PIXEL = 2

export function Colors({withText = false}: {withText?: boolean}) {
  const ELEMENT_WIDTH = (withText ? 100 : 50) - BORDER_WIDTH_IN_PIXEL

  return (
    <>
      <VStack alignItems="start" gap={withText ? 8 : 2}>
        {Object.entries(colors).map(([_key, value]) => {
          return (
            <VStack alignItems="start" key={_key + value}>
              {withText && <Heading variant="h2">{_key}</Heading>}

              <HStack>
                {Object.entries(value).map(([weight, colorValue]) => {
                  const styles = {
                    backgroundColor: colorValue,
                    width: ELEMENT_WIDTH,
                    height: ELEMENT_WIDTH,
                  }

                  return (
                    <VStack alignItems="start" gap={1} key={_key + weight}>
                      <div style={styles}>
                      </div>
                      {withText && (
                        <div>
                          <Text fontFamily="monospace" fontSize="xs">{_key}.{weight}</Text>
                          <Text fontFamily="monospace" fontSize="xs" color={colors.neutrals['500']}>{colorValue}</Text>
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