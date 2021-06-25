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
    .header
      .navbar-wrapper
        .navbar#navbar
          router-link.link(to="/") Run the World
          router-link.link(to="/race") Races
          //- router-link.link(to="/races") Browse Races
          //- router-link.link(to="/create-race") Create Race
          router-link.link(to="/live-chat") People
          router-link.link(v-if="!user" to="/register") Register
          router-link.link(v-if="!user" to="/login") Login
          router-link.link(v-if="user" @click="doLogout" to="/") Logout
          router-link.link(to="/profile") Profile
    router-view
</template>

<style lang="scss">
#app {
  font-family: 'Teko', sans-serif;
  background: black;
  padding: 30px;

  a {
    text-decoration: none;
  }

}

.navbar-wrapper {
  position: static;
  margin: 20px 20px 20px 20px;
  border: solid white;
  border-width: 0.5px 3px 0.5px;
  border-radius: 20px;
}

.navbar {
  position: static;
  display: flex;
  justify-content: space-evenly;
  font-size: 45px;
  padding: 20px 0px 20px 0px;

  .link{
    color: rgb(0, 230, 230);
  }
}
</style>
