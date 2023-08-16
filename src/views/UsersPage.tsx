import { useState } from 'react'

import { useCountStore } from '/@/store'

import { useClickOutSide } from '../hooks/useClickOutSide'

const UsersPage: React.FC = () => {
  const zustandCount = useCountStore((state) => state.count)

  const [text, setText] = useState('undefined')

  const clickRef = useClickOutSide<HTMLDivElement>(
    () => setText(() => 'clickInSide'),
    () => setText(() => 'clickOutSide'),
  )

  return (
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
        <span>zustand count: </span>
        <span>{zustandCount}</span>
      </h2>
    </>
  )
}

export default UsersPage
