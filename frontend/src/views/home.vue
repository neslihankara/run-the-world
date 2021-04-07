<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  }
}
</script>

<template lang="pug">
.home
  button.btn.primary RACE
  button.btn.primary Create
  router-link(to="/races") Browse
  button.btn.primary Rankings
  router-link(to="/create-race")  Create &nbsp; |
</template>
