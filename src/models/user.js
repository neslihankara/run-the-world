const uuid = require('uuid').v4
// const superb = require('superb') tba
const RaceManager = require('./race-manager')

class User {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.isAdmitted = false
    this.id = null
    this.createdRaces = []
    this.finishedRaces = []
    this.attemptedRaces = []
  }

  createRace(race) {
    this.createdRaces.push(race)
  }

  applyRace(race) {
    if (RaceManager.admit(this, race)) {
      this.isAdmitted = true
      this.id = uuid()
    }
  }

  joinRace(race) {
    if (this.isAdmitted) console.log('you got this!')

    this.attemptedRaces.push(race)
  }

  quitRace(race) {
    // placeholder for unused param error
    return race.name
  }

  endRace(race) {
    this.attemptedRaces.splice(this.attemptedRaces.indexOf(`${race}`), 1)
    this.finishedRaces.push(race)
  }
}

// status fixed string

module.exports = User
