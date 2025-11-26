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

import type { ButtonProps } from '@chakra-ui/react'
import { Clipboard as ChakraClipboard, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { LuCheck, LuClipboard } from 'react-icons/lu'

const ClipboardIcon = React.forwardRef<HTMLDivElement, ChakraClipboard.IndicatorProps>(
  function ClipboardIcon(props, ref) {
    return (
      <ChakraClipboard.Indicator copied={<LuCheck />} {...props} ref={ref}>
        <LuClipboard />
      </ChakraClipboard.Indicator>
    )
  },
)

const ClipboardCopyText = React.forwardRef<HTMLDivElement, ChakraClipboard.IndicatorProps>(
  function ClipboardCopyText(props, ref) {
    return (
      <ChakraClipboard.Indicator copied="Copied" {...props} ref={ref}>
        Copy
      </ChakraClipboard.Indicator>
    )
  },
)

export const ClipboardIconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ClipboardIconButton(props, ref) {
    return (
      <ChakraClipboard.Trigger asChild>
        <IconButton ref={ref} size="xs" variant="subtle" {...props}>
          <ClipboardIcon />
          <ClipboardCopyText srOnly />
        </IconButton>
      </ChakraClipboard.Trigger>
    )
  },
)

export const ClipboardRoot = ChakraClipboard.Root
