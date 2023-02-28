import React from 'react'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import { Routes } from '/@/router'
import { stores, StoresProvider } from './store'
import '/@/assets/index.css'

const App: React.FC = () => {
  return (
    // <React.StrictMode>
    <StoresProvider value={stores}>
      <Routes />
    </StoresProvider>
    // </React.StrictMode>
  )
}

export default App
