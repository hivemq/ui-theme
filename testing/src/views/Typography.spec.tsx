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

import { describe, expect, it } from 'vitest'
import { render, screen } from '~/test/test-utils'
import { fontFamilies, semanticFontSizes, Typography, textVariants } from './Typography'

describe('Typography', () => {
  describe('Rendering', () => {
    it('should render every font family', () => {
      render(<Typography />)
      for (const family of fontFamilies) {
        expect(screen.getByText(`fonts.${family.token}`)).toBeInTheDocument()
      }
    })

    it('should render every semantic font size', () => {
      render(<Typography />)
      for (const size of semanticFontSizes) {
        expect(screen.getByText(size.sample)).toBeInTheDocument()
      }
    })

    it('should render every Text and Heading variant', () => {
      render(<Typography />)
      expect(screen.getAllByText('Session queue at 82%')).toHaveLength(textVariants.length)
    })
  })
})
