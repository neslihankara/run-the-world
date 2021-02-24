const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Race = require('../models/race')

const nes = new User('nes', 23, 'f')
const milo = new User('milo', 26, 'f')

const fast = new Race('fast', 42, 'road', 25, 'f', '14', '20')

nes.age = 25

nes.applyRace(fast)
nes.joinRace(fast)
nes.endRace(fast)

const users = [nes, milo]
/* GET users listing. */
router.get('/', (req, res) => {
  let result = users

  // sending a query response as an array but id returns obj
  // filter would send all the == matches
  if (req.query.name) {
    result = users.find(user => user.name == req.query.name)
  }

  res.send(result)
})

router.get('/:userId', (req, res) => {
  // this is how we fetch variables in the url
  // sending a query response as an array but id returns obj
  // filter would send all the == matches

  const user = users[req.query.userId]

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

module.exports = router
