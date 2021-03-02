const express = require('express')

const Race = require('../models/race')
const User = require('../models/user')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'run the world' })
})

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
  const admittedRaces = [
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

  res.render('profile', { createdRaces, admittedRaces, attemptedRaces })
})

router.get('/browse', (req, res) => {
  res.render('browse', { title: 'run the world' })
})

router.get('/create', (req, res) => {
  res.render('create', { title: 'run the world' })
})

router.get('/rankings', (req, res) => {
  res.render('rankings', { title: 'run the world' })
})

module.exports = router
