import React, { useState } from 'react'
import logo from '/@/assets/logo.svg'
import style from '/@/App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={style.App}>
      <header className={`bg-blue-800 ${style.AppHeader}`}>
        <img src={logo} className={style.AppLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" className={style.AppButton} onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className={style.AppLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className={style.AppLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
