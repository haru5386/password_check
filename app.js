const express = require('express')
const exphdbs = require('express-handlebars')
const app = express()

const bodyParser = require('body-parser')
const port = 3000


const routes = require('./routes')
require('./config/mongoose')


app.engine('hbs', exphdbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)


app.listen(port, () => {
  console.log('App is running on http://localhost:3000')
})