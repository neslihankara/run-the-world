class Race {
    runners = []
    
    constructor(name, kilometers = 42, terrain = "asphalt", requiredRunnerAge, requiredRunnerGender, startTime, duration){
        this.name = name
        this.kilometers = kilometers
        //fill here
    }

    start(){
        //start the time. id setter to runner
        //marathon doesnt care about runner
        console.log("get ready!")
    }

    end(endingTime) {
        console.log("it is done!")
    }
}

class Runner {
    //constructor ekle

    id = Math.round(Math.random() * 100000000)
    
    reqRunner = {
        age: 0,
        gender: ""
    }

    name = ""
    attemptedraces = []
    finishedraces = []
    
    //apply(race) method, call the admit method of the race (create it first)
    //inside apply's body, we can have race.admit(this)

    joinRace(race) {
        //check it on admit
        if (race.reqRunner !== this.reqRunner) throw new Error('this race is not right for you.')
        
        this.attemptedraces.push(race)
        console.log("you got this!")

    }

    quitrace() {
    
        console.log("Hey don't be sad <3")

        //NOremove the marathon from the array
    }

    endrace(race) {
        //not pop find another way
        this.attemptedraces.pop(race)
        this.finishedraces.push(race)
        console.log("congrats!!")
    }
}

//status fixed string 

const race = new Race()
race.kilometers = 26
race.gender = "female"
race.age = 45

const nes = new Runner()
nes.age = 45
nes.gender = "female"
nes.name = "nes"

nes.joinRace(race)
race.start()
console.log(race.runners)


//console.log(nes.joinrace(a))
/*
TypeError: Cannot read private member #kilometers 
from an object whose class did not declare it
console.log(Race.prototype.kilometers)
*/

