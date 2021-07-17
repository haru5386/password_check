const User = require('../Users')
const users = require('./Users.json')
const db = require('../../config/mongoose')

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