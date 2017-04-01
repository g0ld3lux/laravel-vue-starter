import axios from 'axios'
import Ls from '../services/ls'

export default {
  auth () {
    return axios.post('/api/@me')
  },
  roles () {
    return axios.post('/api/@me/roles')
  },
  permissions () {
    return axios.post('/api/@me/permissions')
  },
  login (loginData) {
    return axios.post('/api/auth/login', loginData).then(response => {
      Ls.set('auth.token', response.data.token)
      console.log('Logged In')
    }).catch(error => {
      if (error.response.status === 401) {
        console.log('Invalid Credentials')
      } else {
        console.log('Error', error.message)
      }
    })
  },
  register (registerData) {
    return axios.post('/api/auth/signup', registerData).then(response => {
      console.log('User Registered')
    }).catch(error => {
      if (error.response.status === 401) {
        console.log('User Already Registered')
      } else {
        console.log('Error', error.message)
      }
    })
  },
  logout () {
    return axios.post('/api/auth/logout').then(response => {
      Ls.remove('auth.token')
      console.log('User Logout')
    }).catch(error => {
      console.log('Error', error.message)
    })
  },
  check () {
    return axios.get('/api/auth/check').then(response => {
      return response.data.authenticated
    }).catch(error => {
      console.log('Error', error.message)
    })
  },
  checkIsAdmin () {
    return axios.get('/api/auth/checkIsAdmin').then(response => {
      return response.data.admin
    }).catch(error => {
      console.log('Error', error.message)
    })
  }
}
