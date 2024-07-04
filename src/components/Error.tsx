interface ErrorProps {
  message: string
}

export default function Error({
  message = 'Something went wrong. Please try again.',
}: ErrorProps) {
  return (
    <p data-testid="error" className="font-semibold text-red-600 dark:text-red-400">
      Error: {message}
    </p>
  )
}
