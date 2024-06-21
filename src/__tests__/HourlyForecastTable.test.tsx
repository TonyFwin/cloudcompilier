import { describe, expect, test } from 'vitest'
import { waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { server } from '../setupTests'
import HourlyForecastTable from '@/components/HourlyForecastTable'
import { renderWithClient } from './utils'

describe('HourlyForecastTable Component', () => {
  const coordinates = { lat: 52.52, lon: 13.41 }

  test('Displays forecast data', async () => {
    const result = renderWithClient(<HourlyForecastTable coordinates={coordinates} />)

    await waitFor(() => expect(result.getByText(/Light Rain/i)).toBeInTheDocument())
  })

  test('Displays skeletons while in loading state', () => {
    const result = renderWithClient(<HourlyForecastTable coordinates={coordinates} />)

    for (let i = 0; i < 6; i++) {
      expect(result.getByTestId(`skeleton-${i}`)).toBeInTheDocument()
    }
  })

  test('Displays error component when a request fails', async () => {
    server.use(
      http.get('*', () => {
        return HttpResponse.error()
      }),
    )

    const result = renderWithClient(<HourlyForecastTable coordinates={coordinates} />)

    await waitFor(() => expect(result.getByTestId('error')).toBeInTheDocument())
  })
})
