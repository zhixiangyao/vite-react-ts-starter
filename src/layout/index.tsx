import { Outlet } from 'react-router-dom'

import { Nav } from './components/Nav'
import { Main } from './components/Main'

type Props = {}

export const Layout: React.FC<Props> = () => {
  return (
    <>
      <Nav />
      <Main children={<Outlet />} />
    </>
  )
}
