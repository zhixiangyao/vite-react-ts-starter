import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '/@/App'
import store from '/@/store'
import { getElementById } from '/@/utils'
import '/@/assets/index.css'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  getElementById('root')
)
