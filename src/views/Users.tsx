import React, { useState } from 'react'
import { Observer } from 'mobx-react'

import { useLocalStore, useClickOutSide } from '../hooks'
import { store } from '/@/store'

function Users() {
  const localStore = useLocalStore(store)

  const [text, setText] = useState('undefined')

  const clickRef = useClickOutSide(
    () => setText(() => 'clickOutSide'),
    () => setText(() => 'clickInSide'),
  )

  return (
    <Observer>
      {() => (
        <>
          <div
            ref={clickRef}
            className="flex justify-center rounded-8px bg-black cursor-pointer select-none text-white text-5xl mb-5 p-5"
          >
            click inside
          </div>

          <div className="font-black">{text}</div>

          <h2>Users</h2>
          <h2>
            <span>mobxCount: </span>
            <span>{localStore.count}</span>
          </h2>
        </>
      )}
    </Observer>
  )
}

export default Users
