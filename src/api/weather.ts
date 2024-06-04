import axios from 'axios'
import { baseUrl } from '@/config'
import { WeatherData } from '@/types/weatherData'

export const fetchWeatherData = async (lat: number, lon: number) => {
  const apiKey = import.meta.env.VITE_API_KEY as string

  const {data} = await axios.get<WeatherData>(
    `${baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
  )

  return data
}
