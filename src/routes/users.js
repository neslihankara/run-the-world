const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Race = require('../models/race')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.age) {
    query.age = req.query.age
  }

  res.send(await User.find(query))
})

router.get('/initialize', async (req, res) => {
  const nes = await User.create({ name: 'nes', age: 25, gender: 'f' })
  const milo = await User.create({ name: 'milo', age: 25, gender: 'f' })

  const raceFast = await Race.create({
    name: 'fast',
    kilometers: 42,
    terrain: 'road',
    requiredRunnerAge: 25,
    requiredRunnerGender: 'f',
    runners: [],
    createdBy: User.id,
  })

  await nes.createRace(raceFast)

  await milo.applyRace(raceFast)

  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

module.exports = router
