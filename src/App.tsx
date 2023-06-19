import { RouterProvider } from 'react-router-dom'

import { router } from '/@/router'

import '/@/assets/index.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
