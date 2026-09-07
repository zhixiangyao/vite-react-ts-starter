import { useCallback, useState } from 'react'

import { usePrevious } from '~/hooks/usePrevious'

export const PrevPropsState: React.FC = () => {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  const increment = useCallback(() => {
    console.log(`%c "count": ${count},  "prevCount": ${prevCount}.`, 'color: yellow')
    setCount(count + 1)
  }, [count, prevCount])

  return (
    <fieldset className="w-300px flex flex-col items-center justify-evenly rounded-md border-4 border-red-400 px-4 py-2">
      <legend className="px-2 font-bold">PrevPropsState</legend>

      <div>
        Now: {count} Before: {prevCount}
      </div>
      <button
        type="button"
        className="text-20px flex-shrink-0 rounded-md bg-red-400 px-8 py-2 text-sm font-bold text-white hover:bg-red-300"
        onClick={increment}
      >
        +
      </button>
    </fieldset>
  )
}
