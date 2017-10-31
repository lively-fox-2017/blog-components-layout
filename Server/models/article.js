const mongoose = require('mongoose')
const url = `mongodb://localhost/${process.env.NODE_ENV}`
mongoose.connection.openUri(url)

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  judul: {
    type: String,
    required: true
  },
  imgUrl: String,
  imgName: String,
  deskripsi: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
})

const articleModel = mongoose.model('Article', schema)

module.exports = articleModel
