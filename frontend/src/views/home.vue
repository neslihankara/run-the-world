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
          h1.title RUN THE WORLD
        .slogan
          p Any time. Any where. Without a limit.
      .summary
        p Create your running session.
        p Share it with the world.
        p Go out and run!
      .sections.container
        .first
          .why
            .item
              h2.name
                h3 Save the Planet
              .explanation
                P Run the World is created to allow future generations to run freely just like we can. Thanks to it, we reduce the amount of waste we leave behind every time we hold a running race. There is only you and your mobile phone.
          .training
            .item
              h2.name
                h3 Train with a Remote Team
              .explanation
                p You can create a team or find a coach and have your training sessions remotely set via Run the World. You can find new friens, invite people and follow a program together.
        .second
          .independence
            .item
              h2.name
                h3 Go Boundless
              .explanation
                p We have no bounds. None to the place, none to the organizators. We are free human beings and we should be able to run a marathon any time any where with a friend who lives accross the ocean. This is how we roll as the new generation.
          .opensource
            .item
              h2.name
                h3 Support Open Source
              .explanation
                p Run the World is completely open source. You can find the GitHub repository &nbsp;
                  a(href="https://github.com/neslihankara/run-the-world") here
                  |. If you are into software engineering, you are more than welcome to contribute to the repo!
</template>

<style lang="scss">
p,
li,
h1 {
  font-size: 30px;
  color: var(--pink);
  margin: 0px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  .headline {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name > h1 {
      font-size: 50px;
    }
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 30px;
    }

    @media (min-width: 768px) {
      p {
        font-size: 40px;
      }
    }
  }

  .sections {
    display: grid;
    grid-template-columns: 100%;
    text-align: center;

    .explanation {
      max-width: 500px;
      margin: 10px;
      text-align: left;
    }

    .item {
      max-width: 600px;
      padding: 20px;

      .name > h3 {
        font-size: 40px;
        color: var(--yellow);
      }

      .explanation > p {
        font-size: 30px;
      }
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-column-gap: 1em;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 50px;
    }
  }
}
</style>
