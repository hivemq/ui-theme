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

import { Table } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface DataTableProps {
  /** Width below which the table scrolls sideways inside its own container */
  minW: string
  children: ReactNode
}

/**
 * The page's reference table: small rows, quiet uppercase column headers,
 * and horizontal scrolling on narrow screens instead of squeezing columns.
 */
export function DataTable({ minW, children }: DataTableProps) {
  return (
    <Table.ScrollArea>
      <Table.Root
        size="sm"
        minW={minW}
        css={{
          // Chakra paints rows with its own `bg` token (white / near-black), which the theme
          // doesn't override, so rows are cleared to sit on the page's bg.default instead
          '& tr': {
            bg: 'transparent',
          },
          // A faint header band: the page's alpha tint, one step lighter (6%) than swatch rings and hovers
          '& thead tr': {
            bg: { base: 'blackAlpha.100', _dark: 'whiteAlpha.100' },
          },
          '& th': {
            fontSize: 'xs',
            fontWeight: 'medium',
            letterSpacing: 'wider',
            textTransform: 'uppercase',
            color: 'content.secondary',
            whiteSpace: 'nowrap',
          },
        }}
      >
        {children}
      </Table.Root>
    </Table.ScrollArea>
  )
}
