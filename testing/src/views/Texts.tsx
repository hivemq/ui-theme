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

import { Box, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react'

const sampleText = 'The Force will be with you, always.'

type DisplayTextOptions = {
  fontSize?: boolean
  variant?: boolean
}

function displayText(
  title: string,
  sizes: readonly string[],
  options: DisplayTextOptions = { fontSize: false, variant: true },
) {
  return (
    <>
      <VStack
        alignItems="start"
        border="1px solid {colors.secondary.300}"
        borderRadius={12}
        padding={20}
      >
        <Heading as="h2">
          {title}
          {options.fontSize && (
            <Text as="span" color="red">
              {' '}
              (Don't)
            </Text>
          )}
          {options.variant && (
            <Text as="span" color="green">
              {' '}
              (Do)
            </Text>
          )}
        </Heading>
        {sizes.map((size) => (
          <Box key={`box-${size}`}>
            <Heading as="h3">{size}</Heading>
            {options.fontSize && (
              <Box>
                <Heading as="h4">{`<Text fontSize='${size}'>`}</Heading>
                <Text fontSize={size} key={`text_${size}`} marginBottom="4" color="red">
                  {sampleText}
                </Text>
              </Box>
            )}
            {options.variant && (
              <Box>
                <Heading as="h4">{`<Text variant='${size}'>`}</Heading>
                <Text fontSize={size} key={`text3_${size}`} mt="1" mb="4" color="green">
                  {sampleText}
                </Text>
              </Box>
            )}
          </Box>
        ))}
      </VStack>
    </>
  )
}

export function Texts() {
  const chakraSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
  const paragraphs = ['P1', 'P2', 'P3', 'P4', 'P5'] as const
  const labels = ['L1', 'L2'] as const
  const buttons = ['B1', 'B2'] as const
  const metrics = ['M1', 'M2'] as const

  return (
    <>
      <HStack alignItems="start" gap={8}>
        {displayText('Chakra Sizes', chakraSizes, { fontSize: true })}
        {displayText('Paragraphs', paragraphs)}
        {displayText('Labels', labels)}
        {displayText('Buttons', buttons)}
        {displayText('Metrics', metrics)}
      </HStack>

      <Heading as="h2">Examples</Heading>

      <Flex flexDirection="column" gap={1}>
        <Heading as="h3">This is an H3 heading</Heading>
        <Text fontSize="lg">This P1 paragraph goes well with an H3 heading.</Text>
      </Flex>

      <Flex flexDirection="column" gap={1}>
        <Heading as="h4">This is an H4 heading</Heading>
        <Text fontSize="2xl">This P2 paragraph goes well with an H4 heading.</Text>
      </Flex>

      <Flex flexDirection="column" gap={1}>
        <Heading as="h5">This is an H5 heading</Heading>
        <Text fontSize="3xl">This P3 paragraph goes well with an H5 heading.</Text>
      </Flex>
    </>
  )
}
