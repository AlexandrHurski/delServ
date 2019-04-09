const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://unkzhd:p4sss0me@ds111425.mlab.com:11425/lalala',{ useNewUrlParser: true })
const BookSchema = new Schema ({
    name:String,
    author:String,
    genre:String
})

module.exports = mongoose.model('Book', BookSchema)