import axiosInstance from './axiosInstance'
import { baseUrl } from '@/config'
import { WeatherData } from '@/types/weather'

export const fetchWeatherData = async (lat: number, lon: number) => {
  const apiKey = import.meta.env.VITE_API_KEY as string
  const unit = import.meta.env.VITE_DEFAULT_UNIT_OF_MEASUREMENT ?? 'metric'

  const { data } = await axiosInstance.get<WeatherData>(
    `${baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`,
  )

  return data
}
