import { useState } from 'react'

import { useCountStore, useDataStore } from '/@/store'

import { useClickOutSide } from '../hooks/useClickOutSide'

const UsersPage: React.FC = () => {
  const zustandCount = useCountStore((state) => state.count)
  const dataState = useDataStore()

  const [text, setText] = useState('undefined')

  const clickRef = useClickOutSide<HTMLDivElement>(
    () => setText(() => 'clickInSide'),
    () => setText(() => 'clickOutSide'),
  )

  return (
    <>
      <h2>Users</h2>
      <h2>
        <span>zustand count: </span>
        <span>{zustandCount}</span>
      </h2>
      <h2>
        <span>mini redux count: </span>
        <span>{dataState.data}</span>
      </h2>

      <div
        ref={clickRef}
        className="flex justify-center rounded-8px bg-black cursor-pointer select-none text-white text-5xl mb-5 p-5"
      >
        click inside
      </div>

      <div className="font-black">{text}</div>
    </>
  )
}

export default UsersPage
