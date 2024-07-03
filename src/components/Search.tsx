import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useFetchCoordinates } from '@/hooks/useFetchCoordinates'
import { Coordinates } from '@/types/coordinates'
import Error from './Error'

interface SearchProps {
  setCoordinates: (coordinates: Coordinates) => void
}

export default function Search({ setCoordinates }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isValidSearch, setIsValidSearch] = useState(true)

  const { isLoading, refetch, isError, error } = useFetchCoordinates(searchTerm)

  const search = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (searchTerm.length < 1) return

    const res = await refetch()
    const newCoordinates = res.data

    if (newCoordinates && newCoordinates.length > 0) {
      setCoordinates({ lat: newCoordinates[0].lat, lon: newCoordinates[0].lon })
      setIsValidSearch(true)
    } else {
      setIsValidSearch(false)
    }
  }

  if (isError) {
    return <Error message={error.message} />
  }

  return (
    <form className="w-full flex-col">
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
        <div className="w-full mt-2 pl-3">
          <Error message="City not found. Please try again." />
        </div>
      )}
    </form>
  )
}
