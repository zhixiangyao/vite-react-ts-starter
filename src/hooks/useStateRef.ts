import { useEffect, useRef } from 'react'

function useStateRef<T>(val: T) {
  const resultRef = useRef(val)
  useEffect(() => {
    resultRef.current = val
  }, [val])
  return resultRef
}

export { useStateRef }
