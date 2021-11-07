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
      .banner
        img(src="img/banners/race-card-banner.jpg")
      .card-body
        .race-info
          .race-name
            h4.card-title {{ race.name }}
          .info
            .info-item
              i.fas.fa-angle-double-right
              p {{ race.kilometers }} km
            .info-item
              i.fas.fa-birthday-cake
              p {{ race.requiredRunnerAge }}
            .info-item
              i.fas.fa-genderless
              p {{ race.requiredRunnerGender }}
            .info-item
              i.fas.fa-road
              p {{  race.terrain }}
            .info-item
              i.fas.fa-calendar-week
              p {{ race.startTime }}
        .buttons
          .apply
            button.btn(@click='apply' :disabled="race.attendances.some(attendance => attendance.user._id == user._id)") Apply
          .result
            button.btn(href='/') Results
          .owner
            button.btn(href='/') {{ race.createdBy }}

  </template>

<style lang="scss" scoped>
.container {
  border-radius: 8px;
  background: var(--white);
  p {
    font-size: 22px;
    color: var(--pink);
  }
}
.race-info {
  .race-name {
    h4 {
      font-size: 30px;
      color: var(--purple);
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .info {
    display: grid;
    grid-template: column;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    gap: 4px;

    .info-item {
      border-bottom: solid var(--purple);
      border-radius: 8px;
      padding: 5px;
      line-height: 0px;
      background: pink;
      text-align: center;
    }
  }
}

.buttons {
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-flow: column;

  .btn {
    border: 0px;
    border-bottom: solid var(--purple);
    border-radius: 8px;
    background: var(--yellow);
    padding: 0.5rem;
    margin: 0.5rem;
    color: var(--purple);
  }

  .owner {
    .btn {
      background: var(--yellow);
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      color: var(--navy);
    }
  }
}

.banner {
  width: 100%;
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }
}

.card-body {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.card-title {
  margin: 0;
}
</style>
