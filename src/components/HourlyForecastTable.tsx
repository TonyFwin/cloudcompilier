import { useFetchForecast } from '@/hooks/useFetchForecast'
import HourlyForecastColumn from './HourlyForecastColumn'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

interface HourlyForecastProps {
  coordinates: { lat: number; lon: number }
}

export default function HourlyForecastTable({ coordinates }: HourlyForecastProps) {
  const { data: forecastData, isLoading, error } = useFetchForecast(coordinates)
  return (
    <div className="pt-4">
      <ScrollArea className="flex h-full w-full flex-col overflow-y-auto">
        <div className='flex flex-col space-y-4'>
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
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  )
}
