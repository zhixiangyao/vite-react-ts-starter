import React from 'react'
import { useAppSelector } from '/@/hook'

function About() {
  const reduxCount = useAppSelector(state => state.counterReducer.value)

  return (
    <>
      <h2>About</h2>
      <h2>
        <span>reduxCount: </span>
        <span>{reduxCount}</span>
      </h2>
    </>
  )
}

export default About
