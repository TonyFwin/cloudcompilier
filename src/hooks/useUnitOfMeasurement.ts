import { useState, useEffect } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { UnitOfMeasurement } from '@/types/measurement'

export const useUnitOfMeasurement = () => {
  const STORAGE_KEY = 'unitOfMeasurement'
  const queryClient = useQueryClient()

  const getInitialUnit = () => {
    const storedUnit = localStorage.getItem(STORAGE_KEY)
    return (storedUnit as UnitOfMeasurement) ?? 'metric'
  }

  const [unit, setUnit] = useState<UnitOfMeasurement>(getInitialUnit)

  const { data } = useQuery<UnitOfMeasurement>({
    queryKey: ['unitOfMeasurement'],
    queryFn: () => unit,
    initialData: unit,
  })

  const toggleUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric'
    setUnit(newUnit)
    localStorage.setItem(STORAGE_KEY, newUnit)
    queryClient.setQueryData(['unitOfMeasurement'], newUnit)
    queryClient.invalidateQueries({ queryKey: ['forecast'] })
    queryClient.invalidateQueries({ queryKey: ['weatherData'] })
  }

  useEffect(() => {
    queryClient.setQueryData(['unitOfMeasurement'], unit)
  }, [unit, queryClient])

  return { data, toggleUnit }
}
