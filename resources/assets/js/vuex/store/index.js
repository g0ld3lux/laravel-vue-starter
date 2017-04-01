import Vue from 'vue'
import Vuex from 'vuex'
// Import All Modules
import users from './modules/users'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    auth
   // add modules here
  }
})
