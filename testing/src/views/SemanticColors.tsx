import { HStack, Heading, Text, VStack } from '@chakra-ui/react'
import * as semanticColors from '@/../../theme/src/style-guide/semanticColors'
import computedSemanticColors from '@/../../theme/src/style-guide/computedSemanticColors'
import { ColorCategory, ColorsInCategories } from '@/../../theme/src/style-guide/types'
import { neutrals } from '@/../../theme/src/foundations/colors'

const BORDER_WIDTH_IN_PIXEL = 1
const BORDER_COLOR_LIGHT = neutrals['900']
const BORDER_COLOR_DARK = neutrals.WHITE

export function SemanticColors({withText = false}: {withText?: boolean}) {
  const SIZE = 40

  const columnStyle = {
    border: `1px solid ${neutrals['300']}`,
    borderRadius: 12,
    padding: 20
  }

  return (
    <>
      <HStack alignItems="start" gap={withText ? 8 : 2}>
        {Object.entries(semanticColors as ColorsInCategories).map(([category, value]) => {
          return (
            <VStack alignItems="start" style={columnStyle} key={category + value}>
              <Heading variant="h2" marginBottom="4">{category}</Heading>

              <VStack alignItems="start">
                {Object.entries(value).map(([colorName, colorValue]) => {
                  const mappedColor = computedSemanticColors[category as ColorCategory][colorName]

                  // style for all types of semantic colors: text + a circle for light + a circle for dark with their values
                  // the background of the circle is usually for the assigned color, and the border varies depending on whether it's light or dark theme
                  // but for the 'border' key, it's the opposite: the border shows the assigned color, and the background corresponds to the light/dark theme
                  const styles = {
                    width: SIZE,
                    height: SIZE,
                    borderRadius: 999
                  }
                  const lightCircle = {
                    ...styles,
                    backgroundColor: mappedColor.light,
                    border: `${BORDER_WIDTH_IN_PIXEL}px solid ${BORDER_COLOR_LIGHT}`
                  }
                  const darkCircle = {
                    ...styles,
                    backgroundColor: mappedColor.dark,
                    border: `${BORDER_WIDTH_IN_PIXEL}px solid ${BORDER_COLOR_DARK}`
                  }

                  const pillStyle = {
                    display: 'flex',
                    backgroundColor: 'red', // white be overridden
                    border: `${BORDER_WIDTH_IN_PIXEL}px solid ${neutrals['200']}`,
                    padding: 4,
                    gap: 12,
                    paddingRight: withText ? 16 : 4,
                    borderRadius: 999,
                    alignItems: 'center',
                    width: 160
                  }
                  const lightPill = {
                    ...pillStyle,
                    backgroundColor: neutrals.WHITE
                  }
                  const darkPill = {
                    ...pillStyle,
                    backgroundColor: neutrals['900'],
                    border: 'none'
                  }

                  if (category === 'border') {
                    lightCircle.backgroundColor = neutrals.WHITE
                    lightCircle.border = `${BORDER_WIDTH_IN_PIXEL}px solid ${mappedColor.light}`
                    darkCircle.backgroundColor = neutrals['900']
                    darkCircle.border = `${BORDER_WIDTH_IN_PIXEL}px solid ${mappedColor.dark}`
                  }

                  return (
                    <HStack alignItems="center" gap={2} key={category + colorName}>
                    {withText && (
                      <Text fontFamily="monospace" minWidth="150" fontSize="small">
                        {colorName}
                      </Text>
                    )}
                      <HStack>
                        <div style={lightPill}>
                          <div style={lightCircle}>
                          </div>
                          {withText && (
                            <Text color={neutrals['800']} fontSize="small">{colorValue.light}</Text>
                          )}
                        </div>
                      </HStack>
                      <HStack>
                        <div style={darkPill}>
                          <div style={darkCircle}>
                          </div>
                          {withText && (
                            <Text color={neutrals.WHITE} fontSize="small">{colorValue.dark}</Text>
                          )}
                        </div>
                      </HStack>
                    </HStack>
                  )
                })}
              </VStack>
            </VStack>
          )
        })}
      </HStack>
    </>
  )
}