import { useQuery } from '@tanstack/react-query'
import { Forecast } from '@/types/forecast'
import { fetchForecastData } from '@/api/forecast'

export const useFetchForecast = (coordinates: { lat: number; lon: number } | null) => {
  return useQuery<Forecast, Error>({
    queryKey: ['forecast', coordinates?.lat, coordinates?.lon],
    queryFn: () => fetchForecastData(coordinates!.lat, coordinates!.lon),
    enabled: !!coordinates?.lat && !!coordinates?.lon,
  })
}
