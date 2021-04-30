<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LiveChat',
  components: {},
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
    },
    goOnline() {
      try {
        this.goLive()
      } catch (err) {
        alert('Unable to go online. Make sure you are logged in.')
      }
    }
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'user', 'liveStreamMessages'])
  }
}
</script>

<template lang="pug">
  .live-chat
    .container.socket-container
      p Here you can chat with your run mates.
      div(v-for="user in users").username
        router-link(:to="`/users/${user._id}`") {{ user.name }}
      div(v-if="liveStreams.length")
        h2 Rooms
        div(v-for="stream in liveStreams")
          p {{ stream }}
          button(@click="joinStream(stream)") Join room
      button(@click="goOnline") Go online
      div(v-if="currentLiveStream")
        h3 Chat Room
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
