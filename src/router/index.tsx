import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '/@/views/Home'
import About from '/@/views/About'
import Users from '/@/views/Users'

const RouterView = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
)

export { RouterView }
