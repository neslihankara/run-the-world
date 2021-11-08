const express = require('express')
const Race = require('../models/race')

const router = express.Router()

// eslint-disable-next-line consistent-return
function ensureLogin(req, res, next) {
  if (req.user) return next()

  next(new Error('Unauthorized'))
}

router.get('/', ensureLogin, async (req, res) => {
  const races = await Race.find({})

  res.send(races)
})

router.get('/:raceId', ensureLogin, async (req, res) => {
  const race = await Race.findById(req.params.raceId)

  if (race) res.send(race)
  else res.sendStatus(404)
})

router.post('/', ensureLogin, async (req, res) => {
  const raceToCreate = {
    name: req.body.name,
    kilometers: req.body.kilometers,
    terrain: req.body.terrain,
    requiredRunnerAge: req.body.requiredRunnerAge,
    requiredRunnerGender: req.body.requiredRunnerGender,
    startDate: req.body.startDate,
    createdBy: req.user.id,
    ownerName: req.user.name,
  }

  const createdRace = await Race.create(raceToCreate)
  res.send(createdRace)
})

router.post('/:raceId/attendances', ensureLogin, async (req, res) => {
  const race = await Race.findById(req.params.raceId)

  try {
    await race.admit(req.user)
    res.sendStatus(200)
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
})

module.exports = router
