<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  }
}
</script>

<template lang="pug">
  .welcome-card
    .card
      .headline
        .name
          h1 RUN THE WORLD
        .slogan
          p Any time. Any where. Without a limit.
      .summary
        p Create your race | marathon | training session
        p Share it with the world
        p Go out and run!
      .sections
        .first
          .why
            h2.name
              p Save the Planet
            .explanation
              P Run the World is created to allow future generations to run freely just like we can. Thanks to it, we reduce the amount of waste we leave behind every time we hold a running race. There is only you and your mobile phone.
          .training
            h2.name
              p Train with a Remote Team
            .explanation
              p You can create a team or find a coach and have your training sessions remotely set via Run the World. You can find new friens, invite people and follow a program together.
        .second
          .independence
            h2.name
              p Go boundless
            .explanation
              p We have no bounds. None to the place, none to the organizators. We are free human beings and we should be able to run a marathon any time any where with a friend who lives accross the ocean. This is how we roll as the new generation.
          .opensource
            h2.name
              p Support Open Source
            .explanation
              p Run the World is completely open source. You can find its GitHub repository &nbsp;
                a(href="https://github.com/neslihankara/run-the-world") here
                |. If you are into software, you are more than welcome to contribute to the repo!
</template>

<style lang="scss">
p, li, h1, .stress {
  font-size: 30px;
  color: white;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  .headline {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name>h1 {
      font-size: 100px;
    }
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;

    >p {
      font-size: 50px;
    }
  }

  .sections {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

    .explanation {
      max-width: 500px;
      margin: 10px;
      text-align: left;
    }

  }
}
</style>
