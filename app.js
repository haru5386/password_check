const express = require('express')
const exphdbs = require('express-handlebars')
const app = express()
const mongoose = require('mongoose')

const port = 3000

mongoose.connect('mongodb://localhost/Users-password', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphdbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log('App is running on http://localhost:3000')
})