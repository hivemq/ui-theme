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

import { Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { config } from '@hivemq/ui-theme'

export type ColorCategory = 'background' | 'border' | 'icon' | 'text'

export type ThemedColors = {
  default: string
  _dark: string
}

export type ColorInCategory = Record<string, ThemedColors>

export type ColorsInCategories = Record<ColorCategory, ColorInCategory>

// Note: Chakra UI's system.token API can be used to access token values and CSS variables,

/*
import { defaultSystem as system } from "@chakra-ui/react";

// raw token
system.token("colors.red.200");
// => "#EE0F0F"

// css variable
system.token.var("colors.red.200");
// => "var(--chakra-colors-red-200)"

// semantic token
system.token("colors.danger");
// => "var(--chakra-colors-danger)"

system.token.var("colors.danger");
// => "var(--chakra-colors-danger)"

system.tokens.getVar("colors.red.200");

system.tokens.expandReferenceInValue("3px solid {colors.red.200}");
// => "3px solid var(--chakra-colors-red-200)"
*/

// https://www.chakra-ui.com/docs/theming/semantic-tokens
const semanticColors = config.theme?.semanticTokens?.colors || {}

export function SemanticColors({ withText = false }: { withText?: boolean }) {
  const columnStyle = {
    border: '1px solid gray',
    borderRadius: 12,
    padding: 20,
  }

  return (
    <HStack alignItems="start" gap={withText ? 8 : 2}>
      {Object.entries(semanticColors).map(([category, value]) => {
        return (
          <VStack alignItems="start" style={columnStyle} key={category + value}>
            <Heading as="h2" marginBottom="4">
              {category}
            </Heading>

            <VStack alignItems="start">
              {Object.entries(value).map(([colorName, colorValue]) => {
                return (
                  <HStack alignItems="center" gap={2} key={category + colorName}>
                    {withText && (
                      <Text fontFamily="monospace" minWidth="150" fontSize="small">
                        {colorName}
                      </Text>
                    )}
                    <HStack>
                      <div>
                        <div />
                        {withText && <Text fontSize="small">{colorValue}</Text>}
                      </div>
                    </HStack>
                    <HStack>
                      <div>
                        <div />
                        {withText && <Text fontSize="small">{colorValue._dark}</Text>}
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
  )
}
