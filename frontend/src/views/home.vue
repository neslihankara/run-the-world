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
.div
  p Run the World is an online race holding app.
  | You can create a race or join to an existing one using the navigation bar above.
  p Enjoy running with your friends in a marathon or in a training session.
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
