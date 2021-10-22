import React from 'react'

import CounterReducer from './component/CounterReducer'
import ContextProvider from './component/ContextProvider'
import SearchRefs from './component/SearchRefs'
import ButtonRefs from './component/ButtonRefs'
import PrevPropsState from './component/PrevPropsState'
import MemoUseCallback from './component/MemoUseCallback'

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

      <br />

      <MemoUseCallback />
    </>
  )
}

export default Test
