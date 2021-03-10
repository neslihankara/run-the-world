<script>
// @ is an alias to /src
// import HelloWorld from '@/components/hello-world.vue'
import axios from 'axios'
import UserCard from '@/components/user-card.vue'

export default {
  name: 'Home',
  components: {
    UserCard
  },
  data() {
    return {
      users: []
    }
  },
  async created() {
    const usersRequest = await axios.get('/api/users')

    this.users = usersRequest.data
  }
}
</script>

<template lang="pug">
  .home
    h1 Run the World
    user-card(v-for="user in users" :user="user")
</template>
