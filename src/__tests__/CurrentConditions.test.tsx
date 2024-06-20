import { describe, expect, test } from 'vitest'
import { waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { server } from '../setupTests'
import CurrentConditions from '@/components/CurrentConditions'
import { renderWithClient } from './utils'

describe('CurrentConditions Component', () => {
  const coordinates = { lat: 52.52, lon: 13.41 }

  test('Displays current conditions', async () => {
    const result = renderWithClient(<CurrentConditions coordinates={coordinates} />)

    await waitFor(() => expect(result.getByText(/20°c/i)).toBeInTheDocument())
  })

  test('Displays skeletons while in loading state', () => {
    const result = renderWithClient(<CurrentConditions coordinates={coordinates} />)

    expect(result.getByTestId('skeleton-current-conditions')).toBeInTheDocument()
  })

  test('Displays error component when a request fails', async () => {
    server.use(
      http.get('*', () => {
        return HttpResponse.error()
      }),
    )

    const result = renderWithClient(<CurrentConditions coordinates={coordinates} />)

    await waitFor(() => expect(result.getByTestId('error')).toBeInTheDocument())
  })
})
