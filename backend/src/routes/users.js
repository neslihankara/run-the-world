const express = require('express')

const router = express.Router()

const User = require('../models/user')

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

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

router.post('/', async (req, res) => {
  const newUser = await User.create(req.body)

  res.send(newUser)
})

module.exports = router
