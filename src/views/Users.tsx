import React from 'react'
import ReactLogo from '/@/components/ReactLogo'
import { Observer } from 'mobx-react'
import { useLocalStore } from '/@/hook'

function Users() {
  const localStore = useLocalStore()

  return (
    <Observer>
      {() => (
        <>
          <h2>Users</h2>
          <ReactLogo />
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
