import { RouterProvider } from 'react-router-dom'

import { router } from '/@/router'

import '/@/styles/global.css'

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
