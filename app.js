const express = require('express')
const exphbs = require('express-handlebars')
const RandomURL = require('./randomURL')
const URL = require('./models/urlShortener')
const routes = require('./routes/index')

require('./config/mongoose')

const app = express()
const port = 3000
let url = ''
let randomURL = ''
const pages = []

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(routes)


app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})