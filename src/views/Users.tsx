import { useState } from 'react'

import { useCountStore } from '/@/store'
import { useClickOutSide } from '/@/hooks'

const Users: React.FC = () => {
  const zustandCount = useCountStore((state) => state.count)

  const [text, setText] = useState('undefined')

  const clickRef = useClickOutSide<HTMLDivElement>(
    () => setText(() => 'clickOutSide'),
    () => setText(() => 'clickInSide'),
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
        <span>zustandCount: </span>
        <span>{zustandCount}</span>
      </h2>
    </>
  )
}

export default Users
