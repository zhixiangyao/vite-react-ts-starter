import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from '/@/App'
import store from '/@/store'
import { getElementById } from '/@/utils'
import '/@/assets/index.css'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  getElementById('root')
)
