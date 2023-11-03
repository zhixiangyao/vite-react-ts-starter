import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Nav } from './components/Nav'
import { Main } from './components/Main'

type Props = {}

export const Layout: React.FC<Props> = () => {
  const location = useLocation()

  if (location.pathname === '/') {
    return <Navigate replace to={'/home'} />
  }

  return (
    <>
      <Nav />

      <Main children={<Outlet />} />
    </>
  )
}
