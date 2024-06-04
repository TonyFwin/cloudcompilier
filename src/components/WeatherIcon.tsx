import {
  WiCloud,
  WiDaySunny,
  WiSnow,
  WiRain,
  WiThunderstorm,
  WiTornado,
  WiDayHaze,
} from 'react-icons/wi'

import { getWeatherIcon } from '@/utils/weather.utils'

const WeatherIcon = ({
  description,
  className,
}: {
  description: string
  className?: string
}) => {
  const iconName = getWeatherIcon(description)

  switch (iconName) {
    case 'cloud':
      return <WiCloud className={className} />
    case 'daySunny':
      return <WiDaySunny className={className} />
    case 'snow':
      return <WiSnow className={className} />
    case 'rain':
      return <WiRain className={className} />
    case 'thunder':
      return <WiThunderstorm className={className} />
    case 'tornado':
      return <WiTornado className={className} />
    case 'haze':
      return <WiDayHaze className={className} />
    default:
      return <p>Unknown Icon</p>
  }
}

export default WeatherIcon
