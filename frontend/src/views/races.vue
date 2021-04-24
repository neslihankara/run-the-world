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
    .col-12.col-md-6.col-lg-4(v-for="race in races")
      RaceCard(:race="race" v-if="race")
</template>
