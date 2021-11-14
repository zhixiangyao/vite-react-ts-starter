import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Layout from '/@/layout'
import Home from '/@/views/Home'
import About from '/@/views/About'
import Users from '/@/views/Users'
import Test from '/@/views/Test'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={'/default/home'} />} />
        <Route path="/default" element={<Layout />}>
          <Route path="/default/home" element={<Home />} />
          <Route path="/default/about" element={<About />} />
          <Route path="/default/users" element={<Users />} />
          <Route path="/default/test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
