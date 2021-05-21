const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb+srv://URL:URL@cluster0.hzygn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})
module.exports = db