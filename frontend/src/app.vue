<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  async created() {
    console.log((await axios.get('/api/account/session')).data)
  },
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<template lang="pug">
  #app
    h1.text-primary Run the World
    #nav
      router-link(to="/")  Home |
      router-link(to="/profile")  Profile |
      router-link(to="/register")  Register |
      router-link(to="/login")  Login |
      a(@click="doLogout" href="#") Logout
    router-view
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
