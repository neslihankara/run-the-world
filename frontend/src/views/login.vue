<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      backendError: null
    }
  },
  methods: {
    ...mapActions(['login']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password
        })

        this.$router.push('/')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
.login
    form(@submit="submitLogin")
      h1 Log in to your account
      label(for="email") Email:&nbsp;
        input(v-model="email" id="email" type="email" required)
      label(for="password") Password:&nbsp;
        input(v-model="password" id="password" type="password" required)
      input.btn(type="submit" value="Log in")
    div(v-if="backendError") {{ backendError }}
    div.foot-note Don't have an account yet? <router-link to="/register">Register</router-link>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  text-align: center;

  h1 {
    font-size: 50px;
  }

  .label {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    font-size: 30px;
    text-align: center;
  }

  .foot-note {
    margin-top: 40px;
    font-size: 40px;

    a {
      color: var(--yellow);
    }
  }

  button {
    background-color: var(--yellow);
  }
}

label {
  display: block;
  margin: 1rem 0;
  font-size: 30px;

  input {
    width: 100%;
    border: 1px solid var(--yellow);
    font-size: 20px;
    border-radius: 8px;
    background: none;
    color: var(--yellow);
  }
}

.text-error {
  color: white;
  font-weight: bold;
  margin: 20px;
}
</style>
