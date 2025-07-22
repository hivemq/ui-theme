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

import {config} from '@hivemq/ui-theme';
import {Box, Flex, Heading, Text, VStack} from '@chakra-ui/react';
import {ChildProps} from '~/App.tsx';

const semanticTokens = config.theme?.semanticTokens?.colors || {};
const semanticTokenGroups = Object.keys(semanticTokens);

/**
 * A helper function to resolve theme token references (e.g., '{colors.gray.50}')
 * to their actual color value from the theme config.
 */
const resolveTokenValue = (tokenRef: string | undefined): string => {
  if (!tokenRef || !tokenRef.startsWith('{') || !tokenRef.endsWith('}')) {
    return tokenRef || '';
  }
  const path = tokenRef.slice(1, -1).split('.'); // e.g., ['colors', 'gray', '50']
  let current: any = config.theme?.tokens;
  for (const key of path) {
    if (current === undefined) return tokenRef;
    current = current[key];
  }
  return current?.value || tokenRef;
};

/**
 * A component that renders color swatches for each semantic color palette.
 */
export function SemanticTokens({isDarkMode}: ChildProps) {
  return (
    <Box>
      {semanticTokenGroups.map((colorName) => {
        const colorTokens = semanticTokens[colorName];

        if (typeof colorTokens !== 'object' || colorTokens === null) {
          return null;
        }

        const tokenSuffixes = Object.keys(colorTokens);

        return (
          <Box key={colorName} as="section" mb={12}>
            <Heading
              as="h2"
              size="xl"
              mb={6}
              textTransform="capitalize"
              borderBottomWidth="2px"
              borderColor="border.default"
              pb={2}
            >
              {colorName}
            </Heading>
            <Flex wrap="wrap" gap={6}>
              {tokenSuffixes.map((tokenSuffix) => {
                const fullTokenName = `${colorName}.${tokenSuffix}`;

                // @ts-ignore
                const tokenDefinition = colorTokens[tokenSuffix]?.value;
                if (!tokenDefinition) return null;

                const tokenRef = isDarkMode ? tokenDefinition._dark || tokenDefinition.base : tokenDefinition.base;

                const finalColorValue = resolveTokenValue(tokenRef);

                let displayValue = tokenRef;
                if (typeof displayValue === 'string' && displayValue.startsWith('{') && displayValue.endsWith('}')) {
                  displayValue = displayValue.slice(1, -1);
                }

                return (
                  <VStack key={fullTokenName} gap={1} align="flex-start">
                    <Box
                      w="120px"
                      h="80px"
                      bg={finalColorValue}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="border.default"
                    />
                    <Box>
                      <Text fontSize="sm" fontWeight="medium">
                        {fullTokenName}
                      </Text>
                      <Text fontSize="xs" color="fg.muted">
                        {displayValue}
                      </Text>
                    </Box>
                  </VStack>
                );
              })}
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
}
