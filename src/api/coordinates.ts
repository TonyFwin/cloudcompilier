import axios from 'axios'
import { baseUrl } from '@/config'
import { CoordinatesData } from '@/types/coordinates'

export const fetchCoordinates = async (cityName: string, limit: number) => {
  const apiKey = import.meta.env.VITE_API_KEY as string

  const {data} = await axios.get<CoordinatesData[]>(
    `${baseUrl}geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`,
  )

  return data
}
