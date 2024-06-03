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

const WeatherIcon = ({ description }: { description: string }) => {
  const iconName = getWeatherIcon(description)

  switch (iconName) {
    case 'cloud':
      return <WiCloud />
    case 'daySunny':
      return <WiDaySunny />
    case 'snow':
      return <WiSnow />
    case 'rain':
      return <WiRain />
    case 'thunder':
      return <WiThunderstorm />
    case 'tornado':
      return <WiTornado />
    case 'haze':
      return <WiDayHaze />
    default:
      return <p>Unknown Icon</p> // Handle unexpected descriptions
  }
}

export default WeatherIcon
