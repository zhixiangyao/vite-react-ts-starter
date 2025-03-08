import { useEffect, useRef } from 'react'

function usePrevious<T>(val: T) {
  const ref = useRef<T>(val)
  useEffect(() => {
    ref.current = val
  })
  return ref.current
}

export { usePrevious }
