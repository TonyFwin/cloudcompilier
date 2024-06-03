import HourlyForecastColumn from './HourlyForecastColumn'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

interface HourlyForecastProps {
  coordinates: { lat: number; lon: number } | null
}

export default function HourlyForecastTable({ coordinates }: HourlyForecastProps) {
  return (
    <div>
      <h2>Hourly Forecast</h2>
      <ScrollArea className="h-[200px] w-[500px]">
        {[...Array(24)].map((_, i) => {
          return (
            <HourlyForecastColumn
              key={i}
              iconDescription={'clear'}
              description={'sunny'}
              time={i}
              temperature={i}
            />
          )
        })}
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  )
}
