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

import { Box, chakra, HStack, Text, useClipboard } from '@chakra-ui/react'

interface SwatchProps {
  /** Token path copied on click, e.g. `colors.gray.50` */
  token: string
  /** CSS background of the chip */
  background: string
  label: string
  caption: string
  usedBy?: string[]
}

// The theme's bg.muted points at black.200 / white.200, which aren't emitted as CSS variables,
// so page chrome uses Chakra's built-in alpha colors for the same 8% tint instead.
export const subtleFill = { base: 'blackAlpha.200', _dark: 'whiteAlpha.200' }
export const hairline = {
  base: 'inset 0 0 0 1px var(--chakra-colors-black-alpha-200)',
  _dark: 'inset 0 0 0 1px var(--chakra-colors-white-alpha-200)',
}

/**
 * A color chip that copies its token path when clicked.
 */
export function Swatch({ token, background, label, caption, usedBy }: SwatchProps) {
  const clipboard = useClipboard({ value: token, timeout: 1500 })
  const isUsed = Boolean(usedBy?.length)
  const title = isUsed ? `${token}\nUsed by: ${usedBy?.join(', ')}` : token

  return (
    <chakra.button
      type="button"
      onClick={clipboard.copy}
      aria-label={`Copy ${token}`}
      title={title}
      display="grid"
      gap={1}
      textAlign="left"
      borderRadius="md"
      cursor="pointer"
      _focusVisible={{
        outline: '2px solid',
        outlineColor: 'brand.focusRing',
        outlineOffset: '2px',
      }}
      css={{
        '&:hover .swatch-chip': {
          boxShadow: 'inset 0 0 0 2px var(--chakra-colors-border-emphasized)',
        },
      }}
    >
      <Box
        className="swatch-chip"
        h={10}
        borderRadius="sm"
        background={background}
        boxShadow={hairline}
      />
      <HStack gap={1} fontSize="xs" fontWeight="medium" color="content.primary">
        <span>{label}</span>
        {isUsed && (
          <Box as="span" boxSize={1.5} borderRadius="full" bg="brand.fg" aria-hidden="true" />
        )}
      </HStack>
      <Text fontFamily="mono" fontSize="2xs" color="content.secondary" textTransform="uppercase">
        {clipboard.copied ? 'Copied' : caption}
      </Text>
    </chakra.button>
  )
}
