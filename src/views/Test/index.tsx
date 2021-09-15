import React from 'react'

import Counter from './component/Counter'
import ContextProvider from './component/ContextProvider'

const Test = () => {
  return (
    <>
      <Counter />

      <br />

      <ContextProvider />
    </>
  )
}

export default Test
