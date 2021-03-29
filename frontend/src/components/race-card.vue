<script>
export default {
  name: 'RaceCard',
  props: ['race'],
  data() {
    return {
      defaultDescription: 'Not defined'
    }
  }
}
</script>

<template lang="pug">
.box
    .card
        .card-body
        h5.card-title {{ race.name }}
        p.card-text {{ race.kilometers }} km
        p.card-text {{ race.requiredRunnerAge }} years of age
        p.card-text For {{ race.requiredRunnerGender }} runners
        p.card-text On the {{  race.terrain }}
        p.card-text Starts at {{ race.startTime }}
        a.btn.btn-primary(href='/') Find some friends at race.runners
        a.btn.btn-primary(href='/') Apply for this race!
        a.btn.btn-primary(href='/') See the results
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 2px solid plum;
  border-radius: 0.3rem;
  background: pink;
}
</style>
