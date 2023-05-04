import { useState, useEffect } from 'react'

import styled from 'styled-components'

import ReactLogo from '/@/components/ReactLogo'
import { useCountStore } from '/@/store'

const Button = styled.button`
  font-size: calc(10px + 2vmin);
`

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  const countStore = useCountStore()

  useEffect(() => console.log('componentDidMount and count-Update'), [count])

  return (
    <>
      <h2>Home</h2>

      <ReactLogo />

      <Button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </Button>

      <Button type="button" onClick={() => countStore.increase(1)}>
        zustandCount is: {countStore.count}
      </Button>

      <p>
        Edit <code>Home.tsx</code> and save to test HMR updates.
      </p>
    </>
  )
}

export default Home
