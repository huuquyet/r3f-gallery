'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="error">
      <h2>Something went wrong!</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}
