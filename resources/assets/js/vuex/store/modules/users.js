import api from '../../../api/users'

const state = {
  all: [],
  deleted: {},
  trash: [],
  selected: {}
}

const getters = {
  getAllUsers: state => state.all,
  getAllUsersCount: state => state.all.length,
  getDeletedList: state => state.trash,
  getTrashCount: state => state.trash.length,
  getDeletedUser: state => state.deleted,
  getSelectedUser: state => state.selected
}

const actions = {
  async setUsers ({ commit }) {
    const payload = (await api.index()).data
    commit('setUsers', await payload.users)
  },
  async selectUser ({ commit }, id) {
    const payload = (await api.showUser(id)).data

    commit('selectUser', await payload.user)
  },
  async deleteUser ({ commit }, id) {
    const payload = (await api.deleteUser(id)).data
    commit('deleteUser', await payload.user)
  },
  async recoverUser ({ commit }, id) {
    const payload = (await api.recoverUser(id)).data
    commit('recoverUser', await payload.user)
  },
  async permaDeleteUser ({ commit }, id) {
    const payload = (await api.permaDeleteUser(id)).data
    commit('permaDeleteUser', await payload.user)
  },
  async updateUser ({ commit, state }, query) {
    const payload = (await api.updateUser(state.selected.id, query)).data
    commit('updateUser', await payload.user)
  },
  async addUser ({ commit }, query) {
    const payload = (await api.addUser(query)).data
    commit('addUser', await payload.user)
  },
  async setDeletedUsers ({ commit }) {
    const payload = (await api.getDeletedUsers()).data
    commit('setDeletedUsers', await payload.users)
  },

  async toggleActive ({ commit, state }, id) {
    const payload = (await api.toggleActive(id)).data
    commit('toggleActive', await payload.user)
  }
}

const mutations = {
  setUsers: (state, payload) => { state.all = payload },
  addUser: (state, payload) => { state.all.push(payload) },
  toggleActive: (state, payload) => {
    const user = state.all.find(user => {
      return user.id === payload.id
    })
    state.all.splice(state.all.indexOf(user), 1, payload)
  },
  selectUser: (state, payload) => { state.selected = payload },

  deleteUser: (state, payload) => {
    const user = state.all.find(user => {
    })
    state.all.splice(state.all.indexOf(user), 1)
    state.trash.unshift(payload)
  },
  recoverUser: (state, payload) => {
    const user = state.trash.find(user => {
      return user.id === payload.id
    })
    state.trash.splice(state.trash.indexOf(user), 1)
    state.all.unshift(payload)
  },
  permaDeleteUser: (state, payload) => {
    const user = state.trash.find(user => {
      return user.id === payload.id
    })
    state.trash.splice(state.trash.indexOf(user), 1)
  },
  setDeletedUsers: (state, payload) => { state.trash = payload }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
