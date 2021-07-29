import React from 'react'
import ReactDOM from 'react-dom'
import '/@/assets/index.css'
import App from '/@/App'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
