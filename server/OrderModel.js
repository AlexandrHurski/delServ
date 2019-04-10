const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://unkzhd:p4sss0me@ds111425.mlab.com:11425/lalala',{ useNewUrlParser: true })

const OrderModel = new Schema ({
    adr:String,
    name:String,
    phone:String,
    order:Object
})

module.exports = mongoose.model('ORDERS', OrderModel)