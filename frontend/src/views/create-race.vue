<script>
import { mapActions, mapState } from 'vuex'
import { format } from 'date-fns'

export default {
  name: 'CreateRace',
  components: {},
  data() {
    return {
      race: {
        name: null,
        kilometers: null,
        terrain: null,
        requiredRunnerAge: null,
        requiredRunnerGender: null,
        startDate: null,
        runners: [],
        createdBy: null,
        ownerName: null
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
          startDate: new Date(this.race.startDate),
          runners: this.race.runners,
          createdBy: this.race.createdBy,
          ownerName: this.user.name
        })

        this.$router.push('/races') // this should return to specific race's page maybe with `/${this.raceId}`
      } catch (err) {
        this.backendError = err.message
      }
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<template lang="pug">
div.race-form
  h1 Create your race and share it with your friends!
  form(@submit.prevent="submitRace")
    label.race-label(for="name") Name:&nbsp;
      input(v-model="race.name" id="name" type="text" required)
    label.race-label(for="kilometers") Kilometers:&nbsp;
      input(v-model="race.kilometers" id="kilometers" type="number" required)
    label.race-label(for="terrain") Terrain:&nbsp;
      input(v-model="race.terrain" id="terrain" type="text" required)
    label.race-label(for="requiredRunnerGender") Gender:&nbsp;
      input(v-model="race.requiredRunnerGender" id="requiredRunnerGender" type="text" required)
    label.race-label(for="requiredRunnerAge") Min. age:&nbsp;
      input(v-model="race.requiredRunnerAge" id="requiredRunnerAge" type='number' required)
    label.race-label(for="startDate") Starting date and time:&nbsp;
      input.date-time(v-model="race.startDate" id="startDate" type="datetime-local" required style="")
    button.btn(type="submit") Create
  .text-error(v-if="backendError") {{ backendError }}&nbsp;
    p Make sure you are logged in.
  .foot-note
    | Looking for a race?&nbsp;
    router-link(to="/races") Browse races
</template>

<style lang="scss" scoped>
.race-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  text-align: center;

  h1 {
    font-size: 50px;
  }

  .race-label {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    font-size: 30px;
    text-align: center;
  }

  .foot-note {
    margin-top: 40px;
    font-size: 40px;

    a {
      color: var(--yellow);
    }
  }

  button {
    background-color: var(--yellow);
  }
}

label {
  display: block;
  margin: 1rem 0;

  input {
    width: 100%;
    border: 1px solid var(--yellow);
    font-size: 20px;
    border-radius: 8px;
    background: none;
    color: var(--yellow);
  }
}

.text-error {
  color: white;
  font-weight: bold;
  margin: 20px;
}
</style>
