import { useFetchWeather } from '@/hooks/useFetchWeather'
import WeatherIcon from './WeatherIcon'
import { dateTimeFromTimeStamp } from '@/utils/time.utils'
import { roundNumber } from '@/utils/weather.utils'
import SkeletonCurrentConditions from './skeletons/SkeletonCurrentConditions'
import Error from './Error'

interface CurrentConditionsProps {
  coordinates: { lat: number; lon: number }
}

export default function CurrentConditions({ coordinates }: CurrentConditionsProps) {
  const {
    data: weatherData,
    isLoading,
    isError,
    error,
  } = useFetchWeather({ lat: coordinates.lat, lon: coordinates.lon })

  if (isLoading) {
    return <SkeletonCurrentConditions />
  }

  if (isError) {
    return <Error message={error.message} />
  }

  return (
    <div className="flex items-center space-x-4 dark:text-white lg:space-x-6">
      <div className="text-3xl">
        {weatherData && (
          <WeatherIcon
            code={weatherData.weather[0].id}
            className="h-20 w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28"
          />
        )}
      </div>
      <div className="text-5xl font-extrabold tracking-tight lg:text-7xl">
        {weatherData && `${roundNumber(weatherData?.main.temp)}°c`}
      </div>

      <div className="flex flex-col space-y-0.5">
        <div className="text-2xl font-medium tracking-wide lg:text-5xl">
          {weatherData?.name}
        </div>
        <div className="text-sm font-light lg:text-lg">
          {weatherData && dateTimeFromTimeStamp(weatherData?.dt)}
        </div>
      </div>
    </div>
  )
}
