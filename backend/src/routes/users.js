const express = require('express')
const { celebrate, Joi, errors, Segments } = require('celebrate')
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

/* POST create a user */
router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      age: Joi.number().required(),
      gender: Joi.string().required(),
    },
  }),
  async (req, res) => {
    const userToCreate = {
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
    }

    const createdUser = await User.create(userToCreate)
    res.send(createdUser)
  }
)

module.exports = router
