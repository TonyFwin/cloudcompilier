import { useQuery } from '@tanstack/react-query'
import { fetchForecastData } from '@/api/forecast'
import { UnitOfMeasurement } from '@/types/measurement'

export const useFetchForecast = (
  coordinates: { lat: number; lon: number },
  unit: UnitOfMeasurement,
) => {
  return useQuery({
    queryKey: ['forecast', coordinates?.lat, coordinates?.lon, unit],
    queryFn: () => fetchForecastData(coordinates!.lat, coordinates!.lon, unit),
    enabled: !!coordinates?.lat && !!coordinates?.lon,
  })
}
