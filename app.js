const express = require('express')
const exphbs = require('express-handlebars')
const RandomURL = require('./randomURL')

const app = express()
const port = 3000
let url = ''
let randomURL = ''
const pages = []

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/url', (req, res) => {
  url = req.query.url
  console.log(pages.some(page => page[0] === url))

  randomURL = RandomURL()
  pages.push([url, randomURL])
  console.log(pages)
  res.render('url', { randomURL })
})

app.get('/url/:randomURL', (req, res) => {
  const randomURL = req.query.randomURL
  res.render('randomURL', { randomURL })
})

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})