import { Heading } from '@chakra-ui/react';

export function Headings() {
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5'] as const

  return (
    <>
      {headings.map(heading => (
        <Heading as={heading} key={`header_${heading}`} >
          {heading.toUpperCase()} (Heading {heading[1]})
        </Heading>
      ))}
    </>
  )
}