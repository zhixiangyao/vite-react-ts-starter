import React from 'react'

import { Routes } from '/@/router'
import { stores, StoresProvider } from './store'

const App = () => {
  return (
    // <React.StrictMode>
    <StoresProvider value={stores}>
      <Routes />
    </StoresProvider>
    // </React.StrictMode>
  )
}

export default App
