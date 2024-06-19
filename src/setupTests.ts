import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import { mockWeatherData, mockForecastData } from './mockData.ts'

export const server = setupServer(
  http.get(/.*geo.*/, () => {
    return HttpResponse.json({ name: 'Berlin' })
  }),
  http.get(/.*weather.*/, () => {
    return HttpResponse.json(mockWeatherData)
  }),
  http.get(/.*forecast.*/, () => {
    return HttpResponse.json(mockForecastData)
  }),
)

afterEach(() => {
  cleanup()
})

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
