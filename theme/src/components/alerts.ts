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

import { alertAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  alertAnatomy.keys,
)

const success = definePartsStyle({
  container: {
    background: 'background.bg-success',
    borderColor: 'border.border-success-strong',
    color: 'text.text-success',
  },
  icon: {
    color: 'icon.icon-success',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-success',
  },
})

const error = definePartsStyle({
  container: {
    background: 'background.bg-error',
    borderColor: 'border.border-error-strong',
    color: 'text.text-error',
  },
  icon: {
    color: 'icon.icon-error',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-error',
  },
})

const warning = definePartsStyle({
  container: {
    background: 'background.bg-warning',
    borderColor: 'border.border-warning-strong',
    color: 'text.text-warning',
  },
  icon: {
    color: 'icon.icon-warning',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-warning',
  },
})

const info = definePartsStyle({
  container: {
    background: 'background.bg-info',
    borderColor: 'border.border-info-strong',
    color: 'text.text-info',
  },
  icon: {
    color: 'icon.icon-info',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'text.text-info',
  },
})

const variants = {
  success,
  error,
  warning,
  info,
}

const baseStyle = definePartsStyle({
  container: {
    borderRadius: 'md',
    borderWidth: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem',
  },
  icon: {
    marginRight: '0.5rem',
    width: '24px',
  },
  title: {
    marginRight: '0.5rem',
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
  },
})

export const alertTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'info',
    size: 'md',
  },
})
