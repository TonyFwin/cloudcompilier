import { useFetchForecast } from '@/hooks/useFetchForecast'
import HourlyForecastColumn from './HourlyForecastColumn'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

interface HourlyForecastProps {
  coordinates: { lat: number; lon: number } | null
}

export default function HourlyForecastTable({ coordinates }: HourlyForecastProps) {
  const { data: forecastData, isLoading, error } = useFetchForecast(coordinates)
  return (
    <div>
      <h2>Hourly Forecast</h2>
      <ScrollArea className="h-[500px] w-[750px]">
        {forecastData?.list.map((el) => {
          return (
            <HourlyForecastColumn
              key={el.dt}
              iconDescription={el.weather[0].main}
              description={el.weather[0].description}
              dateString={el.dt_txt}
              temperature={el.main.temp}
            />
          )
        })}
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  )
}
