const express = require('express')
const Race = require('../models/race')

const router = express.Router()

router.get('/', async (req, res) => {
  const races = await Race.find({})

  res.send(races)
})

router.get('/:raceId', async (req, res) => {
  const race = await Race.findById(req.params.raceId)

  if (race) res.send(race)
  else res.sendStatus(404)
})

router.post('/', async (req, res) => {
  const raceToCreate = {
    name: req.body.name,
    kilometers: req.body.kilometers,
    terrain: req.body.terrain,
    requiredRunnerAge: req.body.requiredRunnerAge,
    requiredRunnerGender: req.body.requiredRunnerGender,
    startTime: req.body.startTime,
  }

  const createdRace = await Race.create(raceToCreate)
  res.send(createdRace)
})

module.exports = router