// src/components/ThemeSwitcher.js
import { useState, useEffect } from 'react'
import { Switch } from '@/components/ui/switch'
import { WiMoonAltWaningGibbous2, WiSunrise } from 'react-icons/wi'

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    // <button
    //   onClick={toggleDarkMode}
    //   className="absolute right-10 top-10 h-12 w-12 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black md:bottom-16 md:left-16 md:right-auto md:top-auto"
    // >
    //   {darkMode ? 'Light' : 'Dark'}
    // </button>
    <div className="relative mt-8 flex h-12 w-12 items-center font-bold md:absolute md:bottom-16 md:left-16 md:right-auto md:top-auto">
      <span className="mr-2">
        <WiSunrise className="h-6 w-6 text-yellow-300" />
      </span>
      <Switch checked={darkMode} onCheckedChange={toggleDarkMode} id="darkmode-toggle">
        <span
          className={`
          pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out 
          ${darkMode ? 'translate-x-5' : 'translate-x-1'}
        `}
        />
      </Switch>
      <span className="ml-2">
        <WiMoonAltWaningGibbous2 className="h-6 w-6 text-white" />
      </span>
    </div>
  )
}

export default ThemeSwitcher
