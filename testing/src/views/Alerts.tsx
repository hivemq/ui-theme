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

import { Alert, SegmentGroup, SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'
import { Section } from '~/components/layout/Section'

export const alertVariants = ['subtle', 'surface', 'outline', 'solid'] as const

type AlertVariant = (typeof alertVariants)[number]

export const alertExamples = [
  {
    status: 'info',
    title: 'Retained messages are replicated',
    description: 'New subscribers on factory/# receive the last value immediately.',
  },
  {
    status: 'success',
    title: 'Bridge to cloud-cluster connected',
    description: 'Forwarding 3 topic filters at QoS 1.',
  },
  {
    status: 'warning',
    title: 'Session queue at 82% capacity',
    description: 'Client edge-gw-07 is offline. Messages are dropped at 100%.',
  },
  {
    status: 'danger',
    title: 'TLS handshake failed',
    description:
      'The certificate for broker-2.eu expired on 21 Sep 2026. Upload a new one to reconnect.',
  },
] as const

/**
 * The four alert statuses, switchable between variants.
 */
export function Alerts() {
  const [variant, setVariant] = useState<AlertVariant>('subtle')

  return (
    <Section
      id="alerts"
      title="Alerts"
      description="Status messages inside a page. Use the palette that matches the status."
    >
      <SegmentGroup.Root
        size="sm"
        alignSelf="start"
        aria-label="Alert variant"
        value={variant}
        onValueChange={(details) => {
          if (details.value) {
            setVariant(details.value as AlertVariant)
          }
        }}
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Items items={[...alertVariants]} />
      </SegmentGroup.Root>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
        {alertExamples.map((example) => (
          <Alert.Root
            key={example.status}
            status={example.status === 'danger' ? 'error' : example.status}
            colorPalette={example.status}
            variant={variant}
          >
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>{example.title}</Alert.Title>
              <Alert.Description>{example.description}</Alert.Description>
            </Alert.Content>
          </Alert.Root>
        ))}
      </SimpleGrid>
    </Section>
  )
}
