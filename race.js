class Race {
    runners = []
    
    constructor(name, kilometers = 42, terrain = "asphalt", requiredRunnerAge, requiredRunnerGender, startTime, duration) {
        this.name = name
        this.kilometers = kilometers
        this.terrain = terrain
        this.requiredRunnerAge = requiredRunnerAge
        this.requiredRunnerGender = requiredRunnerGender
        this.startTime = startTime
        this.duration = duration
    }

    start(timer) {
        //start the timer or km
        
        console.log("get ready!")
    }

    end(timer) {
        //end the timer or km 

        console.log("it is done!")
    }
}

module.exports = Race