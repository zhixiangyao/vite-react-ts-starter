import React from 'react'

import { CounterReducer, ContextProvider, PrevPropsState } from './components'
import { MemoUseCallback, Memo } from './components'

import { SearchRefs, ButtonRefs } from './components'

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

      <br />

      <Memo />
    </>
  )
}

export default Test
