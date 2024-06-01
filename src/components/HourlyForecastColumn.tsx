import { IconType } from 'react-icons'
import WeatherIcon from './WeatherIcon'

interface HourlyForecastColumnProps {
  description: string
  iconDescription: string
  time: number
  temperature: number
}
export default function HourlyForecastColumn({
  description,
  iconDescription,
  time,
  temperature,
}: HourlyForecastColumnProps) {
  return (
    <div>
      <WeatherIcon description={iconDescription} />
      <div>
        {time} {description}
      </div>
      <div>{temperature}°</div>
    </div>
  )
}
