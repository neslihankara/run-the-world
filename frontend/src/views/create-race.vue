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
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.createRace({
          name: this.name,
          kilometers: this.age,
          terrain: this.gender,
          requiredRunnerAge: this.requiredRunnerAge,
          requiredRunnerGender: this.requiredRunnerGender,
          startTime: this.startTime,
          runners: this.runners,
          createdBy: this.createdBy
        })

        this.$router.push('/races') // this should return to specific race's page maybe with `/${this.raceId}`
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
.createRace
    form( @submit="createRace")
      h1 Create a new race
      label(for="name") Name:&nbsp;
          input(v-model="name" id="name" type="text" placeholder="Race's name" required)
      label(for="kilometers") Kilometers:&nbsp;
          input(v-model="kilometers" id="kilometers" type="number" placeholder="Race's length" required)
      label(for="terrain") Terrain:&nbsp;
          input(v-model="terrain" id="terrain" type="text" placeholder="Race's terrain type" required)
      label(for="requiredRunnerGender") Gender:&nbsp;
          input(v-model="requiredRunnerGender" id="requiredRunnerGender" type="text" placeholder="Race's specificity" required)
      label(for="requiredRunnerAge") Age:&nbsp;
          input(v-model="requiredRunnerAge" id="requiredRunnerAge" type='number' placeholder="Race's age span" required)
      label(for="startTime") Starting time:&nbsp;
          input(v-model="startTime" id="startTime" type="text" placeholder="Race's start time" required)
      br
      input(type="submit" value="Create")
    div(v-if="backendError") {{ backendError }}
    br
    div Looking for a race? <router-link to="/races">Browse races</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
</style>
