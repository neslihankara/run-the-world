const express = require('express')
const User = require('../models/user')

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await User.find({})

  res.send(users)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.send(user)
  else res.sendStatus(404)
})

router.post('/', async (req, res) => {
  const newUser = await User.create(req.body)

  res.send(newUser)
})

module.exports = router
