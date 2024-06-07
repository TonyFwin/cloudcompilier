import axiosInstance from './axiosInstance'
import { baseUrl } from '@/config'
import { ForecastData } from '@/types/forecast'

export const fetchForecastData = async (lat: number, lon: number) => {
  const apiKey = import.meta.env.VITE_API_KEY as string

  const { data } = await axiosInstance.get<ForecastData>(
    `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=8&appid=${apiKey}`,
  )

  return data
}
