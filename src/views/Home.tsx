import React, { useState, useEffect } from 'react'
import { Observer } from 'mobx-react'
import styled from 'styled-components'

import { useLocalStore } from '/@/hook'
import ReactLogo from '/@/components/ReactLogo'
import { store } from '/@/store'

const Button = styled.button`
  font-size: calc(10px + 2vmin);
`

function Home() {
  const [count, setCount] = useState(0)
  const localStore = useLocalStore(store)

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

          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>

          <Button type="button" onClick={() => localStore.setCount()}>
            mobxCount is: {localStore.count}
          </Button>

          <p>
            Edit <code>Home.tsx</code> and save to test HMR updates.
          </p>
        </>
      )}
    </Observer>
  )
}

export default Home
