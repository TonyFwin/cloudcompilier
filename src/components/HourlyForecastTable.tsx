import { useFetchForecast } from '@/hooks/useFetchForecast'
import HourlyForecastColumn from './HourlyForecastColumn'
import { ForecastItem } from '@/types/forecast'
import { Coordinates } from '@/types/coordinates'
import SkeletonHourlyForecast from './skeletons/SkeletonHourlyForecast'
import { useUnitOfMeasurement } from '@/hooks/useUnitOfMeasurement'
import Error from './Error'

interface HourlyForecastProps {
  coordinates: Coordinates
}

export default function HourlyForecastTable({ coordinates }: HourlyForecastProps) {
  const { data: unit } = useUnitOfMeasurement()
  const {
    data: forecastData,
    isLoading,
    isError,
    error,
  } = useFetchForecast(coordinates, unit)

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-4">
        {[...Array(6)].map((_, i) => {
          return <SkeletonHourlyForecast key={i} testId={i} />
        })}
      </div>
    )
  }

  if (isError) {
    return <Error message={error.message} />
  }

  return (
    <div className="flex h-fit w-full flex-col space-y-4 overflow-y-auto pt-4">
      <h2 className="sr-only">Hourly Forecast</h2>
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
