import { useQuery } from '@tanstack/react-query'
import { fetchWeatherData } from '@/api/weather'

export const useFetchWeather = (coordinates: { lat: number; lon: number }) => {
  return useQuery({
    queryKey: ['weatherData', coordinates.lat, coordinates.lon],
    queryFn: () => fetchWeatherData(coordinates.lat, coordinates.lon),
    enabled: !!coordinates.lat && !!coordinates.lon,
  })
}
