const mongoose = require('mongoose')
const Schema = mongoose.Schema()
const urlShema = new Schema({
  url: {
    type: String,
    required: true
  },
  randomUrl: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('URL', urlShema)