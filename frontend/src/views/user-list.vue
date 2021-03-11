<script>
// @ is an alias to /src
// import HelloWorld from '@/components/hello-world.vue'
import Counter from '@/components/counter.vue'
import { mapActions } from 'vuex'

export default {
  name: 'UserList',
  components: { Counter },
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<template lang="pug">
  .home
    Counter
    h2 Users
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.name }}
</template>
