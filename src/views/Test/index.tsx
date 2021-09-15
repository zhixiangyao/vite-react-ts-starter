import React from 'react'

import CounterReducer from './component/CounterReducer'
import ContextProvider from './component/ContextProvider'

const Test = () => {
  return (
    <>
      <CounterReducer />

      <br />

      <ContextProvider />
    </>
  )
}

export default Test
