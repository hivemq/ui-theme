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

import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const base = defineStyle({})

const external = defineStyle({})

const variants = {
  base,
  external,
}

export const linkTheme = defineStyleConfig({
  baseStyle: {
    fontSize: '1rem',
    textDecoration: 'underline',
    fontWeight: 500,
    cursor: 'pointer !important',
    _hover: {
      cursor: 'pointer !important',
    },
    color: 'text.text-accent-strong.light',
  },
  variants,
})
