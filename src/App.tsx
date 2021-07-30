import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { RouterView } from '/@/router'
import Nav from '/@/layout/Nav'
import Main from '/@/layout/Main'

const navbarList = [
  {
    id: 1,
    label: 'Home',
    name: 'Home',
    path: '/',
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
]

const App = () => {
  const history = useHistory()
  const { pathname } = useLocation()

  useEffect(() => {
    console.log('pathname:', pathname)
  }, [pathname])

  const navChildren = {
    title: <span>vite-react-ts</span>,
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

  const mainChildren = <RouterView />

  return (
    <>
      <Nav children={navChildren} />
      <Main children={mainChildren} />
    </>
  )
}

export default App
