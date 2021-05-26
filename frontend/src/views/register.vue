<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      name: null,
      age: null,
      gender: null,
      email: null,
      password: null,

      backendError: null
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          age: this.age,
          gender: this.gender,
          email: this.email,
          password: this.password
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
.register
    form( @submit="submitLogin")
      h1 Create a new account
      label(for="name") Name:&nbsp;
          input(v-model="name" id="name" type="text" placeholder="Your name" required)
      label(for="age") Age:&nbsp;
          input(v-model="age" id="age" type="number" placeholder="Your age" required)
      label(for="gender") Gender:&nbsp;
          input(v-model="gender" id="gender" type="text" placeholder="Your gender" required)
      label(for="email") Email:&nbsp;
          input(v-model="email" id="email" type="email" placeholder="Your email" required)
      label(for="password") Password:&nbsp;
          input(v-model="password" id="password" type='password' placeholder="Your password" required)
      input(type="submit" value="Register")
    div(v-if="backendError") {{ backendError }}
    div Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
</style>
