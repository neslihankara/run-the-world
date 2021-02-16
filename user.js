const RaceManager = require('./race-manager')

class User {
    isAdmitted = false

    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    applyRace(race) {
        if (RaceManager.admit(this, race)) {
            this.isAdmitted = true
            console.log(`you are admitted to ${race.name}`)
        }
        else
        {
            console.log("not admitted, bio and race don't match")
        }
    }

    joinRace(race) {
        if (this.isAdmitted) console.log("you got this!")
    }

    quitrace() {
        console.log("Hey don't be sad <3")
    }

    endrace(race) {
        console.log("congrats!!")
    }
}

//status fixed string 

module.exports = User