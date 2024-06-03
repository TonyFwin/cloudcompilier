import WeatherIcon from './WeatherIcon'
import { timeFromDateString } from '@/utils/time.utils'

interface HourlyForecastColumnProps {
  description: string
  iconDescription: string
  dateString: string
  temperature: number
}
export default function HourlyForecastColumn({
  description,
  iconDescription,
  dateString,
  temperature,
}: HourlyForecastColumnProps) {
  return (
    <div className="w-full">
      <WeatherIcon description={iconDescription} />
      <div>
        {timeFromDateString(dateString)} {description}
      </div>
      <div>{temperature}°</div>
    </div>
  )
}
