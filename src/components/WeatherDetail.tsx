import { IconType } from 'react-icons'

interface WeatherDetailProps {
  description: string
  value: number
  Icon: IconType
  unit?: string
}

export default function WeatherDetail({
  description,
  value,
  Icon,
  unit,
}: WeatherDetailProps) {
  return (
    <div className="flex items-center justify-between">
      <p>{description}</p>

      <div>
        {value}
        {unit} {Icon && <Icon className="h-8 w-8" />}
      </div>
    </div>
  )
}
