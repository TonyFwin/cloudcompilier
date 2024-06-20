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
    <div className="my-4 flex flex-wrap items-center justify-center space-x-0  dark:text-white sm:flex-nowrap sm:space-x-4 md:mb-0 md:justify-normal lg:space-x-6">
      <div className="order-3 text-3xl sm:order-2 md:w-auto">
        {weatherData && (
          <WeatherIcon
            code={weatherData.weather[0].id}
            className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28"
          />
        )}
      </div>
      <div className="order-2 text-3xl font-extrabold tracking-tight sm:order-3 sm:text-4xl md:w-auto md:text-5xl lg:text-7xl">
        {weatherData && `${roundNumber(weatherData?.main.temp)}°c`}
      </div>
      <div className="order-1 flex w-full flex-col items-center space-y-2 sm:order-4 sm:w-auto md:items-start md:space-y-0.5">
        <div className="text-2xl font-medium tracking-wide lg:text-5xl">
          {weatherData?.name}
        </div>
        <div className="text-sm font-light lg:text-lg xl:text-xl">
          {weatherData && dateTimeFromTimeStamp(weatherData?.dt)}
        </div>
      </div>
    </div>
  )
}
