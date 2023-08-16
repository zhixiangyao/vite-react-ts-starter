import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '/@/layout'

const Home = lazy(() => import('/@/views/Home'))
const About = lazy(() => import('/@/views/About'))
const Users = lazy(() => import('/@/views/Users'))
const Test = lazy(() => import('/@/views/Test'))
const ErrorPage = lazy(() => import('/@/views/ErrorPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: (
          <Suspense fallback={<>loading Home</>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<>loading About</>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/users',
        element: (
          <Suspense fallback={<>loading Users</>}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: '/test',
        element: (
          <Suspense fallback={<>loading Test</>}>
            <Test />
          </Suspense>
        ),
      },
    ],
  },
])

export { router }
