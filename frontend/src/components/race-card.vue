<script>
import { mapActions } from 'vuex'

export default {
  name: 'RaceCard',
  props: ['race'],
  data() {
    return {
      defaultDescription: 'Not defined'
    }
  },
  methods: {
    ...mapActions(['applyRace']),
    async apply() {
      try {
        await this.applyRace(this.race._id)
      } catch (err) {
        alert(err.response.data.message)
      }
    }
  }
}
</script>

<template lang="pug">
.container
  .card
    .card-body
      h5.card-title {{ race.name }}
      p.card-text {{ race.kilometers }} km
      p.card-text {{ race.requiredRunnerAge }} years of age
      p.card-text For {{ race.requiredRunnerGender }} runners
      p.card-text On the {{  race.terrain }}
      p.card-text Starts at {{ race.startTime }}
      button.btn.btn-primary(@click='apply') Apply for this race!
      a.btn.btn-primary(href='/') See the results
</template>

<style lang="scss" scoped>
.container {
  padding: 2rem;
  border: 2px solid plum;
  border-radius: 0.3rem;
  background: pink;
  margin-bottom: 5rem;
}
.btn {
  background: rgb(238, 126, 144);
  border: 0.5px solid purple;
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>
