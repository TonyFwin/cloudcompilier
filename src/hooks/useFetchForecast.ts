import { useQuery } from '@tanstack/react-query'
import { WeatherData } from '@/types/weatherData'
import { fetchForecastData } from '@/api/forecast'

export const useFetchForecast = (coordinates: { lat: number; lon: number } | null) => {
  return useQuery<WeatherData, Error>({
    queryKey: ['forecast', coordinates?.lat, coordinates?.lon],
    queryFn: () => fetchForecastData(coordinates!.lat, coordinates!.lon),
    enabled: !!coordinates,
  })
}
