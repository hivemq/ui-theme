/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as semanticColors from '@/../../theme/src/style-guide/semanticColors'
import type { ColorCategory, ColorsInCategories } from '@/../../theme/src/style-guide/types'
import { HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { chakraTokenToCssVar } from '@hivemq/ui-theme/src/utils'

const BORDER_WIDTH_IN_PIXEL = 1
const BORDER_COLOR_LIGHT = chakraTokenToCssVar('neutrals', 900)
const BORDER_COLOR_DARK = chakraTokenToCssVar('neutrals', 'WHITE')

export function SemanticColors({ withText = false }: { withText?: boolean }) {
  const SIZE = 40

  const columnStyle = {
    border: `1px solid ${chakraTokenToCssVar('neutrals', 300)}`,
    borderRadius: 12,
    padding: 20,
  }

  return (
    <>
      <HStack alignItems="start" gap={withText ? 8 : 2}>
        {Object.entries(semanticColors as ColorsInCategories).map(([category, value]) => {
          return (
            <VStack alignItems="start" style={columnStyle} key={category + value}>
              <Heading variant="h2" marginBottom="4">
                {category}
              </Heading>

              <VStack alignItems="start">
                {Object.entries(value).map(([colorName, colorValue]) => {
                  const mappedColor = semanticColors[category as ColorCategory][colorName]

                  // style for all types of semantic colors: text + a circle for light + a circle for dark with their values
                  // the background of the circle is usually for the assigned color, and the border varies depending on whether it's light or dark theme
                  // but for the 'border' key, it's the opposite: the border shows the assigned color, and the background corresponds to the light/dark theme
                  const styles = {
                    width: SIZE,
                    height: SIZE,
                    borderRadius: 999,
                  }
                  const lightCircle = {
                    ...styles,
                    backgroundColor: chakraTokenToCssVar(mappedColor.default),
                    border: `${BORDER_WIDTH_IN_PIXEL}px solid ${BORDER_COLOR_LIGHT}`,
                  }
                  const darkCircle = {
                    ...styles,
                    backgroundColor: chakraTokenToCssVar(mappedColor._dark),
                    border: `${BORDER_WIDTH_IN_PIXEL}px solid ${BORDER_COLOR_DARK}`,
                  }

                  const pillStyle = {
                    display: 'flex',
                    backgroundColor: 'red', // white be overridden
                    border: `${BORDER_WIDTH_IN_PIXEL}px solid ${chakraTokenToCssVar('neutrals', 200)}`,
                    padding: 4,
                    gap: 12,
                    paddingRight: withText ? 16 : 4,
                    borderRadius: 999,
                    alignItems: 'center',
                    width: 164,
                  }
                  const lightPill = {
                    ...pillStyle,
                    backgroundColor: chakraTokenToCssVar('neutrals', 'WHITE'),
                  }
                  const darkPill = {
                    ...pillStyle,
                    backgroundColor: chakraTokenToCssVar('neutrals', 900),
                    border: 'none',
                  }

                  if (category === 'border') {
                    lightCircle.backgroundColor = chakraTokenToCssVar('neutrals', 'WHITE')
                    lightCircle.border = `${BORDER_WIDTH_IN_PIXEL}px solid ${chakraTokenToCssVar(mappedColor.default)}`
                    darkCircle.backgroundColor = chakraTokenToCssVar('neutrals', 900)
                    darkCircle.border = `${BORDER_WIDTH_IN_PIXEL}px solid ${chakraTokenToCssVar(mappedColor._dark)}`
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
                          <div style={lightCircle} />
                          {withText && (
                            <Text color={chakraTokenToCssVar('neutrals', 800)} fontSize="small">
                              {colorValue.default}
                            </Text>
                          )}
                        </div>
                      </HStack>
                      <HStack>
                        <div style={darkPill}>
                          <div style={darkCircle} />
                          {withText && (
                            <Text color={chakraTokenToCssVar('neutrals', 'WHITE')} fontSize="small">
                              {colorValue._dark}
                            </Text>
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
