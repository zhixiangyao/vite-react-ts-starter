import React, { useState, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '/@/hook'
import { increment } from '/@/store/counter/counterSlice'
import ReactLogo from '/@/components/ReactLogo'
import style from '/@/views/Home.module.css'

export default function Home() {
  const [count, setCount] = useState(0)

  const reduxCount = useAppSelector(state => state.counterReducer.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('componentDidMount!')
  }, [])

  useEffect(() => {
    console.log('componentDidMount-and-componentDidUpdate!')
  })

  useEffect(() => {
    console.log('componentDidMount~')

    return () => {
      console.log('componentWillUnmount~')
    }
  }, [])

  useEffect(() => {
    console.log('count update~')
  }, [count])

  useEffect(() => {
    console.log('reduxCount update~')
  }, [reduxCount])

  return (
    <>
      <h2>Home</h2>

      <ReactLogo />

      <p>
        <button type="button" className={style.HomeButton} onClick={() => setCount(count => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        <button type="button" className={style.HomeButton} onClick={() => dispatch(increment())}>
          redux count is: {reduxCount}
        </button>
      </p>
      <p>
        Edit <code>Home.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a className={style.HomeLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {' | '}
        <a
          className={style.HomeLink}
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </>
  )
}
