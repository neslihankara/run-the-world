<script>
import { mapActions, mapState } from 'vuex'

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
        alert('You are succesfully admitted to the race')
      } catch (err) {
        alert(err.response.data.message)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<template lang="pug">
.races
  .container
    .card
      .card-body
        .banner
          img(src="img/banners/race-card-banner.jpg")
        .race-info
          .race-name
            h1.card-title {{ race.name }}
          .info
            p.card-text Dest {{ race.kilometers }} km
            p.card-text Age {{ race.requiredRunnerAge }}
            p.card-text Sex {{ race.requiredRunnerGender }}
            p.card-text Type {{  race.terrain }}
            p.card-text Time {{ race.startTime }}
        .buttons
          button.btn.btn-primary(@click='apply' :disabled="race.attendances.some(attendance => attendance.user._id == user._id)") Apply
          a.btn.btn-primary(href='/') Results
</template>

<style lang="scss" scoped>
.container {
  padding: 2rem;
  border: 2px solid plum;
  border-radius: 0.3rem;
  background: pink;
  margin-bottom: 5rem;
  p {
    font-size: 25px;
  }
}
.race-info {
  .race-name {
    h1 {
      font-size: 50px;
    }
    margin-left: -50px;
  }
  .info {
    display: flex;
    direction: column;
    justify-content: space-around;
  }
}
.btn {
  background: rgb(238, 126, 144);
  border: 0.5px solid purple;
  padding: 0.5rem;
  margin: 0.5rem;
}
.banner {
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
