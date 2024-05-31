import axios from 'axios'
import { baseUrl } from '@/config'

export const fetchCoordinates = async (cityName: string, limit: number) => {
  const apiKey = import.meta.env.VITE_API_KEY as string

  const response = await axios.get(
    `${baseUrl}geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`,
  )

  return response.data
}
