import React from 'react'
import { useAppSelector } from '/@/hook'
import ReactLogo from '/@/components/ReactLogo'

function Test() {
  const reduxCount = useAppSelector((state) => state.counterReducer.value)

  return (
    <>
      <h2>Test</h2>
      <ReactLogo />
      <h2>
        <span>reduxCount: </span>
        <span>{reduxCount}</span>
      </h2>
    </>
  )
}

export default Test
