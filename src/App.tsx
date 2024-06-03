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
      <main className="flex h-screen w-screen grid-cols-5 flex-col overflow-hidden bg-[url('/cloudy-light.jpg')] px-20 py-12 md:grid">
        <div className="col-span-3 flex justify-between md:space-y-8 md:block">
          <Logo />
          <CurrentConditions coordinates={coordinates} />
        </div>
        <div className="col-span-2 space-y-4 divide-y divide-black bg-white bg-opacity-50 p-6  dark:divide-white">
          <Search setCoordinates={setCoordinates} />
          <WeatherDetails coordinates={coordinates} />
          <HourlyForecastTable coordinates={coordinates} />
        </div>
      </main>
    </>
  )
}

export default App
