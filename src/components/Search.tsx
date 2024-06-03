import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useFetchCoordinates } from '@/hooks/useFetchCoordinates'
import { useQueryClient } from '@tanstack/react-query'

interface SearchProps {
  setCoordinates: (coordinates: { lat: number; lon: number }) => void
}

export default function Search({ setCoordinates }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const queryClient = useQueryClient()

  const coordinatesQuery = useFetchCoordinates(searchTerm)

  const search = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (searchTerm.length < 1) return

    const res = await coordinatesQuery.refetch()
    const newCoordinates = res.data

    console.log({ newCoordinates })

    if (newCoordinates) {
      setCoordinates({ lat: newCoordinates.lat, lon: newCoordinates.lon })
      queryClient.invalidateQueries({ queryKey: ['weatherData'] })
      queryClient.invalidateQueries({ queryKey: ['forecastData'] })
    }
  }

  return (
    <form className="flex w-full items-center">
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="rounded-none border-0 shadow-transparent"
      />
      <Button
        type="submit"
        onClick={search}
        disabled={coordinatesQuery.isLoading}
        className="border-0  bg-transparent shadow-transparent"
      >
        <MagnifyingGlassIcon className="text-black dark:text-white" />
      </Button>
    </form>
  )
}
