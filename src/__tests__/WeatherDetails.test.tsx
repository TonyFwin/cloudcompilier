import { describe, expect, test } from 'vitest'
import { waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { server } from '../setupTests'
import WeatherDetails from '@/components/WeatherDetails'
import { renderWithClient } from './utils'

describe('WeatherDetails Component', () => {
  const coordinates = { lat: 52.52, lon: 13.41 }

  test('Displays weather details', async () => {
    const result = renderWithClient(<WeatherDetails coordinates={coordinates} />)

    await waitFor(() => expect(result.getByText(/Light Rain/i)).toBeInTheDocument())
  })

  test('Displays skeletons while in loading state', () => {
    const result = renderWithClient(<WeatherDetails coordinates={coordinates} />)

    expect(result.getByTestId('skeleton-weather-details')).toBeInTheDocument()
  })

  test('Displays error component when a request fails', async () => {
    server.use(
      http.get('*', () => {
        return HttpResponse.error()
      }),
    )

    const result = renderWithClient(<WeatherDetails coordinates={coordinates} />)

    await waitFor(() => expect(result.getByTestId('error')).toBeInTheDocument())
  })
})
