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
    h1 Create a new account
    form( @submit="submitLogin")
      label(for="name") Name:&nbsp;
          input(v-model="name" id="name" type="text" required)
      label(for="age") Age:&nbsp;
          input(v-model="age" id="age" type="number" required)
      label(for="gender") Gender:&nbsp;
          input(v-model="gender" id="gender" type="text" required)
      label(for="email") Email:&nbsp;
          input(v-model="email" id="email" type="email" required)
      label(for="password") Password:&nbsp;
          input(v-model="password" id="password" type='password' required)
      input.btn(type="submit" value="Register")
    div(v-if="backendError") {{ backendError }}
    div.foot-note Already have an account? <router-link to="/login"> Log in</router-link>
</template>

<style lang="scss" scoped>
.register {
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
