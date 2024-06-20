// src/components/ThemeSwitcher.js
import { useState, useEffect } from 'react'
import { Switch } from '@/components/ui/switch'

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
    <div className="relative mt-8 block h-12 w-12 font-bold md:absolute md:bottom-16 md:left-16 md:right-auto md:top-auto">
      <Switch checked={darkMode} onCheckedChange={toggleDarkMode} id="darkmode-toggle" />
      <label htmlFor="darkmode-toggle"> {darkMode ? 'Light' : 'Dark'}</label>
    </div>
  )
}

export default ThemeSwitcher
