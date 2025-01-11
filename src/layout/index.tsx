import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Main } from './components/Main'
import { Nav } from './components/Nav'

interface Props {}

export const Layout: React.FC<Props> = () => {
  const location = useLocation()

  if (location.pathname === '/') {
    return <Navigate replace to="/home" />
  }

  return (
    <>
      <Nav />

      <Main children={<Outlet />} />
    </>
  )
}
