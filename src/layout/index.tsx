import React, { Suspense } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import type { Props } from '/@/router'

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

const Default: React.FC<Props> = ({ route }) => {
  const history = useHistory()
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
            onClick={() => history.push(path)}
          >
            {label}
          </button>
        ))}
      </>
    ),
    info: `当前路由-PATH: "${pathname}"`,
  }

  return (
    <>
      <Nav children={navChildren} />
      <Main
        children={
          <Suspense fallback={<div>Loading...</div>}>{renderRoutes(route?.routes)}</Suspense>
        }
      />
    </>
  )
}

export default Default
