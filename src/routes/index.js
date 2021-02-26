const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'run the world' })
})

router.get('/profile', (req, res) => {
  const createdRaces = ['heyo', 'this', 'is', 'a', 'mock', 'array', '<3']
  const admittedRaces = ['also', 'this', 'one']
  const attemptedRaces = ['this', 'one', 'as well']

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
