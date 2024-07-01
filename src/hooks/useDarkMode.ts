import { useState, useEffect } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const useDarkMode = () => {
  const STORAGE_KEY = 'darkMode'
  const queryClient = useQueryClient()

  const getInitialDarkMode = () => {
    const storedDarkMode = localStorage.getItem(STORAGE_KEY)
    return storedDarkMode ? JSON.parse(storedDarkMode) : false
  }

  const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkMode)

  const { data } = useQuery({
    queryKey: ['darkMode'],
    queryFn: () => darkMode,
    initialData: darkMode,
  })

  const toggleDarkMode = () => setDarkMode((prevMode: boolean) => !prevMode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem(STORAGE_KEY, darkMode.toString())
    queryClient.setQueryData(['darkMode'], darkMode)
  }, [darkMode, queryClient])

  return { data, toggleDarkMode }
}
