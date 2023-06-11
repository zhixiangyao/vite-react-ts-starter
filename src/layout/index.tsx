import { useNavigate, useLocation, Outlet } from 'react-router-dom'

import Nav from './components/Nav'
import Main from './components/Main'

const navbarList = [
  {
    id: 1,
    label: 'Home',
    name: 'Home',
    path: '/default/home',
  },
  {
    id: 2,
    label: 'About',
    name: 'About',
    path: '/default/about',
  },
  {
    id: 3,
    label: 'Users',
    name: 'Users',
    path: '/default/users',
  },
  {
    id: 4,
    label: 'Test',
    name: 'Test',
    path: '/default/test',
  },
]

export default () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const navChildren = {
    title: 'vite-react-ts',
    default: (
      <>
        {navbarList.map(({ path, name, label }) => (
          <button
            key={name}
            className={`hover:bg-gray-700 text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium ${
              path === pathname && 'bg-gray-900'
            } ${path !== pathname && 'text-gray-300'}`}
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </>
    ),
    info: `Current Routing Path: "${pathname}"`,
  }

  return (
    <>
      <Nav children={navChildren} />
      <Main children={<Outlet />} />
    </>
  )
}
