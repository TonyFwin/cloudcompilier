import { useQuery } from '@tanstack/react-query'
import { Coordinates } from '@/types/coordinates'
import { fetchCoordinates } from '@/api/coordinates'

export const useFetchCoordinates = (cityName: string, limit = 5) => {
  console.log('inside use fetch coordinates')
  return useQuery<Coordinates, Error>({
    queryKey: ['coordinates', cityName],
    queryFn: () => fetchCoordinates(cityName, limit),
    enabled: false,
    refetchOnWindowFocus: false,
  })
}
