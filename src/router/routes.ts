import Home from '/@/views/Home'
import About from '/@/views/About'
import Users from '/@/views/Users'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/users',
    exact: true,
    component: Users,
  },
]

export default routes
