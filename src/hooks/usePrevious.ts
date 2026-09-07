import { useState } from 'react'

function usePrevious<T>(value: T) {
  const [state, setState] = useState({ value, previous: value })

  // Render-phase update: keep the previous value in sync with the latest one.
  // React re-renders immediately, so the returned value stays one render behind
  // the current `value` without ever reading a ref during render.
  if (state.value !== value) {
    setState({ value, previous: state.value })
  }

  return state.previous
}

export { usePrevious }
