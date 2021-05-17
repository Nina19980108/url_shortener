const express = require('express')
const exphbs = require('express-handlebars')
const RandomURL = require('./randomURL')
const mongoose = require('mongoose')
const URL = require('./models/urlShortener')

const app = express()
const port = 3000
let url = ''
let randomURL = ''
const pages = []

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/url', (req, res) => {
  url = req.query.url
  randomURL = RandomURL()
  URL.create({ url: url, randomUrl: randomURL })

  res.render('url', { randomURL })
})

app.get('/url/:randomURL', (req, res) => {
  const randomURL = req.params.randomURL
  console.log(randomURL)
  const query = new RegExp(randomURL.trim())
  return URL.find({
    $or: [{ randomUrl: query }]
  })
    .lean()
    .then(Url => {
      res.redirect(Url[0].url)
    })
    .catch(error => console.error(error))
})

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})