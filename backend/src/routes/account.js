const express = require('express')
const passport = require('passport')
const { celebrate, Joi, errors, Segments } = require('celebrate')
const User = require('../models/user')

const router = express.Router()

router.get('/session', (req, res) => {
  res.send(req.user)
})

router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      age: Joi.number().required(),
      gender: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.any().required(),
    },
  }),
  async (req, res, next) => {
    const { name, age, gender, email, password } = req.body

    try {
      const user = await User.register({ name, age, gender, email }, password)
      res.send(user)
    } catch (e) {
      next(e)
    }
  }
)

router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

router.delete('/session', (req, res) => {
  req.logout()
  res.send(true)
})

module.exports = router
