import { useNavigate, useLocation } from 'react-router-dom'
import clsx from 'clsx'

import GithubOctopusCat from '/@/components/GithubOctopusCat'

const navbarList = [
  {
    id: 1,
    label: 'Home',
    name: 'Home',
    path: '/home',
  },
  {
    id: 2,
    label: 'About',
    name: 'About',
    path: '/about',
  },
  {
    id: 3,
    label: 'Users',
    name: 'Users',
    path: '/users',
  },
  {
    id: 4,
    label: 'Test',
    name: 'Test',
    path: '/test',
  },
]

type Props = {}

const Nav: React.FC<Props> = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-screen z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 overflow-x-auto overflow-y-hidden">
          <div className="text-green-600 flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium">
            vite-react-ts
          </div>

          <div className="hidden sm:hidden md:hidden lg:flex xl:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="sm:block sm:ml-6">
              <div className="flex space-x-4 select-none">
                {' '}
                {navbarList.map(({ path, name, label }) => (
                  <button
                    key={name}
                    className={clsx(
                      'hover:bg-gray-700 text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium',
                      path === pathname && 'bg-gray-900',
                      path !== pathname && 'text-gray-300',
                    )}
                    onClick={() => navigate(path)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:hidden md:hidden lg:flex xl:flex text-blue-600 flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium">
            {`Current Routing Path: "${pathname}"`}
          </div>
        </div>
      </div>
      <GithubOctopusCat />
    </nav>
  )
}

export default Nav
