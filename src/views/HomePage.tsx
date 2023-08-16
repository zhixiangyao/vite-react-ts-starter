import { useState, useEffect } from 'react'

import ReactLogo from '/@/components/ReactLogo'
import { useCountStore, useDataDispatch, useDataStore } from '/@/store'

const HomePage: React.FC = () => {
  const countStore = useCountStore()
  const dataState = useDataStore()
  const dataDispatch = useDataDispatch()

  const [count, setCount] = useState(0)

  useEffect(() => console.log('componentDidMount and count-Update'), [count])

  return (
    <>
      <h2>Home</h2>

      <ReactLogo />

      <button
        className="text-2xl py-1 px-4 bg-gray-400 rounded-md my-2"
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        Add + 1: count is: {count}
      </button>

      <button
        className="text-2xl py-1 px-4 bg-gray-400 rounded-md my-2"
        type="button"
        onClick={() => countStore.increase(1)}
      >
        Add + 1: zustand count is: {countStore.count}
      </button>

      <button
        className="text-2xl py-1 px-4 bg-gray-400 rounded-md my-2"
        type="button"
        onClick={() => dataDispatch({ type: 'ADD' })}
      >
        Add + 1: mini redux count is: {dataState.data}
      </button>

      <button
        className="text-2xl py-1 px-4 bg-gray-400 rounded-md my-2"
        type="button"
        onClick={() => dataDispatch({ type: 'MULTIPLY', value: 2 })}
      >
        Multiply * 2: mini redux count is: {dataState.data}
      </button>

      <p>
        Edit <code>Home.tsx</code> and save to test HMR updates.
      </p>
    </>
  )
}

export default HomePage
