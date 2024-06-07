interface ErrorProps {
  message: string
}
// https://tkdodo.eu/blog/react-query-and-type-script
export default function Error({ message = 'Something went wrong' }: ErrorProps) {
  return <p className="text-red font-semibold">{message}</p>
}
