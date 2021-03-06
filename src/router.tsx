import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes as Routes_, Route, Navigate } from 'react-router-dom'

const genRoute = (route: Route) => {
  if (route.children.length === 0) {
    return <Route key={route.path} path={route.path} element={route.element} />
  } else {
    return (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children.map((route) => genRoute(route))}
      </Route>
    )
  }
}

const Layout = lazy(() => import('/@/layout'))
const Home = lazy(() => import('/@/views/Home'))
const About = lazy(() => import('/@/views/About'))
const Users = lazy(() => import('/@/views/Users'))
const Test = lazy(() => import('/@/views/Test'))
const VirtualRolling = lazy(() => import('/@/views/VirtualRolling'))

const routes: Route[] = [
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
        path: '/default/virtual-rolling',
        element: (
          <Suspense fallback={<>loading VirtualRolling</>}>
            <VirtualRolling />
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
]

export const Routes = () => (
  <BrowserRouter>
    <Routes_>{routes.map((route) => genRoute(route))}</Routes_>
  </BrowserRouter>
)
