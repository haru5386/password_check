const express = require('express')
const router = express.Router()
const User = require('../models/Users')


router.get('/', (req, res) => {
  res.render('index')

})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  User.find()
    .lean()
    .then((users) => {
      let checkedUser = users.filter((user) => {
        return user.email === email && user.password === password
      })
      if (checkedUser.length) {
        res.render('login', { checkedUser: checkedUser[0] })
      } else {
        res.render('index', { checkedUser: true, email, password })
      }
    })
    .catch(error => {
      console.log(error)
      res.render('index', { errMsg: error.message })
    })
})

// 匯出路由器
module.exports = router