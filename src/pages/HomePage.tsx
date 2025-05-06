import { useEffect, useState } from 'react'

import { ReactLogo } from '~/components/ReactLogo'
import { useCountStore } from '~/store'

export const HomePage: React.FC = () => {
  const countStore = useCountStore()
  const [count, setCount] = useState(0)

  useEffect(() => console.log('componentDidMount and count-Update'), [count])

  return (
    <>
      <h2>Home</h2>

      <ReactLogo />

      <button
        className="my-2 rounded-md bg-gray-400 px-4 py-1 text-2xl"
        type="button"
        onClick={() => setCount(count => count + 1)}
      >
        Add + 1: count is:
        {' '}
        {count}
      </button>

      <button
        className="my-2 rounded-md bg-gray-400 px-4 py-1 text-2xl"
        type="button"
        onClick={() => countStore.increase(1)}
      >
        Add + 1: zustand count is:
        {' '}
        {countStore.count}
      </button>

      <p>
        Edit
        {' '}
        <code>Home.tsx</code>
        {' '}
        and save to test HMR updates.
      </p>
    </>
  )
}
