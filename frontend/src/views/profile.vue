<script>
import { mapActions } from 'vuex'

export default {
  name: 'Profile',
  components: {},
  data() {
    return {
      users: []
    }
  },
  // this part is broken
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<template lang="pug">
  .profile
    p hi
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.name }}
</template>
