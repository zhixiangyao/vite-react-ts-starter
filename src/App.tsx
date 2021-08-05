import React, { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'

import routes from '/@/router'

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>{renderRoutes(routes)}</Suspense>
  </Router>
)

export default App
