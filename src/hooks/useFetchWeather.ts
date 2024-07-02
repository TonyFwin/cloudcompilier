import { useQuery } from '@tanstack/react-query'
import { fetchWeatherData } from '@/api/weather'
import { UnitOfMeasurement } from '@/types/measurement'
import { Coordinates } from '@/types/coordinates'

export const useFetchWeather = (coordinates: Coordinates, unit: UnitOfMeasurement) => {
  return useQuery({
    queryKey: ['weatherData', coordinates.lat, coordinates.lon, unit],
    queryFn: () => fetchWeatherData(coordinates.lat, coordinates.lon, unit),
    enabled: !!coordinates.lat && !!coordinates.lon,
  })
}
