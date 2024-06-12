// src/components/ThemeSwitcher.js
import { useState, useEffect } from 'react'

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
    <button
      onClick={toggleDarkMode}
      className="absolute bottom-16 left-16 h-12 w-12 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black"
    >
      {darkMode ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeSwitcher
