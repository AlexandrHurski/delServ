const express = require('express')
const app = express()
const BookModel = require('./model')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/api',(req,res) => {
    res.set({'Content-Type': 'application/xml'})
    res.send('lasdsa')
})
app.get('/books', (req, res) => {
    BookModel.find({}, (err, docs) => {
        if(err) return console.log(err)
        res.send(docs)
    })
})

app.listen(3000,(req,res) => {
    console.log('listening serv on 3k')
})