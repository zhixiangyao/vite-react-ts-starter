import React from 'react'
import { Observer } from 'mobx-react'
import { useLocalStore } from '/@/hook'
import { store } from '/@/store'

function About() {
  const localStore = useLocalStore(store)

  return (
    <Observer>
      {() => (
        <>
          <h2>About</h2>
          <h2>
            <span>mobxCount: </span>
            <span>{localStore.count}</span>
          </h2>
        </>
      )}
    </Observer>
  )
}

export default About
