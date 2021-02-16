const RaceManager = {
    /**
     * Checks if the age's requirements match with the user's info.
     * @param {user} user 
     * @param {race} race 
     */
    admit(user, race) {
        return user.age === race.requiredRunnerAge && user.gender == race.requiredRunnerGender
    }
}

module.exports = RaceManager