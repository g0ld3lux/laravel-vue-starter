// Import Javascript Dependencies
import lodash from 'lodash'
import Vue from 'vue'
import VueRouter from 'vue-router'
import moment from 'moment'
import axios from 'axios'
import Ls from './services/ls'

// Install Plugins
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
Vue.use(VueBlu)

// Global Access
window.Vue = Vue
window.axios = axios
window._ = lodash
window.moment = moment
window.router = VueRouter
window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

window.axios.interceptors.request.use(function (config) {
    // Do something before request is sent
  const AUTH_TOKEN = Ls.get('auth.token')

  if (AUTH_TOKEN) {
    config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
  }

  return config
}, function (error) {
    // Do something with request error
  return Promise.reject(error)
})

