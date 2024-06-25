import { describe, expect, test } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { createWrapper } from './utils'
import { server } from '../setupTests'
import { useFetchWeather } from '@/hooks/useFetchWeather'
import { useFetchForecast } from '@/hooks/useFetchForecast'
import { useFetchCoordinates } from '@/hooks/useFetchCoordinates'

describe('useFetchCoordinates hook', () => {
  test('successful query hook', async () => {
    const { result } = renderHook(() => useFetchCoordinates('Berlin', true), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data?.[0].country).toBe('Germany')
  })

  test('failure query hook', async () => {
    server.use(
      http.get('*', () => {
        return HttpResponse.error()
      }),
    )

    const { result } = renderHook(() => useFetchCoordinates('Some place', true), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isError).toBe(true))

    expect(result.current.error).toBeDefined()
  })
})

describe('useFetchWeather hook', () => {
  test('successful query hook', async () => {
    const { result } = renderHook(() => useFetchWeather({ lat: 52.52, lon: 13.41 }, 'metric'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data?.weather[0].main).toBe('Rain')
  })

  test('failure query hook', async () => {
    server.use(
      http.get('*', () => {
        return HttpResponse.error()
      }),
    )

    const { result } = renderHook(() => useFetchWeather({ lat: 123, lon: 456 }, 'metric'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isError).toBe(true))

    expect(result.current.error).toBeDefined()
  })
})

describe('useFetchForecast hook', () => {
  test('successful query hook', async () => {
    const { result } = renderHook(() => useFetchForecast({ lat: 52.52, lon: 13.41 }, 'metric'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data?.list[0].weather[0].main).toBe('Rain')
  })

  test('failure query hook', async () => {
    server.use(
      http.get('*', () => {
        return HttpResponse.error()
      }),
    )
    const { result } = renderHook(() => useFetchForecast({ lat: 123, lon: 456 }, 'metric'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isError).toBe(true))

    expect(result.current.error).toBeDefined()
  })
})
