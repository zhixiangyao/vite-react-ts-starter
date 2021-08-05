import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'

import App from '/@/App'
import { store } from '/@/store'
import { getElementById } from '/@/utils'
import '/@/assets/index.css'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app, getElementById('root'))
