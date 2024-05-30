import CurrentConditions from './components/CurrentConditions'
import HourlyForecast from './components/HourlyForecast'
import Logo from './components/Logo'
import Search from './components/Search'
import WeatherDetails from './components/WeatherDetails'

function App() {
  return (
    <>
      <main className="grid grid-cols-5">
        <div className="col-span-3 space-y-8">
          <Logo />
          <CurrentConditions />
        </div>
        <div className="col-span-2 space-y-4">
          <Search />
          <WeatherDetails />
          <HourlyForecast />
        </div>
      </main>
    </>
  )
}

export default App
