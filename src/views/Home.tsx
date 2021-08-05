import React, { useState, useEffect } from 'react'
import { Observer } from 'mobx-react'
import { useLocalStore } from '/@/hook'

import ReactLogo from '/@/components/ReactLogo'
import style from '/@/views/Home.module.css'

function Home() {
  const [count, setCount] = useState(0)
  const localStore = useLocalStore()

  useEffect(() => console.log('componentDidMount!'), [])

  useEffect(() => console.log('componentDidMount-and-componentDidUpdate!'))

  useEffect(() => {
    console.log('componentDidMount~')

    return () => console.log('componentWillUnmount~')
  }, [])

  useEffect(() => console.log('count update~'), [count])

  return (
    <Observer>
      {() => (
        <>
          <h2>Home</h2>

          <ReactLogo />

          <p>
            <button
              type="button"
              className={style.HomeButton}
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p>
            <button
              type="button"
              className={style.HomeButton}
              onClick={() => localStore.setCount()}
            >
              mobxCount is: {localStore.count}
            </button>
          </p>
          <p>
            Edit <code>Home.tsx</code> and save to test HMR updates.
          </p>
        </>
      )}
    </Observer>
  )
}

export default Home
