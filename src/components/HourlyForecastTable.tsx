import { useFetchForecast } from '@/hooks/useFetchForecast'
import HourlyForecastColumn from './HourlyForecastColumn'
import { ForecastItem } from '@/types/forecast'
import SkeletonHourlyForecast from './skeletons/SkeletonHourlyForecast'
import Error from './Error'

interface HourlyForecastProps {
  coordinates: { lat: number; lon: number }
}

export default function HourlyForecastTable({ coordinates }: HourlyForecastProps) {
  const { data: forecastData, isLoading, error } = useFetchForecast(coordinates)
  if (isLoading) {
    return (
      <div className="flex flex-col space-y-4">
        {[...Array(6)].map((_, i) => {
          return <SkeletonHourlyForecast key={i} />
        })}
      </div>
    )
  }

  if (error) {
    return <Error message={error.message} />
  }

  return (
    <div className="flex h-full w-full flex-col space-y-4 overflow-y-auto pt-4">
      {forecastData?.list.map((el: ForecastItem) => {
        return (
          <HourlyForecastColumn
            key={el.dt}
            iconCode={el.weather[0].id}
            description={el.weather[0].description}
            dateString={el.dt_txt}
            temperature={el.main.temp}
          />
        )
      })}
    </div>
  )
}
