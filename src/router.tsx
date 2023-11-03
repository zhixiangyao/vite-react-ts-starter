import { Suspense, lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Layout } from '/@/layout'

const HomePage = lazy(() =>
  import('./views/HomePage').then(({ HomePage }) => ({ default: HomePage })),
)
const AboutPage = lazy(() =>
  import('./views/AboutPage').then(({ AboutPage }) => ({ default: AboutPage })),
)
const UsersPage = lazy(() =>
  import('./views/UsersPage').then(({ UsersPage }) => ({ default: UsersPage })),
)
const TestPage = lazy(() =>
  import('./views/TestPage').then(({ TestPage }) => ({ default: TestPage })),
)
const ErrorPage = lazy(() =>
  import('/@/views/ErrorPage').then(({ ErrorPage }) => ({ default: ErrorPage })),
)

const router = createBrowserRouter([
  {
    path: '',
    element: <Navigate replace to={'/home'} />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: (
          <Suspense fallback={<>loading Home</>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<>loading About</>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: '/users',
        element: (
          <Suspense fallback={<>loading Users</>}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: '/test',
        element: (
          <Suspense fallback={<>loading Test</>}>
            <TestPage />
          </Suspense>
        ),
      },
    ],
  },
])

export { router }
