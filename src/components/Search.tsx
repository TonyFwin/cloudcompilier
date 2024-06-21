import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useFetchCoordinates } from '@/hooks/useFetchCoordinates'

interface SearchProps {
  setCoordinates: (coordinates: { lat: number; lon: number }) => void
}

export default function Search({ setCoordinates }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const coordinatesQuery = useFetchCoordinates(searchTerm)

  const search = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (searchTerm.length < 1) return

    const res = await coordinatesQuery.refetch()
    const newCoordinates = res.data

    if (newCoordinates && newCoordinates.length > 0) {
      setCoordinates({ lat: newCoordinates[0].lat, lon: newCoordinates[0].lon })
    }
  }

  return (
    <form className="flex w-full items-center">
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="rounded-none border-0 shadow-transparent dark:text-white dark:placeholder-gray-50 xl:text-xl"
      />
      <Button
        type="submit"
        onClick={search}
        disabled={coordinatesQuery.isLoading}
        className="border-0 bg-transparent shadow-transparent"
        aria-label="Search"
      >
        <MagnifyingGlassIcon className="text-black placeholder-gray-700 dark:text-white xl:text-xl" />
      </Button>
    </form>
  )
}
