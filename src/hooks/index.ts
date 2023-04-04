import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

const usePrevious = <T>(val: T) => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = val
  })
  return ref.current
}

const useStateRef = <T>(val: T) => {
  const result = useRef(val)
  useEffect(() => {
    result.current = val
  }, [val])
  return result
}

const useClickOutSide = <T extends HTMLElement>(inSide?: () => void, outSide?: () => void) => {
  const inSideRef = useStateRef(inSide)
  const outSideRef = useStateRef(outSide)
  const targetRef = useRef<T>(null)

  const handleGlobalClick = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      if (!targetRef.current?.getBoundingClientRect) return

      const { right, left, bottom, top } = targetRef.current.getBoundingClientRect()

      if (clientX > right || clientX < left || clientY > bottom || clientY < top) {
        inSideRef.current && inSideRef.current()
      } else {
        outSideRef.current && outSideRef.current()
      }
    },
    [inSideRef, outSideRef],
  )

  useLayoutEffect(() => {
    window.addEventListener('click', handleGlobalClick)
    return () => {
      window.removeEventListener('click', handleGlobalClick)
    }
  }, [handleGlobalClick])

  return targetRef
}

export { usePrevious, useStateRef, useClickOutSide }
