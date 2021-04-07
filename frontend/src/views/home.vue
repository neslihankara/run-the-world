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
  router-link(to="/") Race &nbsp; |
  router-link(to="/create-race")  Create &nbsp; |
  router-link(to="/races")  Browse &nbsp; |
  router-link(to="/")  Rankings &nbsp;
</template>

<style lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
