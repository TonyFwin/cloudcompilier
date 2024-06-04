import { useQuery } from '@tanstack/react-query'
import { fetchCoordinates } from '@/api/coordinates'

export const useFetchCoordinates = (cityName: string, limit = 5) => {
  return useQuery({
    queryKey: ['coordinates', cityName],
    queryFn: () => fetchCoordinates(cityName, limit),
    enabled: false,
    // refetchOnWindowFocus: false,
  })
}
