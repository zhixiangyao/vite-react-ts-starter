import React from 'react'

import { CounterReducer, ContextProvider, PrevPropsState, MemoUseCallback } from './component'

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
    </>
  )
}

export default Test
