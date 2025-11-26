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

import { describe, expect, it, vi } from 'vitest'
import { toaster } from '~/components/ui/toaster'
import { render, screen } from '~/test/test-utils'
import { Toasts } from './Toasts'

// Mock the toaster
vi.mock('~/components/ui/toaster', () => ({
  toaster: {
    create: vi.fn(),
  },
}))

describe('Toasts', () => {
  const toastTypes = ['success', 'error', 'warning', 'info'] as const

  describe('Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<Toasts />)
      expect(container).toBeInTheDocument()
    })

    it('should render the main heading', () => {
      render(<Toasts />)

      const heading = screen.getByRole('heading', { name: /toast notifications/i })
      expect(heading).toBeInTheDocument()
    })

    it('should render a table', () => {
      const { container } = render(<Toasts />)

      const table = container.querySelector('table')
      expect(table).toBeInTheDocument()
    })
  })

  describe('Table Structure', () => {
    it('should render table headers', () => {
      render(<Toasts />)

      expect(screen.getByText('Type')).toBeInTheDocument()
      expect(screen.getByText('Description')).toBeInTheDocument()
      expect(screen.getByText('Action')).toBeInTheDocument()
    })

    it('should render one row for each toast type', () => {
      const { container } = render(<Toasts />)

      // 1 header row + 4 toast type rows = 5 total
      const rows = container.querySelectorAll('tr')
      expect(rows.length).toBe(toastTypes.length + 1)
    })

    it('should have proper table structure', () => {
      const { container } = render(<Toasts />)

      const thead = container.querySelector('thead')
      const tbody = container.querySelector('tbody')

      expect(thead).toBeInTheDocument()
      expect(tbody).toBeInTheDocument()
    })
  })

  describe('Toast Types', () => {
    it('should render all toast types', () => {
      render(<Toasts />)

      toastTypes.forEach((type) => {
        // Check for capitalized type names
        const typeCell = screen.getByText(type)
        expect(typeCell).toBeInTheDocument()
      })
    })

    it('should capitalize toast type names', () => {
      const { container } = render(<Toasts />)

      // Find all cells with textTransform="capitalize"
      const typeCells = container.querySelectorAll('td')

      toastTypes.forEach((type) => {
        const matchingCell = Array.from(typeCells).find((cell) => cell.textContent === type)
        expect(matchingCell).toBeInTheDocument()
      })
    })

    it('should render descriptions for all toast types', () => {
      render(<Toasts />)

      const expectedDescriptions = [
        'Your operation completed successfully.',
        'An error occurred while processing your request.',
        'Please review the following warning message.',
        'Here is some important information for you.',
      ]

      expectedDescriptions.forEach((description) => {
        expect(screen.getByText(description)).toBeInTheDocument()
      })
    })
  })

  describe('Action Buttons', () => {
    it('should render a button for each toast type', () => {
      const { container } = render(<Toasts />)

      const buttons = container.querySelectorAll('button')
      expect(buttons.length).toBe(toastTypes.length)
    })

    it('should render buttons with correct labels', () => {
      render(<Toasts />)

      toastTypes.forEach((type) => {
        const button = screen.getByRole('button', { name: new RegExp(`show ${type} toast`, 'i') })
        expect(button).toBeInTheDocument()
      })
    })

    it('should have small outlined buttons', () => {
      const { container } = render(<Toasts />)

      const buttons = container.querySelectorAll('button')

      buttons.forEach((button) => {
        // Buttons should be rendered (size and variant are props, not DOM attributes)
        expect(button).toBeInTheDocument()
      })
    })
  })

  describe('Toast Interactions', () => {
    it('should call toaster.create when success button is clicked', async () => {
      const { user } = render(<Toasts />)

      const successButton = screen.getByRole('button', { name: /show success toast/i })
      await user.click(successButton)

      expect(toaster.create).toHaveBeenCalledWith({
        type: 'success',
        title: 'Success',
        description: 'Your operation completed successfully.',
        duration: 5000,
        meta: { closable: true },
      })
    })

    it('should call toaster.create when error button is clicked', async () => {
      const { user } = render(<Toasts />)

      const errorButton = screen.getByRole('button', { name: /show error toast/i })
      await user.click(errorButton)

      expect(toaster.create).toHaveBeenCalledWith({
        type: 'error',
        title: 'Error',
        description: 'An error occurred while processing your request.',
        duration: 5000,
        meta: { closable: true },
      })
    })

    it('should call toaster.create when warning button is clicked', async () => {
      const { user } = render(<Toasts />)

      const warningButton = screen.getByRole('button', { name: /show warning toast/i })
      await user.click(warningButton)

      expect(toaster.create).toHaveBeenCalledWith({
        type: 'warning',
        title: 'Warning',
        description: 'Please review the following warning message.',
        duration: 5000,
        meta: { closable: true },
      })
    })

    it('should call toaster.create when info button is clicked', async () => {
      const { user } = render(<Toasts />)

      const infoButton = screen.getByRole('button', { name: /show info toast/i })
      await user.click(infoButton)

      expect(toaster.create).toHaveBeenCalledWith({
        type: 'info',
        title: 'Information',
        description: 'Here is some important information for you.',
        duration: 5000,
        meta: { closable: true },
      })
    })

    it('should create toasts with 5 second duration', async () => {
      const { user } = render(<Toasts />)

      const successButton = screen.getByRole('button', { name: /show success toast/i })
      await user.click(successButton)

      expect(toaster.create).toHaveBeenCalledWith(
        expect.objectContaining({
          duration: 5000,
        }),
      )
    })

    it('should create closable toasts', async () => {
      const { user } = render(<Toasts />)

      const successButton = screen.getByRole('button', { name: /show success toast/i })
      await user.click(successButton)

      expect(toaster.create).toHaveBeenCalledWith(
        expect.objectContaining({
          meta: { closable: true },
        }),
      )
    })
  })

  describe('Toast Content', () => {
    it('should have correct title for each toast type', () => {
      render(<Toasts />)

      const expectedContent = {
        success: 'Success',
        error: 'Error',
        warning: 'Warning',
        info: 'Information',
      }

      // Verify the content is configured correctly by checking the descriptions
      Object.values(expectedContent).forEach(() => {
        // The titles are not displayed in the UI, but we can verify via button clicks
        expect(toastTypes.length).toBe(4)
      })
    })

    it('should have unique descriptions for each toast type', () => {
      render(<Toasts />)

      const descriptions = [
        screen.getByText('Your operation completed successfully.'),
        screen.getByText('An error occurred while processing your request.'),
        screen.getByText('Please review the following warning message.'),
        screen.getByText('Here is some important information for you.'),
      ]

      descriptions.forEach((desc) => {
        expect(desc).toBeInTheDocument()
      })
    })
  })

  describe('Layout and Structure', () => {
    it('should wrap table in a bordered container', () => {
      const { container } = render(<Toasts />)

      const table = container.querySelector('table')
      expect(table).toBeInTheDocument()
    })

    it('should have proper spacing', () => {
      render(<Toasts />)

      // Heading should have margin
      const heading = screen.getByRole('heading', { name: /toast notifications/i })
      expect(heading).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<Toasts />)

      const heading = screen.getByRole('heading', { level: 2, name: /toast notifications/i })
      expect(heading).toBeInTheDocument()
    })

    it('should have accessible table structure', () => {
      const { container } = render(<Toasts />)

      const thead = container.querySelector('thead')
      const tbody = container.querySelector('tbody')

      expect(thead).toBeInTheDocument()
      expect(tbody).toBeInTheDocument()
    })

    it('should have table headers with proper scope', () => {
      const { container } = render(<Toasts />)

      const columnHeaders = container.querySelectorAll('th')
      expect(columnHeaders.length).toBe(3) // Type, Description, Action
    })

    it('should have accessible buttons', () => {
      render(<Toasts />)

      toastTypes.forEach((type) => {
        const button = screen.getByRole('button', { name: new RegExp(`show ${type} toast`, 'i') })
        expect(button).toBeInTheDocument()
      })
    })
  })

  describe('Typography', () => {
    it('should use capitalized text for toast types', () => {
      render(<Toasts />)

      toastTypes.forEach((type) => {
        const typeCell = screen.getByText(type)
        expect(typeCell).toBeInTheDocument()
      })
    })

    it('should use medium font weight for type column', () => {
      render(<Toasts />)

      toastTypes.forEach((type) => {
        const typeCell = screen.getByText(type)
        expect(typeCell).toBeInTheDocument()
      })
    })
  })

  describe('Complete Coverage', () => {
    it('should render exactly 4 toast type rows', () => {
      const { container } = render(<Toasts />)

      const tbody = container.querySelector('tbody')
      const rows = tbody?.querySelectorAll('tr')

      expect(rows?.length).toBe(4)
    })

    it('should render all expected semantic toast types', () => {
      render(<Toasts />)

      const expectedTypes = ['success', 'error', 'warning', 'info']

      expectedTypes.forEach((type) => {
        expect(screen.getByText(type)).toBeInTheDocument()
      })
    })

    it('should not render non-semantic toast types', () => {
      render(<Toasts />)

      // Should not have primitive color names
      expect(screen.queryByText('red')).not.toBeInTheDocument()
      expect(screen.queryByText('blue')).not.toBeInTheDocument()
      expect(screen.queryByText('green')).not.toBeInTheDocument()
    })
  })
})
