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
    ...mapState(['currentLiveStream', 'liveStreams', 'user', 'liveStreamMessages', 'onlineUsers'])
  }
}
</script>

<template lang="pug">
  .live-chat
    h1 Here you can chat with your run mates.
    .container.socket-container
      div(v-if="user" v-for="user in users").username
        router-link(:to="`/users/${user._id}`") {{ user.name }}
      div.rooms(v-if="liveStreams.size")
        h2 Rooms
        div(v-for="stream in liveStreams")
          p {{ stream }}
          button(@click="joinStream(stream)") Join room
      button.btn(v-if="user" @click="goOnline") Create Room
      router-link.btn(v-else to="/login") Login
        p To start chatting!
      div(v-if="currentLiveStream")
        h2 Chat Room
        .messages
          .message(v-for="message in liveStreamMessages.slice().reverse()")
            p.message-box
              span.author {{ message.author }}:&nbsp;
              span.message {{ message.body }}
        form(@submit="sendMessage")
          input.chat-input(type="text" v-model="message")
          input.btn(type="submit" value="Send message")
</template>

<style lang="scss" scoped>
.container.socket-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px;
  text-align: center;

  .chat-input {
    width: 100%;
    border: 1px solid var(--yellow);
    font-size: 20px;
    border-radius: 8px;
    background: none;
    color: var(--yellow);
    margin-top: 12px;
  }

  .rooms {
    border: 3px solid white;
    padding: 20px;
    height: 600px;
    overflow-y: auto;
  }

  .messages {
    display: flex;
    flex-direction: column-reverse;
    height: 400px;
    overflow-y: auto;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);
  }
  .message-box {
    border: 3px solid white;
    border-radius: 8px;
    display: flex;
  }
  .author {
    color: pink;
    margin: 10px;
  }
  .message {
    color: white;
    margin: 10px;
  }
  .btn {
    padding: 5px;
  }
  text {
    font-size: 30px;
    color: white;
  }
}
</style>
