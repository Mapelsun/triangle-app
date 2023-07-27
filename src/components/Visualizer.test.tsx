import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Visualizer from './Visualizer'

const mockData = [[5], [9, 6], [4, 6, 8], [0, 7, 1, 5], [8, 3, 1, 1, 2]]

test('does not display maxTotal until file is uploaded', () => {
  render(<Visualizer triangleData={mockData} />)
  const maxTotalText = screen.queryByText('Maximum Total:')
  expect(maxTotalText).toBeNull()
})

test('displays maxTotal after uploading file', async () => {
  const { getByText } = render(<Visualizer triangleData={mockData} />)
  await waitFor(() => {
    expect(getByText('Maximum Total: 30')).toBeInTheDocument()
  })
})
