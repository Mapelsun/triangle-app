import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import FileUploader from './FileUploader'

const mockOnUpload = jest.fn()

test('renders FileUploader component', () => {
  render(<FileUploader onFileUpload={mockOnUpload} />)
  const fileInput = screen.getByLabelText('upload-input')
  expect(fileInput).toBeInTheDocument()
})

test('calls onUpload function with triangle data after uploading file', async () => {
  const fileContents = '5\n9 6\n4 6 8\n0 7 1 5\n8 3 1 1 2'
  const file = new File([fileContents], 'triangle.txt', { type: 'text/plain' })
  render(<FileUploader onFileUpload={mockOnUpload} />)
  const fileInput = screen.getByLabelText('upload-input')
  fireEvent.change(fileInput, { target: { files: [file] } })

  await waitFor(() => {
    expect(mockOnUpload).toHaveBeenCalledTimes(1)
    expect(mockOnUpload).toHaveBeenCalledWith([
      [5],
      [9, 6],
      [4, 6, 8],
      [0, 7, 1, 5],
      [8, 3, 1, 1, 2],
    ])
  })
})

