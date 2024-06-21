import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { mockWeatherData, mockForecastData, mockCoordinatesData } from './mockData.ts'

export const server = setupServer(
  http.get(/.*forecast.*/, () => {
    return HttpResponse.json(mockForecastData)
  }),
  http.get(/.*geo.*/, () => {
    return HttpResponse.json(mockCoordinatesData)
  }),
  http.get(/.*weather.*/, () => {
    return HttpResponse.json(mockWeatherData)
  }),
)

afterEach(() => {
  cleanup()
})

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
