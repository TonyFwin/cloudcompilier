import { useState } from 'react'
import CurrentConditions from './components/CurrentConditions'
import HourlyForecastTable from './components/HourlyForecastTable'
import Logo from './components/Logo'
import Search from './components/Search'
import WeatherDetails from './components/WeatherDetails'
import ThemeSwitcher from './components/ThemeSwitcher'
import UnitSwitcher from './components/UnitSwitcher'

function App() {
  // Default coordinates
  const [coordinates, setCoordinates] = useState<{ lat: number; lon: number }>({
    lat: 44.9772995,
    lon: -93.2654692,
  })

  return (
    <>
      <main className="flex h-screen w-screen flex-col overflow-y-auto bg-light bg-cover px-8 py-12 dark:bg-gray-800 dark:bg-dark sm:px-12 md:flex-row md:px-20">
        <div className="w-full flex-col justify-between md:block md:w-3/5 md:space-y-8 lg:w-2/3 xl:w-7/12">
          <Logo />
          <CurrentConditions coordinates={coordinates} />
        </div>
        <div className="h-fit w-full space-y-4 divide-y divide-black bg-white/50 bg-opacity-50 p-6 dark:divide-white dark:bg-black/50 md:w-2/5 lg:w-1/3 xl:w-5/12">
          <Search setCoordinates={setCoordinates} />
          <WeatherDetails coordinates={coordinates} />
          <HourlyForecastTable coordinates={coordinates} />
        </div>
        <div className="relative mt-8 flex-col h-12 w-12 items-center font-bold md:absolute md:bottom-16 md:left-16 md:right-auto md:top-auto space-y-4">
          <ThemeSwitcher />
          <UnitSwitcher />
        </div>
      </main>
    </>
  )
}

export default App
