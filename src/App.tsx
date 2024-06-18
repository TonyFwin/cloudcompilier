import { useState } from 'react'
import CurrentConditions from './components/CurrentConditions'
import HourlyForecastTable from './components/HourlyForecastTable'
import Logo from './components/Logo'
import Search from './components/Search'
import WeatherDetails from './components/WeatherDetails'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  // Default coordinates
  const [coordinates, setCoordinates] = useState<{ lat: number; lon: number }>({
    lat: 44.9772995,
    lon: -93.2654692,
  })

  return (
    <>
      <main className="flex h-full w-screen flex-col bg-[url(light_background.png)] bg-cover px-20 py-12 dark:bg-gray-800 dark:bg-[url(dark_background.png)] md:flex-row lg:h-screen">
        <div className="w-full flex-col justify-between md:block md:w-3/5 md:space-y-8 lg:w-2/3 xl:w-7/12">
          <Logo />
          <CurrentConditions coordinates={coordinates} />
        </div>
        <div className="h-fit w-full space-y-4 divide-y divide-black bg-white/50 bg-opacity-50 p-6 dark:divide-white dark:bg-black/50 md:w-2/5 lg:w-1/3 xl:w-5/12">
          <Search setCoordinates={setCoordinates} />
          <WeatherDetails coordinates={coordinates} />
          <HourlyForecastTable coordinates={coordinates} />
        </div>
        <ThemeSwitcher />
      </main>
    </>
  )
}

export default App
