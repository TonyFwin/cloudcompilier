import axiosInstance from './axiosInstance'
import { baseUrl } from '@/config'
import { ForecastData } from '@/types/forecast'

export const fetchForecastData = async (lat: number, lon: number) => {
  const apiKey = import.meta.env.VITE_API_KEY as string
  const unit = import.meta.env.VITE_DEFAULT_UNIT_OF_MEASUREMENT ?? 'metric'
  const count = import.meta.env.VITE_DEFAULT_ ?? 8

  const { data } = await axiosInstance.get<ForecastData>(
    `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&cnt=${count}&appid=${apiKey}`,
  )

  return data
}
