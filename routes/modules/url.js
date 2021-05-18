const express = require('express')
const router = express.Router()
const URL = require('../../models/urlShortener')
const RandomURL = require('../../randomURL')

router.get('/', async (req, res) => {
  let url = req.query.url
  let randomURL = ''
  const isUrlExist = await URL.exists({ url: url })
  if (!isUrlExist) {
    const times = await URL.countDocuments()
    randomURL = RandomURL(times)
    URL.create({ url: url, randomUrl: randomURL })
  } else {
    randomURL = await URL.findOne({ url: url }).lean()
    randomURL = randomURL.randomUrl
  }
  const hostname = 'localhost:3000'
  res.render('url', { randomURL, hostname })
})

router.get('/:randomURL', (req, res) => {
  const randomURL = req.params.randomURL
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

module.exports = router