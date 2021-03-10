const express = require('express')

const Race = require('../models/race')
const User = require('../models/user')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'run the world' })
})

const mockRaces = [
  Race.create({
    name: 'marathon-A',
    kilometers: 26,
    terrain: 'road',
    requiredRunnerAge: 23,
    requiredRunnerGender: 'm',
    runners: [],
    createdBy: User.id,
  }),
  Race.create({
    name: 'race-B',
    kilometers: 5,
    terrain: 'trail',
    requiredRunnerAge: 22,
    requiredRunnerGender: 'f',
    runners: [],
    createdBy: User.id,
  }),
  Race.create({
    name: 'race-D',
    kilometers: 10,
    terrain: 'road',
    requiredRunnerAge: 30,
    requiredRunnerGender: 'f',
    runners: [],
    createdBy: User.id,
  }),
]

// tba: the races that have the user whose isCreator property is true for that race in the races array
router.get('/profile', (req, res) => {
  const createdRaces = [
    Race.create({
      name: 'marathon-C',
      kilometers: 42,
      terrain: 'road',
      requiredRunnerAge: 25,
      requiredRunnerGender: 'f',
      runners: [],
      createdBy: User.id,
    }),
  ]

  const attemptedRaces = [
    Race.create({
      name: 'marathon-E',
      kilometers: 23,
      terrain: 'road',
      requiredRunnerAge: 25,
      requiredRunnerGender: 'f',
      runners: [],
      createdBy: User.id,
    }),
  ]

  res.render('profile', { createdRaces, admittedRaces: mockRaces, attemptedRaces })
})

router.get('/browse', async (req, res) => {
  const races = await Race.find({})

  res.render('browse', { title: 'run the world', races })
})

router.get('/create', (req, res) => {
  res.render('create', { title: 'run the world' })
})

router.get('/rankings', (req, res) => {
  res.render('rankings', { title: 'run the world' })
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

module.exports = router
