import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from '/@/views/ErrorPage'

type Route = {
  label: string
  path: string
  element: Promise<React.FC>
}

export const routes: Route[] = [
  {
    label: 'Home',
    path: '/home',
    element: import('/@/views/HomePage').then(({ HomePage }) => HomePage),
  },
  {
    label: 'About',
    path: '/about',
    element: import('/@/views/AboutPage').then(({ AboutPage }) => AboutPage),
  },
  {
    label: 'Users',
    path: '/users',
    element: import('/@/views/UsersPage').then(({ UsersPage }) => UsersPage),
  },
  {
    label: 'Test',
    path: '/test',
    element: import('/@/views/TestPage').then(({ TestPage }) => TestPage),
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('/@/layout').then(({ Layout }) => ({ Component: Layout })),
    errorElement: <ErrorPage />,
    children: routes.map((route) => ({
      path: route.path,
      lazy: () => route.element.then((Component) => ({ Component })),
    })),
  },
])

export const Router = () => {
  return <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
}
