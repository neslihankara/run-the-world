const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const raceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  kilometers: {
    type: Number,
    required: true,
    default: 42,
  },
  terrain: {
    type: String,
    required: true,
    default: 'road',
  },
  requiredRunnerAge: {
    type: Number,
    required: true,
  },
  requiredRunnerGender: {
    type: String, // ENUM
    required: true,
  },
  startTime: {
    type: String, // should be date
  },
  runners: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
      unique: true,
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
  },
})
class Race {
  async admit(user) {
    // check if user is eligible to join this race, if not throw an error
    if (user.age != this.requiredRunnerAge && user.gender != this.requiredRunnerGender)
      throw new Error('Sorry, you do not meet the requirements of this race.')

    // check if the user is already admitted
    if (user.races.includes(this)) throw new Error('You have already admitted at this race.')

    // finally, admit the user.
    this.runners.push(user)
    user.isAdmitted = true

    await this.save()
    await user.save()
  }
}

raceSchema.loadClass(Race)
raceSchema.plugin(autopopulate)

module.exports = mongoose.model('Race', raceSchema)
