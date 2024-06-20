import { useQuery } from '@tanstack/react-query'
import { fetchCoordinates } from '@/api/coordinates'

export const useFetchCoordinates = (cityName: string, enabled:boolean = false) => {
  return useQuery({
    queryKey: ['coordinates', cityName],
    queryFn: () => fetchCoordinates(cityName),
    enabled,
  })
}
