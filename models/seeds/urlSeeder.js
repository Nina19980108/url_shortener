const mongoose = require('mongoose')
const URL = require('../urlShortener')
mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  URL.create({
    url: 'http://google.com',
    randomUrl: 'ei39n'
  })
  console.log('done!')
})