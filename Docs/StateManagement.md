## STATE MANAGEMENT (VUEX)

### To Enable Namespacing with Vuex add namespace in store module object

```
namespaced: true

```

### Maping With Vuex in Components with Module Namespacing
```
computed: {
  ...mapState('account', {
    firstName: state => state.firstName,
    lastName: state => state.lastName,
    email: state => state.email
  })
},
methods: {
  ...mapActions('account', [
    'login'
  ])
}
```