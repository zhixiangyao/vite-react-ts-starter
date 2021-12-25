import React from 'react'
import ReactDOM from 'react-dom'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import App from '/@/App'
import { getElementById } from '/@/utils'
import '/@/assets/index.css'

const rootElement = getElementById('root')

ReactDOM.render(<App />, rootElement)
