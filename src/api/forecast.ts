import axios from 'axios'
import { baseUrl } from '@/config'

export const fetchForecastData = async (lat: number, lon: number) => {
  const apiKey = import.meta.env.VITE_API_KEY as string

  const response = await axios.get(
    `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
  )

  return response.data
}
