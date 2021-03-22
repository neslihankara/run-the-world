const io = require('socket.io')()

io.on('connect', socket => {
  socket.emit('connection established')

  //   setInterval(() => {
  //     socket.emit('hello world')
  //   }, 2000)

  //   socket.on('new message', (number, cb) => {
  //     console.log('new message received')
  //     console.log('replying with ', number + 1)
  //     cb(number + 1)
  //   })

  //   socket.on('another api', cb => {
  //     cb('another api response')
  //   })
  socket.on('new message', (streamId, message) => {
    socket.to(streamId).emit('new live stream message', message)
    console.log(message)
  })

  socket.on('join stream', streamId => {
    socket.join(streamId)
  })

  socket.on('go live', (userId, cb) => {
    console.log(`${userId} is going live!`)

    socket.broadcast.emit('new live stream', userId)
    socket.join(userId)

    cb(true)
  })
})

module.exports = io
