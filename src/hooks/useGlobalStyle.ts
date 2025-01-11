import { useCallback, useEffect } from 'react'

export function useGlobalStyle(className?: string) {
  const remove = useCallback(() => {
    className && document.body.classList.remove(className)
  }, [className])

  useEffect(() => {
    className && document.body.classList.add(className)

    return () => {
      className && document.body.classList.remove(className)
    }
  }, [className])

  return { remove }
}
