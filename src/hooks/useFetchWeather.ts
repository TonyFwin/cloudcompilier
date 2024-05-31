import { useQuery } from '@tanstack/react-query'
import { WeatherData } from '@/components/types/weatherData'
import { fetchWeatherData } from '@/api/weather'

export const useFetchWeather = (coordinates: { lat: number; lon: number } | null) => {
  return useQuery<WeatherData, Error>({
    queryKey: ['weatherData', coordinates?.lat, coordinates?.lon],
    queryFn: () => fetchWeatherData(coordinates!.lat, coordinates!.lon),
    enabled: !!coordinates,
  })
}
