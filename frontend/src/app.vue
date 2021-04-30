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
    #nav
      .home
        nav.navbar.navbar-expand-lg.navbar-light.bg-light
          .container-fluid
            a.navbar-brand(to='/') Run the World
            button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation')
              span.navbar-toggler-icon
            #navbarNavDropdown.collapse.navbar-collapse
              ul.navbar-nav
                li.nav-item
                  a.nav-link(href='/') Home
                li.nav-item
                  a.nav-link(href='/profile') Profile
                li.nav-item.dropdown
                  a#navbarDropdownMenuLink.nav-link.dropdown-toggle(to='#' role='button' data-bs-toggle='dropdown' aria-expanded='false')
                    | Race
                  ul.dropdown-menu(aria-labelledby='navbarDropdownMenuLink')
                    li
                      a.nav-link.dropdown-item(href='/races') Browse Races
                    li
                      a.nav-link.dropdown-item(href='/create-race') Create Race
                li.nav-item
                  a.nav-link(href='/live-chat') Live Chat
                li.nav-item#registration
                  a.nav-link(v-if="!user" href='/register') Register
                li.nav-item#registration
                  a.nav-link(v-if="!user" href='/login') Login
                li.nav-item#registration
                  a.nav-link(v-if="user" @click="doLogout" href='/') Logout
</template>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
