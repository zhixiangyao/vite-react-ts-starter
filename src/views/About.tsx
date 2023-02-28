import React from 'react'
import { Observer } from 'mobx-react-lite'
import { useStore } from '/@/hooks'

const About: React.FC = () => {
  const counterStore = useStore('counterStore')

  return (
    <Observer>
      {() => (
        <>
          <h2>About</h2>
          <h2>
            <span>mobxCount: </span>
            <span>{counterStore.count}</span>
          </h2>
        </>
      )}
    </Observer>
  )
}

export default About
