const db = require('../../config/mongoose')
const URL = require('../urlShortener')

db.once('open', () => {
  URL.create({
    url: 'http://google.com',
    randomUrl: 'A0000'
  })
  console.log('done!')
})