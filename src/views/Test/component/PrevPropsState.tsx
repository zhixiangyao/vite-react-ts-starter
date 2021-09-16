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
    console.log('------3------')
    console.log('useEffect-prevCountRef', prevCountRef.current)
    console.log('------4------')
  })

  console.log('------1------')
  console.log(count, prevCountRef.current)
  console.log('------2------')

  return (
    <fieldset>
      <legend>usePrevious</legend>

      <h1>
        Now: {count}, Before: {prevCountRef.current}
      </h1>
      <button
        className="w-1/2 flex items-center justify-center border border-black shadow-offset-black"
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
    </fieldset>
  )
}

export default PrevPropsState
