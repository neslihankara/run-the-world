<script>
import { mapActions, mapState } from 'vuex'
import RaceCard from '@/components/race-card.vue'

export default {
  name: 'Profile',
  components: {
    RaceCard
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<template lang="pug">
  //- div(v-for="attendance in user.attendances")
  //-         RaceCard(:race="attendance.race" v-if="attendance.race")
</template>

<style lang="scss" scoped></style>
