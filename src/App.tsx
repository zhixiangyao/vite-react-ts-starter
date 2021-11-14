import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const Layout = lazy(() => import('/@/layout'))
const Home = lazy(() => import('/@/views/Home'))
const About = lazy(() => import('/@/views/About'))
const Users = lazy(() => import('/@/views/Users'))
const Test = lazy(() => import('/@/views/Test'))

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={'/default/home'} />} />
        <Route
          path="/default"
          element={
            <Suspense fallback={<>loading Layout</>}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            path="/default/home"
            element={
              <Suspense fallback={<>loading Home</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/default/about"
            element={
              <Suspense fallback={<>loading About</>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/default/users"
            element={
              <Suspense fallback={<>loading Users</>}>
                <Users />
              </Suspense>
            }
          />
          <Route
            path="/default/test"
            element={
              <Suspense fallback={<>loading Test</>}>
                <Test />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
