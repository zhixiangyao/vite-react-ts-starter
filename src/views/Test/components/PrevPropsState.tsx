import React, { useState, useEffect, useRef } from 'react'

// import { usePrevious } from '/@/hook'

const PrevPropsState = () => {
  const [count, setCount] = useState(0)

  const prevCountRef = useRef<number>()

  useEffect(() => {
    /**
     * 请记住，当 ref 对象内容发生变化时，useRef 并不会通知你。
     * 变更 .current 属性不会引发组件重新渲染。
     * 如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref 来实现。
     */
    prevCountRef.current = count

    console.log(
      `%c "count": ${count},  "prevCountRef.current": ${prevCountRef.current}.`,
      'color: red',
    )
  })

  console.log(
    `%c "count": ${count},  "prevCountRef.current": ${prevCountRef.current}.`,
    'color: red',
  )

  return (
    <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-red-400">
      <legend className="px-2 font-bold">PrevPropsState</legend>

      <div>
        Now: {count}, Before: {prevCountRef.current}
      </div>
      <button
        className="text-20px font-bold bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-8 py-2 rounded-md text-sm font-medium"
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
    </fieldset>
  )
}

export default PrevPropsState
