import { Outlet } from 'react-router-dom'

import Nav from './components/Nav'
import Main from './components/Main'

const Layout: React.FC = () => {
  return (
    <>
      <Nav />
      <Main children={<Outlet />} />
    </>
  )
}

export default Layout
