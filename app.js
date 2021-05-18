const express = require('express')
const exphbs = require('express-handlebars')
const RandomURL = require('./randomURL')
const URL = require('./models/urlShortener')
const routes = require('./routes/index')

require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(routes)


app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})