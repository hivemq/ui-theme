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

import { Heading, Stack, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  description?: ReactNode
  children: ReactNode
}

/**
 * An anchored page section. The `id` is the target of the side navigation links.
 */
export function Section({ id, title, description, children }: SectionProps) {
  return (
    <Stack
      as="section"
      id={id}
      aria-labelledby={`${id}-title`}
      gap={5}
      py={10}
      borderTopWidth="1px"
      borderColor="border"
      scrollMarginTop={16}
      _first={{ borderTopWidth: 0, pt: 4 }}
    >
      <Stack gap={1.5}>
        <Heading as="h2" id={`${id}-title`} fontSize="header" fontWeight="bold" lineHeight="short">
          {title}
        </Heading>
        {description && (
          <Text color="content.secondary" maxW="68ch">
            {description}
          </Text>
        )}
      </Stack>
      {children}
    </Stack>
  )
}

interface SubheadingProps {
  children: ReactNode
}

export function Subheading({ children }: SubheadingProps) {
  return (
    <Heading as="h3" fontSize="subtitle" fontWeight="bold" lineHeight="short" mt={2}>
      {children}
    </Heading>
  )
}
