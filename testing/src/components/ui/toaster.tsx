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

'use client'

import { Toaster as ChakraToaster, Portal, Spinner, Stack, Toast, createToaster } from '@chakra-ui/react'

export const toaster = createToaster({
	placement: 'bottom-start',
	pauseOnPageIdle: true,
})

// Map toast types to semantic color palettes
const getColorPalette = (type?: string) => {
	switch (type) {
		case 'success':
			return 'success'
		case 'error':
			return 'danger'
		case 'warning':
			return 'warning'
		case 'info':
			return 'info'
		default:
			return 'brand'
	}
}

export const Toaster = () => {
	return (
		<Portal>
			<ChakraToaster toaster={toaster}>
				{(toast) => {
					const colorPalette = getColorPalette(toast.type)
					return (
						<Toast.Root
							type={toast.type}
							bg={`${colorPalette}.solid`}
							color={`${colorPalette}.contrast`}
							borderColor={`${colorPalette}.emphasized`}
							borderWidth="1px"
							borderRadius="md"
							padding="4"
							minWidth="xs"
							maxWidth="md"
							boxShadow="lg"
						>
							{toast.type === 'loading' && <Spinner size="sm" color="blue.solid" />}
							{toast.type !== 'loading' && <Toast.Indicator />}
							<Stack gap="1" flex="1" maxWidth="100%">
								{toast.title && <Toast.Title>{toast.title}</Toast.Title>}
								{toast.description && <Toast.Description>{toast.description}</Toast.Description>}
							</Stack>
							{toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
							{toast.meta?.closable && <Toast.CloseTrigger />}
						</Toast.Root>
					)
				}}
			</ChakraToaster>
		</Portal>
	)
}
