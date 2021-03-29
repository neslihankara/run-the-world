<script>
import { mapActions } from 'vuex'
import RaceCard from '@/components/race-card.vue'

export default {
  name: 'Races',
  components: { RaceCard },
  data() {
    return {
      race: null
    }
  },
  async created() {
    this.race = await this.fetchRaces()
    console.log('here?')
  },
  methods: {
    ...mapActions(['fetchRaces'])
  }
}
</script>

<template lang="pug">
    .about
        RaceCard(:race="race" v-if="race")
</template>
