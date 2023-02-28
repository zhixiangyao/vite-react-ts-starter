import React, { useState, useEffect } from 'react'
import { Observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { useStore } from '/@/hooks'
import ReactLogo from '/@/components/ReactLogo'

const Button = styled.button`
  font-size: calc(10px + 2vmin);
`

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  const counterStore = useStore('counterStore')

  // useEffect(() => console.log('componentDidMount!'), [])

  // useEffect(() => console.log('componentDidMount-and-componentDidUpdate!'))

  // useEffect(() => {
  //   console.log('componentDidMount~')
  //   return () => console.log('componentWillUnmount~')
  // }, [])

  useEffect(() => console.log('componentDidMount and count-Update'), [count])

  return (
    <Observer>
      {() => (
        <>
          <h2>Home</h2>

          <ReactLogo />

          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>

          <Button type="button" onClick={() => counterStore.setCount()}>
            mobxCount is: {counterStore.count}
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
