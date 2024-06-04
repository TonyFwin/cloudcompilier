import { useQuery } from '@tanstack/react-query'
import { fetchForecastData } from '@/api/forecast'

export const useFetchForecast = (coordinates: { lat: number; lon: number }) => {
  return useQuery({
    queryKey: ['forecast', coordinates?.lat, coordinates?.lon],
    queryFn: () => fetchForecastData(coordinates!.lat, coordinates!.lon),
    enabled: !!coordinates?.lat && !!coordinates?.lon,
  })
}
