import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
// import { useGetCoordinates } from '@/hooks/useFetchCoordinates'
import { useFetchWeather } from '@/hooks/useFetchWeather'
import { useQueryClient } from '@tanstack/react-query'

interface SearchProps {
  setCoordinates: (coordinates: { lat: number; lon: number }) => void
}

export default function Search({ setCoordinates }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const queryClient = useQueryClient()

  // const { data: coordinates, refetch: refetchCoordinates } =
  //   useFetchCoordinates(searchTerm)

  const search = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (searchTerm.length < 1) return

    // Dummy lat/lon for example purposes; you should fetch real coordinates based on search term
    const lat = 43.5488256
    const lon = -96.7307737

    setCoordinates({ lat, lon })
    queryClient.invalidateQueries({ queryKey: ['weatherData'] })
  }

  return (
    <div>
      <form className="flex w-full items-center">
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Button type="submit" onClick={search}>
          Search
        </Button>
      </form>
    </div>
  )
}
