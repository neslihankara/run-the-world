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
          router-link.link(to="/races") Races
          router-link.link(to="/create-race") Create Race
          router-link.link(to="/live-chat") People
          router-link.link(to="/register" v-if="!user") Register
          router-link.link(to="/login" v-if="!user") Log In
          router-link.link(v-if="user" to="/profile") Profile
          a.link(@click="doLogout" to="/" v-if="user") Log out
    router-view
</template>

<style lang="scss">
:root {
  --navy: rgb(42, 9, 68);
  --purple: rgb(59, 24, 95);
  --pink: rgb(161, 37, 104);
  --yellow: rgb(254, 194, 96);
  --white: hsl(0, 0%, 91%);
}
#app {
  font-family: 'Teko', sans-serif;
  background: var(--navy);
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
    color: var(--yellow);
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
}

.v-popper-shown {
  background: var(--yellow);
  z-index: 9999;
}
</style>
