import React from 'react'

import CounterReducer from './component/CounterReducer'
import ContextProvider from './component/ContextProvider'
import SearchRefs from './component/SearchRefs'
import ButtonRefs from './component/ButtonRefs'

const Test = () => {
  return (
    <>
      <CounterReducer />

      <br />

      <ContextProvider />

      <br />

      <SearchRefs />

      <br />

      <ButtonRefs />
    </>
  )
}

export default Test
