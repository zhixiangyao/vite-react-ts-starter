import React from 'react'

import CounterReducer from './component/CounterReducer'
import ContextProvider from './component/ContextProvider'
import SearchRefs from './component/SearchRefs'
import ButtonRefs from './component/ButtonRefs'
import PrevPropsState from './component/PrevPropsState'

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

      <br />

      <PrevPropsState />
    </>
  )
}

export default Test
