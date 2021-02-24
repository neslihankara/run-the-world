const uuid = require('uuid').v4
const superb = require('superb')
const RaceManager = require('./race-manager')

class User {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.isAdmitted = false
    this.id = null
    this.finishedRaces = []
    this.attemptedRaces = []
  }

  applyRace(race) {
    if (RaceManager.admit(this, race)) {
      this.isAdmitted = true
      console.log(`you are admitted to ${race.name}!`)
      this.id = uuid()
    } else {
      console.log("not admitted, bio and race don't match")
    }
  }

  joinRace(race) {
    if (this.isAdmitted) console.log('you got this!')

    this.attemptedRaces.push(race)
  }

  quitrace(race) {
    console.log(this.attemptedRaces)
    console.log(this.finishedRaces)
  }

  endrace(race) {
    console.log(`congrats!! you are ${superb.random()}`)

    this.attemptedRaces.splice(this.attemptedRaces.indexOf(`${race}`), 1)
    this.finishedRaces.push(race)

    console.log(this.attemptedRaces)
    console.log(this.finishedRaces)
  }
}

// status fixed string

module.exports = User
