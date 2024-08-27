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

import * as colors from '@/../../theme/src/foundations/colors'
import { chakraTokenToCssVar } from '@/../../theme/src/utils'
import { HStack, Heading, Text, VStack } from '@chakra-ui/react'
import copy from 'copy-to-clipboard'

const BORDER_WIDTH_IN_PIXEL = 2

export function Colors({ withText = false }: { withText?: boolean }) {
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
                    backgroundColor: chakraTokenToCssVar(_key, weight),
                    width: ELEMENT_WIDTH,
                    height: ELEMENT_WIDTH,
                  }

                  return (
                    <VStack
                      alignItems="start"
                      gap={1}
                      key={_key + weight}
                      onClick={() =>
                        copy(colorValue, {
                          message: `Color ${colorValue} copied.`,
                        })
                      }
                    >
                      <div style={styles} />
                      {withText && (
                        <div>
                          <Text fontFamily="monospace" fontSize="xs">
                            {_key}.{weight}
                          </Text>
                          <Text fontFamily="monospace" fontSize="xs" color={colors.neutrals['500']}>
                            {colorValue}
                          </Text>
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
