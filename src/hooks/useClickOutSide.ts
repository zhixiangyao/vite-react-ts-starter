import { useCallback, useLayoutEffect, useRef } from 'react'

import { useStateRef } from './useStateRef'

const useClickOutSide = <T extends HTMLElement>(inSide?: () => void, outSide?: () => void) => {
  const inSideRef = useStateRef(inSide)
  const outSideRef = useStateRef(outSide)
  const targetRef = useRef<T | null>(null)

  const handleGlobalClick = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      if (!targetRef.current?.getBoundingClientRect) return

      const { right, left, bottom, top } = targetRef.current.getBoundingClientRect()

      if (clientX > right || clientX < left || clientY > bottom || clientY < top) {
        outSideRef.current && outSideRef.current()
      } else {
        inSideRef.current && inSideRef.current()
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

export { useClickOutSide }
