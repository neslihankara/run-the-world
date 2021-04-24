const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Attendance = require('./attendance')

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
  attendances: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Attendance',
      autopopulate: true,
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
    if (this.attendances.some(a => a.user.equals(user))) throw new Error('You have already admitted at this race.')

    // finally, admit the user.
    const attendance = await Attendance.create({ user, race: this })

    this.attendances.push(attendance)
    user.attendances.push(attendance)

    await this.save()
    await user.save()
  }
}

raceSchema.loadClass(Race)
raceSchema.plugin(autopopulate)

module.exports = mongoose.model('Race', raceSchema)
