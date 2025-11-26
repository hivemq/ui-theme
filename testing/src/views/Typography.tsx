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

import { Box, Code, Heading, HStack, Stack, Table, Text } from '@chakra-ui/react'
import { ClipboardIconButton, ClipboardRoot } from '~/components/ui/clipboard'

const CodeWithCopy = ({ children }: { children: string }) => {
	return (
		<ClipboardRoot value={children}>
			<HStack gap={1} alignItems="center">
				<Code>{children}</Code>
				<ClipboardIconButton size="2xs" />
			</HStack>
		</ClipboardRoot>
	)
}

const headingSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'] as const

const textSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'] as const

const headingVariants = [
	'default',
	'muted',
	'subtle',
	'danger',
	'warning',
	'success',
	'info',
	'brand',
] as const

const textVariants = ['default', 'muted', 'subtle', 'danger', 'warning', 'success', 'info'] as const

const fontFamilies = [
	{ name: 'Heading Font', token: 'heading', example: 'Raleway, Roboto, sans-serif' },
	{ name: 'Body Font', token: 'body', example: 'Roboto, Segoe UI, sans-serif' },
	{ name: 'Monospace Font', token: 'mono', example: 'IntelOne Mono, Consolas, monospace' },
] as const

export function Typography() {
	return (
		<Box>
			{/* Font Families Section */}
			<Box as="section" mb={16}>
				<Heading as="h2" size="xl" mb={6}>
					Font Families
				</Heading>
				<Box borderWidth="1px" borderRadius="lg" overflowX="auto">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeader>Type</Table.ColumnHeader>
								<Table.ColumnHeader>Token</Table.ColumnHeader>
								<Table.ColumnHeader>Example</Table.ColumnHeader>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{fontFamilies.map((font) => (
								<Table.Row key={font.token}>
									<Table.Cell fontWeight="bold">{font.name}</Table.Cell>
									<Table.Cell>
										<Code>fonts.{font.token}</Code>
									</Table.Cell>
									<Table.Cell>
										<Text fontFamily={font.token} fontSize="lg">
											The quick brown fox jumps over the lazy dog
										</Text>
										<Text fontSize="xs" color="content.secondary" mt={1}>
											{font.example}
										</Text>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table.Root>
				</Box>
			</Box>

			{/* Heading Sizes Section */}
			<Box as="section" mb={16}>
				<Heading as="h2" size="xl" mb={6}>
					Heading Sizes
				</Heading>
				<Box borderWidth="1px" borderRadius="lg" overflowX="auto">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeader>Size</Table.ColumnHeader>
								<Table.ColumnHeader>Example</Table.ColumnHeader>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{headingSizes.map((size) => (
								<Table.Row key={size}>
									<Table.Cell>
										<Code>{size}</Code>
									</Table.Cell>
									<Table.Cell>
										<Heading size={size}>Heading {size}</Heading>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table.Root>
				</Box>
			</Box>

			{/* Heading Variants Section */}
			<Box as="section" mb={16}>
				<Heading as="h2" size="xl" mb={6}>
					Heading Variants (Semantic Colors)
				</Heading>
				<Box borderWidth="1px" borderRadius="lg" overflowX="auto">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeader>Variant</Table.ColumnHeader>
								<Table.ColumnHeader>Example</Table.ColumnHeader>
								<Table.ColumnHeader>Color Token</Table.ColumnHeader>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{headingVariants.map((variant) => (
								<Table.Row key={variant}>
									<Table.Cell fontWeight="bold" textTransform="capitalize">
										{variant}
									</Table.Cell>
									<Table.Cell>
										<Heading
											size="lg"
											color={variant === 'default' ? 'content.primary' : `content.${variant}`}
										>
											{variant === 'default' ? 'Default Heading' : `${variant} Heading`}
										</Heading>
									</Table.Cell>
									<Table.Cell>
										<CodeWithCopy>{`content.${variant === 'default' ? 'primary' : variant}`}</CodeWithCopy>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table.Root>
				</Box>
			</Box>

			{/* Text Sizes Section */}
			<Box as="section" mb={16}>
				<Heading as="h2" size="xl" mb={6}>
					Text Sizes
				</Heading>
				<Box borderWidth="1px" borderRadius="lg" overflowX="auto">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeader>Size</Table.ColumnHeader>
								<Table.ColumnHeader>Example</Table.ColumnHeader>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{textSizes.map((size) => (
								<Table.Row key={size}>
									<Table.Cell>
										<Code>{size}</Code>
									</Table.Cell>
									<Table.Cell>
										<Text fontSize={size}>Text size {size}</Text>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table.Root>
				</Box>
			</Box>

			{/* Text Variants Section */}
			<Box as="section" mb={16}>
				<Heading as="h2" size="xl" mb={6}>
					Text Variants (Semantic Colors)
				</Heading>
				<Box borderWidth="1px" borderRadius="lg" overflowX="auto">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeader>Variant</Table.ColumnHeader>
								<Table.ColumnHeader>Example</Table.ColumnHeader>
								<Table.ColumnHeader>Color Token</Table.ColumnHeader>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{textVariants.map((variant) => (
								<Table.Row key={variant}>
									<Table.Cell fontWeight="bold" textTransform="capitalize">
										{variant}
									</Table.Cell>
									<Table.Cell>
										<Text color={variant === 'default' ? 'content.primary' : `content.${variant}`}>
											This is {variant === 'default' ? 'default' : variant} text. Lorem ipsum
											dolor sit amet, consectetur adipiscing elit.
										</Text>
									</Table.Cell>
									<Table.Cell>
										<CodeWithCopy>{`content.${variant === 'default' ? 'primary' : variant}`}</CodeWithCopy>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table.Root>
				</Box>
			</Box>

			{/* Combined Example Section */}
			<Box as="section" mb={16}>
				<Heading as="h2" size="xl" mb={6}>
					Combined Example
				</Heading>
				<Box borderWidth="1px" borderRadius="lg" p={6}>
					<Stack gap={4}>
						<Heading size="3xl">Main Title (3xl)</Heading>
						<Heading size="xl" color="content.secondary">
							Subtitle with muted variant <Code>content.secondary</Code>
						</Heading>
						<Text>
							This is default body text using the Roboto font family. It demonstrates how regular
							paragraphs look with the theme's default styling.
						</Text>
						<Text color="content.secondary">
							This is muted text <Code>content.secondary</Code>, useful for secondary information or
							descriptions.
						</Text>
						<Text color="content.tertiary">
							This is subtle text <Code>content.tertiary</Code>, for less important details.
						</Text>
						<Stack gap={2}>
							<Text color="content.danger">
								Danger/Error message <Code>content.danger</Code>
							</Text>
							<Text color="content.warning">
								Warning message <Code>content.warning</Code>
							</Text>
							<Text color="content.success">
								Success message <Code>content.success</Code>
							</Text>
							<Text color="content.info">
								Info message <Code>content.info</Code>
							</Text>
						</Stack>
						<Code>const example = "Monospace code text";</Code>
					</Stack>
				</Box>
			</Box>
		</Box>
	)
}
