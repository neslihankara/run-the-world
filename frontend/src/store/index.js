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
    }
  },
  modules: {}
})
