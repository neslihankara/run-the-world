<script>
import { mapActions, mapState } from 'vuex'
import RaceCard from '@/components/race-card.vue'

export default {
  name: 'Profile',
  components: {
    RaceCard
  },
  data() {
    return {
      users: [],
      message: ''
    }
  },
  async created() {
    this.users = await this.fetchSession()
  },
  methods: {
    ...mapActions(['fetchSession', 'goLive', 'sendMessageToLiveStream', 'joinStream']),
    sendMessage(e) {
      e.preventDefault()
      this.sendMessageToLiveStream(this.message)
      this.message = ''
    }
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'user', 'liveStreamMessages'])
  }
}
</script>

<template lang="pug">
  .profile
    .container
      .row
        .col-12.col-md-6.col-lg-4(v-for="attendance in user.attendances")
          RaceCard(:race="attendance.race" v-if="attendance.race")
    .container.socket-container
      p hi
      div(v-for="user in users")
        router-link(:to="`/users/${user._id}`") {{ user.name }}
      div(v-if="liveStreams.length")
        h2 Live streams
        div(v-for="stream in liveStreams")
          p {{ stream }}
          button(@click="joinStream(stream)") Join stream
      button(@click="goLive") Go live
      div(v-if="currentLiveStream")
        h3 live stream
        .messages
          .message(v-for="message in liveStreamMessages")
            p
              span {{ message.author }}:&nbsp;
              span {{ message.body }}
        form(@submit="sendMessage")
          input(type="text" v-model="message")
          input(type="submit" value="Send message")
</template>

<style lang="scss" scoped>
.container.socket-container {
}
</style>
