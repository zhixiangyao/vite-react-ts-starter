import React from 'react'

import type { RouteConfig } from 'react-router-config'
import { Redirect } from 'react-router-dom'

import Layout from '/@/layout'
import Home from '/@/views/Home'
import About from '/@/views/About'
import Users from '/@/views/Users'
import Test from '/@/views/Test'

export interface Props {
  route?: {
    routes: RouteConfig['routes']
  }
}

export interface CopyRouteConfig extends RouteConfig {
  component?: RouteConfig['component'] | React.FC<Props>
}

const routes: CopyRouteConfig[] = [
  { path: '/', exact: true, render: () => <Redirect to={'/defalut'} /> },
  {
    path: '/defalut',
    component: Layout,
    routes: [
      {
        path: '/defalut/home',
        component: Home,
      },
      {
        path: '/defalut/about',
        component: About,
      },
      {
        path: '/defalut/users',
        component: Users,
      },
    ],
  },
  {
    path: '/test1',
    component: Test,
  },
]

export default routes
