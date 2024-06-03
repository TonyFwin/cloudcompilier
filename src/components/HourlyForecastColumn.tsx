import { roundNumber } from '@/utils/weather.utils'
import WeatherIcon from './WeatherIcon'
import { timeFromDateString } from '@/utils/time.utils'
import { capitalizeSentence } from '@/utils/strings.utils'

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
    <div className="flex w-full space-x-2 md:space-x-4">
      <WeatherIcon description={iconDescription} className="h-12 w-12" />
      <div className="col-span-2 flex w-full justify-between">
        <div>
          <p>{timeFromDateString(dateString)} </p>
          <p>{capitalizeSentence(description)}</p>
        </div>
        <div>{roundNumber(temperature)}°</div>
      </div>
    </div>
  )
}
