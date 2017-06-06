# STATE MANAGEMENT (VUEX)

### To Enable Namespacing with Vuex add namespace in store module object

example go to 

[./resources/assets/js/vuex/store/modules/auth.js](../resources/assets/js/vuex/store/modules/auth.js)

```js
export default {
  namespaced: true, // <!--- you need to Enable it By Adding this Key and value
  state,
  getters,
  actions,
  mutations
}

```

Also add new modules @ [./resources/assets/js/vuex/store/index.js](../resources/assets/js/vuex/store/index.js)

```js
import users from './modules/users'
import auth from './modules/auth'
// import here Other Modules @ ./modules/*

export default new Vuex.Store({
  modules: {
    users,
    auth
   // add modules here
  }
})

```

### Maping With Vuex in Components with Module Namespacing
```js
computed: {
  ...mapState('users', { //<!-- Your NameSpace Module Should Be Added Here
    firstName: state => state.firstName,
    lastName: state => state.lastName,
    email: state => state.email
  })
},
methods: {
  ...mapActions('auth', [ //<!-- Your NameSpace Module Should Be Added Here
    'login'
  ])
}
```