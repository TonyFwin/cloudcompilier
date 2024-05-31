import { useFetchWeather } from '@/hooks/useFetchWeather'
import { WeatherData } from './types/weatherData'
import { getTimeFromOffset } from '@/utils/getTimeFromOffset'

interface CurrentConditionsProps {
  coordinates: { lat: number; lon: number } | null
}

export default function CurrentConditions({ coordinates }: CurrentConditionsProps) {
  const { data: weatherData, isLoading, error } = useFetchWeather(coordinates)
  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>Error: {error.message}</div>
  return (
    <div className="flex space-x-4">
      <div className="text-3xl">
        {weatherData && (
          <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} />
        )}
      </div>
      <div className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {weatherData?.main.temp}
      </div>

      <div className="flex flex-col space-y-0.5">
        <div className=" text-xl font-medium lg:text-2xl">{weatherData?.name}</div>
        <div className="text-sm font-light">
          {getTimeFromOffset(weatherData?.timezone as number).toString()}
        </div>
      </div>
    </div>
  )
}
