import { Suspense, lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const Layout = lazy(() => import('/@/layout'))
const Home = lazy(() => import('/@/views/Home'))
const About = lazy(() => import('/@/views/About'))
const Users = lazy(() => import('/@/views/Users'))
const Test = lazy(() => import('/@/views/Test'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to={'/default/home'} />,
    children: [],
  },
  {
    path: '/default',
    element: (
      <Suspense fallback={<>loading Layout</>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: '/default/home',
        element: (
          <Suspense fallback={<>loading Home</>}>
            <Home />
          </Suspense>
        ),
        children: [],
      },
      {
        path: '/default/about',
        element: (
          <Suspense fallback={<>loading About</>}>
            <About />
          </Suspense>
        ),
        children: [],
      },
      {
        path: '/default/users',
        element: (
          <Suspense fallback={<>loading Users</>}>
            <Users />
          </Suspense>
        ),
        children: [],
      },
      {
        path: '/default/test',
        element: (
          <Suspense fallback={<>loading Test</>}>
            <Test />
          </Suspense>
        ),
        children: [],
      },
      {
        path: '/default/*',
        element: <div>Not Found</div>,
        children: [],
      },
    ],
  },
  {
    path: '/*',
    element: <div>Not Found</div>,
    children: [],
  },
])

export { router }
