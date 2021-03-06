import React from 'react'

import { CounterReducer, ContextProvider, PrevPropsState } from './components'
import { MemoUseCallback, Memo } from './components'

import { SearchRefs, ButtonRefs } from './components'

const Test = () => {
  return (
    <div className="grid grid-rows-7 lg:grid-rows-3 grid-flow-col gap-4">
      <CounterReducer />

      <ContextProvider />

      <SearchRefs />

      <ButtonRefs />

      <PrevPropsState />

      <MemoUseCallback />

      <Memo />
    </div>
  )
}

export default Test
