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
    <nav className="fixed left-0 top-0 z-10 w-screen bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between overflow-x-auto overflow-y-hidden">
          <div className="flex-shrink-0 rounded-md px-3 py-2 text-sm font-medium text-green-600">
            vite-react-ts
          </div>

          <div className="hidden flex-1 items-center justify-center sm:hidden sm:items-stretch sm:justify-start md:hidden lg:flex xl:flex">
            <div className="sm:ml-6 sm:block">
              <div className="flex select-none space-x-4">
                {' '}
                {navbarList.map(({ path, name, label }) => (
                  <button
                    key={name}
                    className={clsx(
                      'flex-shrink-0 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700',
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

          <div className="hidden flex-shrink-0 rounded-md px-3 py-2 text-sm font-medium text-blue-600 sm:hidden md:hidden lg:flex xl:flex">
            {`Current Routing Path: "${pathname}"`}
          </div>
        </div>
      </div>
      <GithubOctopusCat />
    </nav>
  )
}

export default Nav
