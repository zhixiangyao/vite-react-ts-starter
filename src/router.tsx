import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorPage } from '~/pages/ErrorPage'

interface Route {
  label: string
  path: string
  element: Promise<React.FC>
}

export const routes: Route[] = [
  {
    label: 'Home',
    path: '/home',
    element: import('./pages/HomePage').then(({ HomePage }) => HomePage),
  },
  {
    label: 'About',
    path: '/about',
    element: import('./pages/AboutPage').then(({ AboutPage }) => AboutPage),
  },
  {
    label: 'Users',
    path: '/users',
    element: import('./pages/UsersPage').then(({ UsersPage }) => UsersPage),
  },
  {
    label: 'Test',
    path: '/test',
    element: import('./pages/TestPage').then(({ TestPage }) => TestPage),
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('~/layout').then(({ Layout }) => ({ Component: Layout })),
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <h1>Loading...</h1>,
    children: routes.map(route => ({
      path: route.path,
      lazy: () => route.element.then(Component => ({ Component })),
    })),
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
