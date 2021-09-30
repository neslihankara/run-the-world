<script>
import { mapActions } from 'vuex'
import RaceCard from '@/components/race-card.vue'

export default {
  name: 'Races',
  components: { RaceCard },
  data() {
    return {
      races: []
    }
  },
  async created() {
    this.races = await this.fetchRaces()
  },
  methods: {
    ...mapActions(['fetchRaces'])
  }
}
</script>

<template lang="pug">
.container
  .row
    div(v-for="race in races")
      .race
        RaceCard(:race="race" v-if="race")
</template>

<style scoped>
.race {
  max-width: 400px;
}
</style>