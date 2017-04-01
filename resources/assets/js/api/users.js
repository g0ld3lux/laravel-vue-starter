import axios from 'axios'

export default {
  index () {
    return axios.get('/api/admin/users/')
  },

  getDeletedUsers () {
    return axios.get('/api/admin/users/deleted')
  },

  addUser (query) {
    return axios.post('/api/admin/users/addUser', {
      params: {
        'first_name': query.first_name,
        'last_name': query.last_name,
        password: query.password,
        email: query.email
      }
    })
  },

  deleteUser (id) {
    return axios.get('/api/admin/users/deleteUser/' + id)
  },

  recoverUser (id) {
    return axios.get('/api/admin/users/recoverUser/' + id)
  },

  permaDeleteUser (id) {
    return axios.get('/api/admin/users/permaDeleteUser/' + id)
  },

  showUser (id) {
    return axios.get('/api/admin/users/' + id)
  },

  updateUser (id, query) {
    return axios.post('/api/admin/users/editUser/' + id, {
      params: {
        'first_name': query.first_name,
        'last_name': query.last_name,
        password: query.password,
        email: query.email

      }
    })
  },
  toggleActive (id) {
    return axios.get('/api/admin/users/toggleActive/' + id)
  }

}
