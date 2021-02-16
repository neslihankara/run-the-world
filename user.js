const RaceManager = require('./race-manager')
const uuid = require('uuid').v4
class User {
    isAdmitted = false
    id = null 
    
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    applyRace(race) {
        if (RaceManager.admit(this, race)) {
            this.isAdmitted = true
            console.log(`you are admitted to ${race.name}`)
            this.id = uuid()
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

    get id() {
        return this.id
    }
}

//status fixed string 

module.exports = User