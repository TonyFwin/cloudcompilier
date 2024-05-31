import { useState } from 'react'
import CurrentConditions from './components/CurrentConditions'
import HourlyForecast from './components/HourlyForecast'
import Logo from './components/Logo'
import Search from './components/Search'
import WeatherDetails from './components/WeatherDetails'

function App() {
  const [coordinates, setCoordinates] = useState<{ lat: number; lon: number } | null>(
    null,
  )

  return (
    <>
      <main className="grid grid-cols-5">
        <div className="col-span-3 space-y-8">
          <Logo />
          <CurrentConditions coordinates={coordinates} />
        </div>
        <div className="col-span-2 space-y-4">
          <Search setCoordinates={setCoordinates} />
          <WeatherDetails />
          <HourlyForecast />
        </div>
      </main>
    </>
  )
}

export default App
