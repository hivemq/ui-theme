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

import { Box, Button, Code, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { Section } from '~/components/layout/Section'
import { toaster } from '~/components/ui/toaster'

export const toastExamples = [
  {
    type: 'success',
    palette: 'success',
    title: 'Extension installed',
    description: 'hivemq-kafka-extension 4.3.0 is running on 3 nodes.',
  },
  {
    type: 'error',
    palette: 'danger',
    title: 'Publish rejected',
    description: 'Payload exceeds the 256 KB limit for topic sensors/raw.',
  },
  {
    type: 'warning',
    palette: 'warning',
    title: 'License expires in 14 days',
    description: 'Renew to keep more than 25 client connections.',
  },
  {
    type: 'info',
    palette: 'info',
    title: 'Maintenance window',
    description: 'Rolling restart of cluster eu-central starts at 02:00 UTC.',
  },
] as const

type ToastExample = (typeof toastExamples)[number]

function showToast(example: ToastExample) {
  toaster.create({
    type: example.type,
    title: example.title,
    description: example.description,
    duration: 5000,
    meta: { closable: true },
  })
}

/**
 * Toast types with a static preview of each and a button that fires the real toast.
 */
export function Toasts() {
  return (
    <Section
      id="toasts"
      title="Toasts"
      description={
        <>
          Each toast <Code size="sm">type</Code> maps to a palette's <Code size="sm">solid</Code>,{' '}
          <Code size="sm">contrast</Code> and <Code size="sm">emphasized</Code> tokens. The previews
          use the same styling as the toaster; the buttons show the real toast.
        </>
      }
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
        {toastExamples.map((example) => (
          <Stack key={example.type} gap={1.5}>
            <Box
              bg={`${example.palette}.solid`}
              color={`${example.palette}.contrast`}
              borderColor={`${example.palette}.emphasized`}
              borderWidth="1px"
              borderRadius="md"
              px={4}
              py={3}
              boxShadow="lg"
              data-testid="toast-preview"
            >
              <Text fontWeight="medium">{example.title}</Text>
              <Text fontSize="body">{example.description}</Text>
            </Box>
            <Text fontSize="caption" color="content.secondary">
              <Code size="sm">type="{example.type}"</Code> → {example.palette} palette
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
      <HStack gap={2.5} wrap="wrap">
        {toastExamples.map((example) => (
          <Button key={example.type} variant="outline" size="sm" onClick={() => showToast(example)}>
            Show {example.type} toast
          </Button>
        ))}
      </HStack>
    </Section>
  )
}
