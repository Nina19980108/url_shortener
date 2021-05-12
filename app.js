const express = require('express')
const exphbs = require('express-handlebars')
const randomURL = require('./randomURL')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/url', (req, res) => {
  const url = req.query.url
  console.log(url)
  console.log(randomURL())
  res.render('url', { url })
})

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})