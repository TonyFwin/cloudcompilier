import axiosInstance from './axiosInstance'
import { baseUrl } from '@/config'
import { ForecastData } from '@/types/forecast'
import { UnitOfMeasurement } from '@/types/measurement'

export const fetchForecastData = async (
  lat: number,
  lon: number,
  unit: UnitOfMeasurement,
) => {
  const apiKey = import.meta.env.VITE_API_KEY as string
  const count = import.meta.env.VITE_DEFAULT_COUNT ?? 8

  const { data } = await axiosInstance.get<ForecastData>(
    `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&cnt=${count}&appid=${apiKey}`,
  )

  return data
}
