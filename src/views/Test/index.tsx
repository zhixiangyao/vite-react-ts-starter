import React from 'react'

import { CounterReducer, ContextProvider, PrevPropsState } from './component'
import { MemoUseCallback, Memo } from './component'

import { SearchRefs, ButtonRefs } from './component'

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
