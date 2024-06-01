import { useFetchWeather } from '@/hooks/useFetchWeather'
import WeatherDetail from './WeatherDetail'
import {
  WiThermometer,
  WiThermometerExterior,
  WiRaindrop,
  WiStrongWind,
} from 'react-icons/wi'

interface WeatherDetailsProps {
  coordinates: { lat: number; lon: number } | null
}

export default function WeatherDetails({ coordinates }: WeatherDetailsProps) {
  const { data: weatherData, isLoading, error } = useFetchWeather(coordinates)

  return (
    <div className="w-full">
      <h2>{weatherData?.weather[0].description}</h2>
      <WeatherDetail
        description="Max"
        value={weatherData?.main.temp_max ?? 0}
        unit="°"
        Icon={WiThermometer}
      />
      <WeatherDetail
        description="Min"
        value={weatherData?.main.temp_min ?? 0}
        unit="°"
        Icon={WiThermometerExterior}
      />
      <WeatherDetail
        description="Humidity"
        value={weatherData?.main.humidity ?? 0}
        unit="%"
        Icon={WiRaindrop}
      />
      <WeatherDetail
        description="Wind"
        value={weatherData?.main.temp_max ?? 0}
        unit="km/h"
        Icon={WiStrongWind}
      />
    </div>
  )
}
