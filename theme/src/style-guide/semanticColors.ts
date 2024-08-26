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

// Colors in this file MUST reference dot-separated foundation color names
// e.g. 'neutrals.50'

import { themedColors } from '../utils'
import type { ColorInCategory } from './types'

export const background: ColorInCategory = {
  // Page
  'bg-page-body': themedColors('neutrals.50', 'neutrals.950'),
  'bg-main-container': themedColors('neutrals.WHITE', 'neutrals.900'),
  // Global
  'bg-base': themedColors('neutrals.WHITE', 'neutrals.800'),
  'bg-subtle': themedColors('neutrals.50', 'neutrals.900'),
  'bg-secondary': themedColors('neutrals.100', 'neutrals.700'),
  'bg-active': themedColors('neutrals.WHITE', 'neutrals.800'),
  'bg-active-hover': themedColors('neutrals.50', 'neutrals.700'),
  'bg-inactive': themedColors('neutrals.50', 'neutrals.900'),
  'bg-inverse': themedColors('neutrals.900', 'neutrals.WHITE'),
  // Brand
  'bg-brand': themedColors('amber.300', 'amber.300'),
  'bg-brand-hover': themedColors('amber.400', 'amber.400'),
  'bg-brand-focus': themedColors('amber.alpha', 'amber.alpha'),
  // Accent
  'bg-accent': themedColors('blue.300', 'blue.400'),
  'bg-accent-hover': themedColors('blue.400', 'blue.300'),
  'bg-accent-focus': themedColors('amber.alpha', 'amber.alpha'),
  // Accent-2
  'bg-accent-2': themedColors('purple.300', 'purple.400'),
  'bg-accent-2-hover': themedColors('purple.400', 'purple.300'),
  'bg-accent-2-focus': themedColors('purple.alpha', 'purple.alpha'),
  // Info
  'bg-info': themedColors('blue.100', 'blue.600'),
  'bg-info-subtle': themedColors('blue.50', 'blue.700'),
  // Error
  'bg-error': themedColors('red.100', 'red.600'),
  'bg-error-subtle': themedColors('red.50', 'red.700'),
  // Success
  'bg-success': themedColors('green.100', 'green.600'),
  'bg-success-subtle': themedColors('green.50', 'green.700'),
  // Success
  'bg-warning': themedColors('orange.100', 'orange.600'),
  'bg-warning-subtle': themedColors('orange.50', 'orange.700'),
}

export const border: ColorInCategory = {
  // Global
  'border-base': themedColors('neutrals.200', 'neutrals.700'),
  'border-subtle': themedColors('neutrals.100', 'neutrals.800'),
  'border-strong': themedColors('neutrals.300', 'neutrals.600'),
  'border-inactive': themedColors('neutrals.100', 'neutrals.800'),
  // Brand
  'border-brand': themedColors('amber.300', 'amber.300'),
  // Info
  'border-info': themedColors('blue.200', 'blue.500'),
  'border-info-strong': themedColors('blue.400', 'blue.300'),
  // Error
  'border-error': themedColors('red.200', 'red.500'),
  'border-error-strong': themedColors('red.400', 'red.300'),
  // Success
  'border-success': themedColors('green.200', 'green.500'),
  'border-success-strong': themedColors('green.400', 'green.300'),
  // Warning
  'border-warning': themedColors('orange.200', 'orange.500'),
  'border-warning-strong': themedColors('orange.400', 'orange.300'),
}

export const icon: ColorInCategory = {
  'icon-base': themedColors('neutrals.900', 'neutrals.50'),
  'icon-subtle': themedColors('neutrals.600', 'neutrals.400'),
  'icon-strong': themedColors('neutrals.950', 'neutrals.WHITE'),
  'icon-inactive': themedColors('neutrals.400', 'neutrals.600'),
  'icon-on-color': themedColors('neutrals.WHITE', 'neutrals.WHITE'),
  'icon-on-brand': themedColors('neutrals.900', 'neutrals.900'),
  // Info
  'icon-info': themedColors('blue.600', 'blue.100'),
  'icon-info-strong': themedColors('blue.400', 'blue.300'),
  // Error
  'icon-error': themedColors('red.600', 'red.100'),
  'icon-error-strong': themedColors('red.400', 'red.300'),
  // Success
  'icon-success': themedColors('green.600', 'green.100'),
  'icon-success-strong': themedColors('green.400', 'green.300'),
  // Warning
  'icon-warning': themedColors('orange.600', 'orange.100'),
  'icon-warning-strong': themedColors('orange.400', 'orange.300'),
}

export const text: ColorInCategory = {
  'text-base': themedColors('neutrals.900', 'neutrals.50'),
  'text-subtle': themedColors('neutrals.600', 'neutrals.400'),
  'text-strong': themedColors('neutrals.950', 'neutrals.WHITE'),
  'text-inactive': themedColors('neutrals.400', 'neutrals.700'),
  'text-on-color': themedColors('neutrals.WHITE', 'neutrals.WHITE'),
  'text-on-brand': themedColors('neutrals.900', 'neutrals.900'),
  // Brand
  'text-brand': themedColors('amber.600', 'amber.100'),
  'text-brand-hover': themedColors('amber.400', 'amber.300'),
  // Accent
  'text-accent': themedColors('blue.600', 'blue.100'),
  'text-accent-strong': themedColors('blue.400', 'blue.300'),
  // Error
  'text-error': themedColors('red.600', 'red.100'),
  'text-error-strong': themedColors('red.400', 'red.300'),
  // Success
  'text-success': themedColors('green.600', 'green.100'),
  // Warning
  'text-warning': themedColors('orange.600', 'orange.100'),
}
