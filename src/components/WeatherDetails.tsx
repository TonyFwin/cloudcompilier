import { useFetchWeather } from '@/hooks/useFetchWeather'
import WeatherDetail from './WeatherDetail'
import {
  WiThermometer,
  WiThermometerExterior,
  WiRaindrop,
  WiStrongWind,
} from 'react-icons/wi'

interface WeatherDetailsProps {
  coordinates: { lat: number; lon: number }
}

export default function WeatherDetails({ coordinates }: WeatherDetailsProps) {
  const { data: weatherData, isLoading, error } = useFetchWeather(coordinates)

  return (
    <div className="dark:border:white w-full border-b-2 border-b-black pt-4 md:pt-8">
      <h2 className="mb-4 tracking-wider text-slate-600">
        {weatherData?.weather[0].description.toUpperCase()}
      </h2>
      <div className="flex flex-col space-y-4 pl-2">
        <WeatherDetail
          description="Max"
          value={weatherData?.main.temp_max ?? 0}
          unit="°"
          Icon={WiThermometer}
          type="max"
        />
        <WeatherDetail
          description="Min"
          value={weatherData?.main.temp_min ?? 0}
          unit="°"
          Icon={WiThermometerExterior}
          type="min"
        />
        <WeatherDetail
          description="Humidity"
          value={weatherData?.main.humidity ?? 0}
          unit="%"
          Icon={WiRaindrop}
          type="default"
        />
        <WeatherDetail
          description="Wind"
          value={weatherData?.main.temp_max ?? 0}
          unit="km/h"
          Icon={WiStrongWind}
          type="default"
        />
      </div>
    </div>
  )
}
