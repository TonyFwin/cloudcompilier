import {
  WiCloud,
  WiDaySunny,
  WiSnow,
  WiRain,
  WiThunderstorm,
  WiTornado,
  WiDayHaze,
  WiFog,
  WiDust,
  WiSmoke,
  WiStrongWind,
  WiRefresh,
} from 'react-icons/wi'

import { getWeatherIcon } from '@/utils/weather.utils'

const WeatherIcon = ({ className, code }: { className?: string; code: number }) => {
  const iconName = getWeatherIcon(code)

  switch (iconName) {
    case 'clear':
      return <WiDaySunny className={className} />
    case 'clouds':
      return <WiCloud className={className} />
    case 'daySunny':
      return <WiDaySunny className={className} />
    case 'snow':
      return <WiSnow className={className} />
    case 'rain':
    case 'drizzle':
      return <WiRain className={className} />
    case 'thunderstorm':
      return <WiThunderstorm className={className} />
    case 'tornado':
      return <WiTornado className={className} />
    case 'smoke':
      return <WiSmoke className={className} />
    case 'haze':
    case 'mist':
      return <WiDayHaze className={className} />
    case 'fog':
      return <WiFog className={className} />
    case 'sand':
    case 'dust':
    case 'ash':
      return <WiDust className={className} />
    case 'squall':
      return <WiStrongWind className={className} />
    default:
      return <WiRefresh className={className} />
  }
}

export default WeatherIcon
