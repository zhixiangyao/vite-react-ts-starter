import React from 'react'
import { renderRoutes } from 'react-router-config'

import routes from '/@/router'

const App = () => <>{renderRoutes(routes)}</>

export default App
