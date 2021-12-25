import React from 'react'
import { Provider } from 'mobx-react'

import { Routes } from '/@/router'
import { store } from '/@/store'

const App = () => {
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
    // </React.StrictMode>
  )
}

export default App
