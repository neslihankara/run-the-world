<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  async created() {
    console.log((await axios.get('/api/account/session')).data)
  },
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<template lang="pug">
  #app
    .navbar
      router-link(to="/") Run the World
      router-link(to="/") Home
      router-link(to="/profile") Profile
      router-link(to="/races") Browse Races
      router-link(to="/create-race") Create Race
      router-link(to="/live-chat") Live Chat
      router-link(v-if="!user" to="/register") Register
      router-link(v-if="!user" to="/login") Login
      router-link(v-if="user" @click="doLogout" to="/") Logout
    router-view
</template>

<style lang="scss">
// @import '@/assets/theme.scss';
// @import 'bootstrap/scss/bootstrap.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }

.navbar {
  display: flex;
  justify-content: space-around;
}
</style>
