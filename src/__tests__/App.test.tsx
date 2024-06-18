import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

import App from '../App'

describe('Renders main page correctly', async () => {
  afterEach(() => {
    cleanup()
  })

  it('Should render the page correctly', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    )
    const h1 = await screen.queryByText('cloudcompiler')

    expect(h1).not.toBeNull()
  })
})
