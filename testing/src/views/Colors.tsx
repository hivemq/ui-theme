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

import { Box, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { getAlphaContrastColor, getContrastColor } from '~/util/helper.ts'
import { colors as primitiveColors } from '../../../theme/src/colors/primitive-colors'

const checkerboardBg =
  'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)'
const checkerboardBgSize = '20px 20px'
const checkerboardBgPosition = '0 0, 0 10px, 10px -10px, -10px 0px'

// Fallback color for missing or invalid color values (neutral gray)
const DEFAULT_FALLBACK_COLOR = '#808080'

/**
 * A component that dynamically renders all color palettes and their shades from the theme.
 */
export function Colors() {
  return (
    <Box>
      {Object.entries(primitiveColors).map(([paletteName, shades]) => (
        <Box key={paletteName} as="section" mb={10}>
          <Heading
            as="h2"
            fontSize={24}
            mb={4}
            textTransform="capitalize"
            borderBottomWidth="2px"
            pb={2}
            color="text"
          >
            {paletteName}
          </Heading>
          <SimpleGrid columns={{ base: 4, sm: 5, md: 6, lg: 7, xl: 8 }} gap={4}>
            {Object.entries(shades).map(([shadeKey, colorObj]) => {
              const colorValue =
                (colorObj as Record<string, unknown> & { value?: string })?.value ||
                DEFAULT_FALLBACK_COLOR

              if (paletteName.includes('white') || paletteName.includes('black')) {
                const solidBgHex = paletteName === 'white' ? '#1F2937' : '#FFFFFF'
                const textColor = getAlphaContrastColor(colorValue, solidBgHex)

                return (
                  <Box
                    key={`${paletteName}-${shadeKey}`}
                    borderRadius="md"
                    borderWidth={'1px'}
                    overflow="hidden"
                    position="relative"
                    height="120px"
                  >
                    <HStack w="100%" h="100%" gap={0}>
                      <Box bg={solidBgHex} w="50%" h="100%" />
                      <Box
                        bg={checkerboardBg}
                        bgSize={checkerboardBgSize}
                        backgroundPosition={checkerboardBgPosition}
                        w="50%"
                        h="100%"
                      />
                    </HStack>

                    <Box position="absolute" top={0} left={0} w="100%" h="100%" bg={colorValue} />

                    <VStack
                      position="absolute"
                      top={0}
                      left={0}
                      w="100%"
                      h="100%"
                      p={4}
                      align="start"
                      justify="space-between"
                    >
                      <Text fontWeight="bold" color={textColor}>
                        {shadeKey}
                      </Text>
                    </VStack>
                  </Box>
                )
              }

              return (
                <Box
                  key={`${paletteName}-${shadeKey}`}
                  borderRadius="md"
                  borderWidth={'1px'}
                  bg={colorValue}
                  p={4}
                  height="120px"
                >
                  <VStack h="100%" align="start" justify="space-between">
                    <Text fontWeight="bold" color={getContrastColor(colorValue)}>
                      {shadeKey}
                    </Text>
                    <Text fontFamily="monospace" fontSize="sm" color={getContrastColor(colorValue)}>
                      {colorValue}
                    </Text>
                  </VStack>
                </Box>
              )
            })}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  )
}
