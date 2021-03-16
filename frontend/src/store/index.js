import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const mutations = {
  INCREMENT_COUNT: 'increment count'
}

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [mutations.INCREMENT_COUNT](state, number) {
      state.count = number
    }
  },
  actions: {
    incrementCount({ commit }) {
      // do whatever you want
      // decide on what mutation you want to commit to the store
      commit(mutations.INCREMENT_COUNT, 444)
    },
    async fetchUser(store, id) {
      // why did we delete {this.$route.params.id} from get?
      const userRequest = await axios.get(`/api/users/${id}`)
      return userRequest.data
    },
    async fetchUsers() {
      const usersRequest = await axios.get('/api/users')
      return usersRequest.data
    async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(mutations.SET_USER, user.data || null)
    },
    async login({ commit }, credentials) {
      try {
        const user = await axios.post('/api/account/session', credentials)
        commit(mutations.SET_USER, user.data)
      } catch (e) {
        throw e
      }
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_USER, null)
    },
    }
  },
  modules: {}
})
