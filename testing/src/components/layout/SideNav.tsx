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

import { Box, Link, Stack, Text } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { subtleFill } from '~/components/layout/Swatch'
import { useScrollSpy } from '~/hooks/useScrollSpy'

export interface NavGroup {
  label: string
  items: { id: string; label: string }[]
}

interface SideNavProps {
  groups: NavGroup[]
}

/**
 * Section navigation. A sticky column on large screens, a horizontal strip below that.
 */
export function SideNav({ groups }: SideNavProps) {
  const ids = groups.flatMap((group) => group.items.map((item) => item.id))
  const activeId = useScrollSpy(ids)
  const navRef = useRef<HTMLElement>(null)

  // In the horizontal strip (small screens), keep the current section's link in view
  useEffect(() => {
    const nav = navRef.current
    const link = nav?.querySelector<HTMLElement>(`a[href="#${activeId}"]`)
    if (!nav || !link || nav.scrollWidth <= nav.clientWidth) {
      return
    }
    const linkLeft = link.getBoundingClientRect().left - nav.getBoundingClientRect().left
    nav.scrollTo({ left: nav.scrollLeft + linkLeft - (nav.clientWidth - link.offsetWidth) / 2 })
  }, [activeId])

  return (
    <Box
      ref={navRef}
      as="nav"
      aria-label="Sections"
      position="sticky"
      top={0}
      zIndex="sticky"
      alignSelf="start"
      bg="bg.default"
      display="flex"
      flexDirection={{ base: 'row', lg: 'column' }}
      gap={{ base: 1, lg: 5 }}
      overflowX={{ base: 'auto', lg: 'visible' }}
      py={{ base: 2, lg: 10 }}
      borderBottomWidth={{ base: '1px', lg: 0 }}
      borderColor="border"
    >
      {groups.map((group) => (
        <Stack key={group.label} direction={{ base: 'row', lg: 'column' }} gap={0.5}>
          <Text
            display={{ base: 'none', lg: 'block' }}
            fontSize="caption"
            fontWeight="medium"
            letterSpacing="wider"
            textTransform="uppercase"
            color="content.tertiary"
            px={2.5}
            pb={1}
          >
            {group.label}
          </Text>
          {group.items.map((item) => {
            const isActive = item.id === activeId
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                px={2.5}
                py={1}
                borderRadius="sm"
                fontSize="body"
                whiteSpace="nowrap"
                textDecoration="none"
                color={isActive ? 'content.primary' : 'content.secondary'}
                fontWeight={isActive ? 'medium' : 'normal'}
                bg={isActive ? 'brand.subtle' : 'transparent'}
                _hover={{ color: 'content.primary', bg: isActive ? 'brand.subtle' : subtleFill }}
              >
                {item.label}
              </Link>
            )
          })}
        </Stack>
      ))}
    </Box>
  )
}
