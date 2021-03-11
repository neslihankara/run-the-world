<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      defaultBio: 'this user has no life rn'
    }
  }
}
</script>

<template lang="pug">
.box
  h2 {{ user.name }} ({{ user.age }})
  p Status: {{user.bio || defaultBio }}

  h2 Races:
  p(v-if="!user.races.length") this user has no race
  div(v-else v-for="race in user.races")
    h3 {{ race.name }}
    p(v-if="race.kilometers < 42")
        | this is not a marathon
    p(v-if="race.kilometers == 42")
        | this is a marathon
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
}
</style>
