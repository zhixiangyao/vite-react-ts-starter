import { useEffect, useRef } from 'react'

const useStateRef = <T>(val: T) => {
  const result = useRef(val)
  useEffect(() => {
    result.current = val
  }, [val])
  return result
}

export { useStateRef }
