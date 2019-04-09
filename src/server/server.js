const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const OrderModel = require('./OrderModel')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.post('/send',(req,res) => {
    let model = new OrderModel(req.body)
    model.save((err) => {
        if(err)console.log(err)
        res.json(model)
    })
})
app.get('/orders',(req,res) => {
    OrderModel.find({}, (err, docs) => {
        if(err) return console.log(err)
        res.send(docs)
    })
})
app.listen(3000,(req,res) => {
    console.log('listening serv on 3k')
})