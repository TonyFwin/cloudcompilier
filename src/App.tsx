import { useState } from 'react'
import CurrentConditions from './components/CurrentConditions'
import HourlyForecastTable from './components/HourlyForecastTable'
import Logo from './components/Logo'
import Search from './components/Search'
import WeatherDetails from './components/WeatherDetails'
import ThemeSwitcher from './components/ThemeSwitcher'
import UnitSwitcher from './components/UnitSwitcher'
import { Coordinates } from './types/coordinates'

function App() {
  const defaultCoordinates: Coordinates = {
    lat: import.meta.env.VITE_DEFAULT_COORDINATES_LAT ?? 44.97,
    lon: import.meta.env.VITE_DEFAULT_COORDINATES_LON ?? -93.27,
  }
  const [coordinates, setCoordinates] = useState(defaultCoordinates)

  return (
    <main className="flex h-screen w-screen flex-col overflow-y-auto bg-light bg-cover px-8 py-12 dark:bg-gray-800 dark:bg-dark sm:px-12 md:flex-row md:px-20">
      <div className="w-full flex-col justify-between md:block md:w-3/5 md:space-y-8 lg:w-2/3 xl:w-7/12">
        <Logo />
        <CurrentConditions coordinates={coordinates} />
      </div>
      <div className="h-fit w-full space-y-4 divide-y divide-black bg-white/50 bg-opacity-50 p-6 dark:divide-white dark:bg-black/65 md:w-2/5 lg:w-1/3 xl:w-5/12">
        <Search setCoordinates={setCoordinates} />
        <WeatherDetails coordinates={coordinates} />
        <HourlyForecastTable coordinates={coordinates} />
      </div>
      <div className="relative mt-8 h-12 w-12 flex-col items-center space-y-4 font-bold md:absolute md:bottom-16 md:left-16 md:right-auto md:top-auto">
        <ThemeSwitcher />
        <UnitSwitcher />
      </div>
    </main>
  )
}

export default App
