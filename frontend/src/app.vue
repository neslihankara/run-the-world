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
  // background: rgb(102, 100, 100);
  background: rgb(255, 255, 255);
  padding: 30px;

  a {
    text-decoration: none;
  }

}

.navbar-wrapper {
  position: static;
}

.navbar {
  position: static;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px 20px 0px;
  font-size: 23px;

  .link {
    color: black;
  }

  @media (min-width: 750px) {
    font-size: 40px;
  }
}
</style>
