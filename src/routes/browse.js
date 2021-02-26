const express = require('express')

const router = express.Router()

router.post('/browse', (req, res) => {
  res.send('browse', { title: 'run the world' })
})

module.exports = router
