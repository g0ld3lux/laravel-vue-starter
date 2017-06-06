// Important  Javascript Dependencies to Bootstrap our App

// For Manipulation of Array, Collections and Objects in Javascript
import lodash from 'lodash'
// Main Dependency of our Vue App
import Vue from 'vue'
// Our App Routing
import VueRouter from 'vue-router'
// For Time Related Functions
import moment from 'moment'
// Making HTTP Request
import axios from 'axios'
// For Local Storage of Token
import Ls from './services/ls'

// Install Plugins
// For Form Validation
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

// Section For Your VueJS Themes
// Index.css is Our Custom Themes
// For Reference on Theme check this link:
// http://element.eleme.io/#/en-US/component/custom-theme
import './theme/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

// Global Access
window.Vue = Vue
window.axios = axios
window._ = lodash
window.moment = moment
window.router = VueRouter

// Always Add this Header in Each Request
window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

// Add Interceptors for Token
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

