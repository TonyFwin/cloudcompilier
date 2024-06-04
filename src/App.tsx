import { useState } from 'react'
import CurrentConditions from './components/CurrentConditions'
import HourlyForecastTable from './components/HourlyForecastTable'
import Logo from './components/Logo'
import Search from './components/Search'
import WeatherDetails from './components/WeatherDetails'

function App() {
  const [coordinates, setCoordinates] = useState<{ lat: number; lon: number }>({
    lat: 44.9772995,
    lon: -93.2654692,
  })

  return (
    <>
      <main className="flex h-full w-screen flex-col bg-pink-200 px-20 py-12 dark:bg-gray-800 md:flex-row">
        <div className="md:w-3/5 flex w-full justify-between md:block md:space-y-8 lg:w-2/3">
          <Logo />
          <CurrentConditions coordinates={coordinates} />
        </div>
        <div className="h-fit w-full space-y-4 divide-y divide-black bg-white bg-opacity-50 p-6 dark:divide-white md:w-2/5 lg:w-1/3">
          <Search setCoordinates={setCoordinates} />
          <WeatherDetails coordinates={coordinates} />
          <HourlyForecastTable coordinates={coordinates} />
        </div>
      </main>
    </>
  )
}

export default App
