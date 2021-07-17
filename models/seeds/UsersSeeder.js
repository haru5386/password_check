const User = require('../Users')
const users = require('./Users.json')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Users-password', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  for (user of users) {
    User.create({
      firstName: user.firstName,
      email: user.email,
      password: user.password
    })
  }
  console.log('done')
})