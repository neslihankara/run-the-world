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
  res.render('profile')
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
  const nes = new User({ name: 'nes', age: 25, gender: 'f', email: 'nes@sample.com' })
  await nes.setPassword('test')
  await nes.save()

  const milo = new User({ name: 'milo', age: 25, gender: 'f', email: 'milo@sample.com' })
  await milo.setPassword('test')
  await milo.save()

  const raceFast = await Race.create({
    name: 'fast',
    kilometers: 42,
    terrain: 'road',
    requiredRunnerAge: 25,
    requiredRunnerGender: 'f',
    runners: [],
    createdBy: nes.id,
    ownerName: nes.name,
  })

  await nes.createRace(raceFast)

  await milo.applyRace(raceFast)

  res.sendStatus(200)
})

module.exports = router
