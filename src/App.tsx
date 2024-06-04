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
      <main className=" flex h-screen w-screen flex-col px-20 py-12 md:flex-row ">
        <div className="flex w-full justify-between md:block md:w-2/3 md:space-y-8">
          <Logo />
          <CurrentConditions coordinates={coordinates} />
        </div>
        <div className="h-fit w-full space-y-4 divide-y divide-black bg-white bg-opacity-50 p-6 dark:divide-white md:w-1/3">
          <Search setCoordinates={setCoordinates} />
          <WeatherDetails coordinates={coordinates} />
          <HourlyForecastTable coordinates={coordinates} />
        </div>
      </main>
    </>
  )
}

export default App
