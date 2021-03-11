<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Counter',
  created() {
    this.incrementCount()
  },
  methods: {
    ...mapActions(['incrementCount'])
  },
  computed: {
    ...mapState(['count']),
    doubledCount() {
      return this.count * 2
    }
  }
}
</script>

<template lang="pug">
  div
    p Visitor count: {{ count }}
    p doubled: {{ doubledCount }}
</template>
