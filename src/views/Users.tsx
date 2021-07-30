import React from 'react'
import { useAppSelector } from '/@/hook'

function Users() {
  const reduxCount = useAppSelector(state => state.counterReducer.value)

  return (
    <>
      <h2>Users</h2>
      <h2>
        <span>reduxCount: </span>
        <span>{reduxCount}</span>
      </h2>
    </>
  )
}

export default Users
