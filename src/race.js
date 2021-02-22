class Race {
  constructor(
    name,
    kilometers = 42,
    terrain = 'asphalt',
    requiredRunnerAge,
    requiredRunnerGender,
    startTime,
    duration
  ) {
    this.name = name
    this.kilometers = kilometers
    this.terrain = terrain
    this.requiredRunnerAge = requiredRunnerAge
    this.requiredRunnerGender = requiredRunnerGender
    this.startTime = startTime
    this.duration = duration
    this.runners = []
  }

  start() {
    // start the timer or km

    console.log('get ready!')
  }

  end() {
    // end the timer or km

    console.log('it is done!')
  }
}

module.exports = Race
