const express = require('express')

const Race = require('../models/race')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'run the world' })
})

router.get('/profile', (req, res) => {
  const createdRaces = [new Race('marathon A', 42, 'road', 25, 'f', '13:30', '6 hours')] // the races that have the user whose isCreator property is true for that race in the races array
  const admittedRaces = [
    new Race('race B', 25, 'trail', 22, 'm', '15:30', '5 hours'),
    new Race('race C', 5, 'road', 30, 'f', '16:30', '3 hours'),
    new Race('half-marathon D', 26, 'road', 23, 'f-m', '13:30', '6 hours'),
  ]
  const attemptedRaces = [
    new Race('marathon A', 42, 'road', 25, 'f', '13:30', '6 hours'),
    new Race('race C', 5, 'road', 30, 'f', '16:30', '3 hours'),
    new Race('half-marathon D', 26, 'road', 23, 'f-m', '13:30', '6 hours'),
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
