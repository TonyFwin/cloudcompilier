import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useFetchCoordinates } from '@/hooks/useFetchCoordinates'
import { Coordinates, CoordinatesData } from '@/types/coordinates'
import Error from './Error'

interface SearchProps {
  setCoordinates: (coordinates: Coordinates) => void
}

export default function Search({ setCoordinates }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isValidSearch, setIsValidSearch] = useState(true)
  const [locations, setLocations] = useState<CoordinatesData[]>([])

  const { isLoading, refetch, isError, error } = useFetchCoordinates(searchTerm)

  const search = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (searchTerm.length < 1) return

    const res = await refetch()
    const newCoordinates = res.data

    if (newCoordinates && newCoordinates.length > 0) {
      setLocations(newCoordinates)
      setIsValidSearch(true)
    } else {
      setIsValidSearch(false)
    }
  }

  const selectLocation = (location: CoordinatesData) => {
    setCoordinates({ lat: location.lat, lon: location.lon })
    setLocations([])
    setSearchTerm('')
  }

  if (isError) {
    return <Error message={error.message} />
  }

  return (
    <form className="relative w-full flex-col">
      <div className="flex items-center">
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="rounded-none border-0 shadow-transparent dark:text-white dark:placeholder-gray-50 xl:text-xl"
        />
        <Button
          type="submit"
          onClick={search}
          disabled={isLoading}
          className="border-0 bg-transparent shadow-transparent"
          aria-label="Search"
        >
          <MagnifyingGlassIcon className="text-black placeholder-gray-700 dark:text-white xl:text-xl" />
        </Button>
      </div>
      {!isValidSearch && (
        <div className="mt-2 w-full pl-3">
          <Error message="City not found. Please try again." />
        </div>
      )}
      {locations.length > 0 && (
        <div className="absolute mt-2 w-full rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {locations.map((location, index) => (
              <li
                key={index}
                onClick={() => selectLocation(location)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {location.name}{location.state ? `, ${location.state}` : ''},{' '}
                {location.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  )
}
