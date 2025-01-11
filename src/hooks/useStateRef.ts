import { useEffect, useRef } from 'react'

function useStateRef<T>(val: T) {
  const result = useRef(val)
  useEffect(() => {
    result.current = val
  }, [val])
  return result
}

export { useStateRef }
