import api from '../../../api/auth'

const state = {
  user: {},
  roles: [],
  permissions: []
}

const getters = {
  getAuth: state => state.user,
  getRoles: state => state.roles,
  getPermissions: state => state.permissions
}

const actions = {
  async setAuth ({ commit }) {
    const payload = (await api.auth()).data
    commit('setAuth', await payload.user)
  },
  async setRoles ({ commit }) {
    const payload = (await api.roles()).data

    commit('setRoles', await payload.roles)
  },
  async setPermissions ({ commit }) {
    const payload = (await api.permissions()).data
    commit('setPermissions', await payload.permissions)
  }
}

const mutations = {
  setAuth: (state, payload) => { state.auth = payload },
  setRoles: (state, payload) => { state.roles = payload },
  setPermissions: (state, payload) => { state.permissions = payload }

}

// if This will not work we will need to save it in a constant Namespace
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
