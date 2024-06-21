import { describe, it, expect } from 'vitest'
import { waitFor } from '@testing-library/react'
import App from '../App'
import { renderWithClient } from './utils'

describe('Renders main page correctly', () => {
  it('Should render the page correctly', async () => {
    const result = renderWithClient(<App />)

    await waitFor(() => expect(result.getByText('cloudcompiler')).not.toBeNull())
    expect(result.findByPlaceholderText('search')).not.toBeNull()
  })
})
