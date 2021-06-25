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
          .name
            p Save the Planet
          .explanation
            P We love the planet Earth and we love the people living on it. Run the World is created to allow future generations to run just like we can. Thanks to it, we reduce the amount of waste we leave behind every time we hold a running race. There is only you and your mobile phone.
        .independence
          .name
            p Go boundless
          .explanation
            p We have no bounds. None to the place, none to the organizators. We are free human beings and we should be able to run a marathon any time any where with a friend who lives accross the ocean. This is how we roll as the new generation.
      .second
        .training
          .name
            p Train with a Remote Team
          .explanation
            p You can create a team or find a coach and have your training sessions remotely set via Run the World.
        .opensource
          .name
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
  flex-direction: column;
  >p {
    max-width: 500px;
  }
}
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>
