import React from 'react'

import { useCountStore } from '/@/store'

const About: React.FC = () => {
  const zustandCount = useCountStore((state) => state.count)

  return (
    <>
      <h2>About</h2>
      <h2>
        <span>zustandCount: </span>
        <span>{zustandCount}</span>
      </h2>
    </>
  )
}

export default About
