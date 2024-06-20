import { Coordinates, CoordinatesData } from './types/coordinates'
import { ForecastData } from './types/forecast'
import { WeatherData } from './types/weather'

export const mockCoordinates: Coordinates = {
  lat: 52.52,
  lon: 13.41,
}

export const mockCoordinatesData: CoordinatesData[] = [
  {
    country: 'Germany',
    lat: 52.52,
    lon: 13.41,
    local_names: [
      { de: 'Berlin' },
      { en: 'Berlin' },
      { es: 'Berlín' },
    ],
    name: 'Berlin',
    state: 'Berlin',
  },
  {
    country: 'United States',
    lat: 40.7128,
    lon: -74.006,
    local_names: [{ en: 'New York' }],
    name: 'New York',
    state: 'New York',
  },
]
export const mockWeatherData: WeatherData = {
  coord: { lat: 52.52, lon: 13.41 },
  weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
  base: 'stations',
  main: {
    temp: 293.15,
    feels_like: 293.59,
    temp_min: 293.15,
    temp_max: 293.15,
    pressure: 1013,
    humidity: 77,
  },
  visibility: 10000,
  wind: { speed: 4.1, deg: 80 },
  clouds: { all: 75 },
  dt: 1605182400,
  sys: { type: 1, id: 1275, country: 'DE', sunrise: 1605161844, sunset: 1605194623 },
  timezone: 3600,
  id: 2950159,
  name: 'Berlin',
  cod: 200,
}

export const mockForecastData: ForecastData = {
  cod: '200',
  message: 0,
  cnt: 1,
  list: [
    {
      dt: 1605182400,
      main: {
        temp: 293.15,
        feels_like: 293.59,
        temp_min: 293.15,
        temp_max: 293.15,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: { all: 75 },
      wind: { speed: 4.1, deg: 80 },
      visibility: 10000,
      pop: 0.36,
      sys: { pod: 'd' },
      dt_txt: '2020-11-12 15:00:00',
    },
  ],
  city: {
    id: 2950159,
    name: 'Berlin',
    coord: { lat: 52.52, lon: 13.41 },
    country: 'DE',
    population: 1000000,
    timezone: 3600,
    sunrise: 1605161844,
    sunset: 1605194623,
  },
}
