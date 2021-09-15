import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'

import type { RouteConfig } from 'react-router-config'

import Layout from '/@/layout'

export interface Props {
  route?: {
    routes: RouteConfig['routes']
  }
}

export interface CopyRouteConfig extends RouteConfig {
  component?: RouteConfig['component'] | React.FC<Props>
}

const routes: CopyRouteConfig[] = [
  { path: '/', exact: true, render: () => <Redirect to={'/default/home'} /> },
  {
    path: '/default',
    component: Layout,
    routes: [
      {
        path: '/default/home',
        component: lazy(() => import('/@/views/Home')),
      },
      {
        path: '/default/about',
        component: lazy(() => import('/@/views/About')),
      },
      {
        path: '/default/users',
        component: lazy(() => import('/@/views/Users')),
      },
      {
        path: '/default/test',
        component: lazy(() => import('/@/views/Test')),
      },
    ],
  },
]

export default routes
