const express = require('express')
const exphbs = require('express-handlebars')
const RandomURL = require('./randomURL')
const mongoose = require('mongoose')
const URL = require('./models/urlShortener')
const routes = require('./routes/index')

const app = express()
const port = 3000
let url = ''
let randomURL = ''
const pages = []

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(routes)

mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})