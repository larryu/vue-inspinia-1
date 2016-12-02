// don't import anything, make sure it's just config

const routes = [
  {
    path: '/login',
    name: 'login.index',
    component: require('pages/login/index.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/home',
    name: 'home.index',
    component: resolve => require(['pages/home/index/index.vue'], resolve),
    children: [
      {
        path: 'main',
        name: 'home.main',
        component: resolve => require(['pages/home/main/index.vue'], resolve)
      },
      {
        path: 'minor',
        name: 'home.minor',
        component: resolve => require(['pages/home/minor/index.vue'], resolve)
      },
      {
        path: '',
        redirect: '/home/main'
      }
    ],
    meta: {
      auth: true
    }
  },
  {
    path: '/',
    redirect: '/home/main'
  },
  {
    path: '/*',
    redirect: '/home/main'
  }
]

export default routes
