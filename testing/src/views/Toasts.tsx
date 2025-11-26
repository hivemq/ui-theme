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

import { Box, Button, Heading, Table } from '@chakra-ui/react'
import { toaster } from '~/components/ui/toaster'

const toastTypes = ['success', 'error', 'warning', 'info'] as const

type ToastType = (typeof toastTypes)[number]

const toastContent: Record<ToastType, { title: string; description: string }> = {
  success: {
    title: 'Success',
    description: 'Your operation completed successfully.',
  },
  error: {
    title: 'Error',
    description: 'An error occurred while processing your request.',
  },
  warning: {
    title: 'Warning',
    description: 'Please review the following warning message.',
  },
  info: {
    title: 'Information',
    description: 'Here is some important information for you.',
  },
}

export function Toasts() {
  const handleShowToast = (type: ToastType) => {
    const content = toastContent[type]
    toaster.create({
      type,
      title: content.title,
      description: content.description,
      duration: 5000,
      meta: { closable: true },
    })
  }

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        Toast Notifications
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" overflowX="auto">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Type</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
              <Table.ColumnHeader>Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {toastTypes.map((type) => (
              <Table.Row key={type}>
                <Table.Cell textTransform="capitalize" fontWeight="medium">
                  {type}
                </Table.Cell>
                <Table.Cell>{toastContent[type].description}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleShowToast(type)} size="sm" variant="outline">
                    Show {type} toast
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  )
}
