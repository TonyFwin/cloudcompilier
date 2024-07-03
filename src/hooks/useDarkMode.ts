import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const STORAGE_KEY = 'darkMode'

  const getInitialDarkMode = () => {
    const storedDarkMode = localStorage.getItem(STORAGE_KEY)
    return storedDarkMode ? JSON.parse(storedDarkMode) : false
  }

  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode)

  const toggleDarkMode = () => setIsDarkMode((prevMode: boolean) => !prevMode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem(STORAGE_KEY, isDarkMode.toString())
  }, [isDarkMode])

  return { isDarkMode, toggleDarkMode }
}
