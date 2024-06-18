import { roundNumber } from '@/utils/weather.utils'
import { IconType } from 'react-icons'

interface WeatherDetailProps {
  description: string
  value: number
  Icon: IconType
  unit?: string
  type: 'max' | 'min' | 'default'
}

export default function WeatherDetail({
  description,
  value,
  Icon,
  unit,
  type,
}: WeatherDetailProps) {
  const iconClasses =
    type === 'max' ? 'text-red-500' : type === 'min' ? 'text-blue-500' : ''
  return (
    <div className="flex items-center justify-between">
      <p className="text-black dark:text-white xl:text-xl">{description}</p>

      <div className="flex items-center">
        <div className="xl:text-lg">
          {roundNumber(value)}
          {unit}
        </div>
        {Icon && <Icon className={`h-6 w-6 ${iconClasses}`} />}
      </div>
    </div>
  )
}
