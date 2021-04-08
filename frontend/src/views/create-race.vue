<script>
import { mapActions } from 'vuex'

export default {
  name: 'createRace',
  components: {},
  data() {
    return {
      race: {
        name: null,
        kilometers: null,
        terrain: null,
        requiredRunnerAge: null,
        requiredRunnerGender: null,
        startTime: null,
        runners: [],
        createdBy: null
      },

      backendError: null
    }
  },
  methods: {
    ...mapActions(['createRace']),
    async submitRace() {
      try {
        await this.createRace({
          name: this.race.name,
          kilometers: this.race.kilometers,
          terrain: this.race.terrain,
          requiredRunnerAge: this.race.requiredRunnerAge,
          requiredRunnerGender: this.race.requiredRunnerGender,
          startTime: this.race.startTime,
          runners: this.race.runners,
          createdBy: this.race.createdBy //users[0] maybe?
        })

        this.$router.push('/races') // this should return to specific race's page maybe with `/${this.raceId}`
      } catch (err) {
        this.backendError = err.message
      }
    }
  }
}
</script>

<template lang="pug">
div
  form(@submit.prevent="submitRace")
    h1 Create a new race
    label(for="name") Name:&nbsp;
      input(v-model="race.name" id="name" type="text" placeholder="Race's name" required)
    label(for="kilometers") Kilometers:&nbsp;
      input(v-model="race.kilometers" id="kilometers" type="number" placeholder="Race's length" required)
    label(for="terrain") Terrain:&nbsp;
      input(v-model="race.terrain" id="terrain" type="text" placeholder="Race's terrain type" required)
    label(for="requiredRunnerGender") Gender:&nbsp;
      input(v-model="race.requiredRunnerGender" id="requiredRunnerGender" type="text" placeholder="Race's specificity" required)
    label(for="requiredRunnerAge") Age:&nbsp;
      input(v-model="race.requiredRunnerAge" id="requiredRunnerAge" type='number' placeholder="Race's age span" required)
    label(for="startTime") Starting time:&nbsp;
      input(v-model="race.startTime" id="startTime" type="text" placeholder="Race's start time" required)
    button(type="submit") Create
  .text-error(v-if="backendError") {{ backendError }}&nbsp;
    p Make sure you are logged in.
  div
    | Looking for a race?&nbsp;
    router-link(to="/races") Browse races
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}

.text-error {
  color: red;
  font-weight: bold;
}
</style>
