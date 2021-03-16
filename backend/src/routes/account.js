const express = require('express')
const passport = require('passport')
const User = require('../models/user')

const router = express.Router()

router.get('/session', (req, res) => {
  res.send(req.user)
})

router.post('/', async (req, res, next) => {
  const { name, age, gender, email, password } = req.body

  const user = new User({ name, age, gender, email })
  await user.setPassword(password)
  await user.save()

  return user
})

router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

router.delete('/session', (req, res) => {
  req.logout()
  res.send(true)
})

module.exports = router
