import React from 'react'
import { createRoot } from 'react-dom/client'

import { getElementById } from '/@/utils'
import { App } from '/@/App'

const rootElement = getElementById('root')

const app = createRoot(rootElement)

app.render(<App />)
