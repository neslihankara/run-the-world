const User = require('./user')
const Race = require('./race')

const nes = new User("nes", 23, "female")
const rose = new User("rose", 22, "female")

const fast = new Race("fastRace", 46, "asphalt", 23, "female", 2, 3)

nes.applyRace(fast)
rose.applyRace(fast)
nes.joinRace(fast)
console.log(nes.id)