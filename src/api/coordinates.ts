import axiosInstance from './axiosInstance'
import { baseUrl } from '@/config'
import { CoordinatesData } from '@/types/coordinates'

export const fetchCoordinates = async (cityName: string) => {
  const apiKey = import.meta.env.VITE_API_KEY as string
  const limit = import.meta.env.VITE_DEFAULT_LIMIT ?? 5

  const { data } = await axiosInstance.get<CoordinatesData[]>(
    `${baseUrl}geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`,
  )

  return data
}
