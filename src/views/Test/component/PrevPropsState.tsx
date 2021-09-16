import React, { useState } from 'react'

import { usePrevious } from '/@/hook'

const PrevPropsState = () => {
  const [count, setCount] = useState(0)

  const prevCount = usePrevious(count)

  return (
    <fieldset>
      <legend>usePrevious</legend>

      <h1>
        Now: {count}, Before: {prevCount}
      </h1>
      <button
        className="w-1/2 flex items-center justify-center border border-black shadow-offset-black"
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
    </fieldset>
  )
}

export default PrevPropsState
