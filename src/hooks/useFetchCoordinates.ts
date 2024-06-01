import { useQuery } from '@tanstack/react-query'
import { Coordinates } from '@/types/coordinates'
import { fetchCoordinates } from '@/api/coordinates'

export const useGetCoordinates = (cityName: string, limit = 5) => {
  return useQuery<Coordinates, Error>({
    queryKey: ['coordinates', cityName],
    queryFn: () => fetchCoordinates(cityName, limit),
    enabled: false,
    // refetchOnWindowFocus: true,
  })
}
