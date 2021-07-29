import Home from '/@/views/Home'
import About from '/@/views/About'
import Users from '/@/views/Users'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home',
      auth: false,
      index: 0,
    },
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About',
      auth: false,
      index: 0,
    },
    component: About,
  },
  {
    path: '/users',
    name: 'Users',
    meta: {
      title: 'Users',
      auth: false,
      index: 0,
    },
    component: Users,
  },
]

export default routes
