// Javascript Dependecies
import Vue from 'vue'
import VueRouter from 'vue-router'
import api from './api/auth'
import store from './vuex/store'
import _ from 'lodash'

// Lazyloading Views...

// Layouts
const MainLayout = r => require.ensure([], () => r(require('./views/Layouts/main')), 'guest')

// Pages
const Home = r => require.ensure([], () => r(require('./views/pages/home')), 'guest')
const NotFoundPage = r => require.ensure([], () => r(require('./views/errors/404.vue')), 'guest')

Vue.use(VueRouter)

// List of All Routes in Your Application
const routes = [
  {
    path: '/', component: MainLayout,
    children: [
      {
        path: '/',
        component: Home,
        name: 'home'
      }
    ]
  },
  { path: '*', component: NotFoundPage }
]

// Vue Router Configuration
const router = new VueRouter({
  routes,
  mode: 'history',
  // Bulma Active Class
  linkActiveClass: 'isActive'
})

// Hooks
router.beforeEach((to, from, next) => {
    // If the next route is requires user to be Logged IN
  if (to.matched.some(m => m.meta.requiresAuth)) {
    return api.check().then(authenticated => {
      if (!authenticated) {
        return next({ path: '/login' })
      }
            // We check if the auth Object is Empty
            // If it is Empty we Dispatch An Event to Get Auth User
      if (_.isEmpty(store.getters['auth/getAuth'])) {
        store.dispatch('auth/setAuth')
      }

      return next()
    })
  }
  if (to.matched.some(m => m.meta.isAdmin)) {
    return api.checkIsAdmin().then(admin => {
      if (!admin) {
        return next({ path: '/admin/dashboard' })
      }
      return next()
    })
  }

  return next()
})

export default router
