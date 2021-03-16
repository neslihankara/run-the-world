const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  isAdmitted: false,
  races: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Race',
      autopopulate: true,
    },
  ],
})
class User {
  async createRace(race) {
    this.races.push(race)
    await this.save()
  }

  async applyRace(race) {
    race.admit(this)
    await this.save()
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('User', userSchema)
