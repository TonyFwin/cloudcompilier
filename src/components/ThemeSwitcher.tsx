import { useState, useEffect } from 'react'
import { Switch } from '@/components/ui/switch'
import { WiMoonAltWaningGibbous2, WiSunrise } from 'react-icons/wi'

export default function ThemeSwitcher() {
  const STORAGE_KEY = 'darkmode'
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedDarkMode = localStorage.getItem(STORAGE_KEY)
    const isDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem(STORAGE_KEY, darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className="flex items-center">
      <span className="mr-2">
        <WiSunrise className="h-6 w-6 text-yellow-300" />
      </span>
      <Switch
        className="transition duration-200 ease-in-out data-[state=unchecked]:bg-black"
        checked={darkMode}
        onCheckedChange={toggleDarkMode}
        id="darkmode-toggle"
      />
      <span className="ml-2">
        <WiMoonAltWaningGibbous2 className="h-6 w-6 text-white" />
      </span>
    </div>
  )
}
