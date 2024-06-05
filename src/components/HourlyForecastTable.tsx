import { useFetchForecast } from '@/hooks/useFetchForecast'
import HourlyForecastColumn from './HourlyForecastColumn'
import { ForecastItem } from '@/types/forecast'

interface HourlyForecastProps {
  coordinates: { lat: number; lon: number }
}

export default function HourlyForecastTable({ coordinates }: HourlyForecastProps) {
  const { data: forecastData, isLoading, error } = useFetchForecast(coordinates)
  return (
    <div className="pt-4">
      <div className="flex h-full w-full flex-col overflow-y-auto">
        <div className="flex flex-col space-y-4">
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
      </div>
    </div>
  )
}
