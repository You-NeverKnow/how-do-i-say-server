const express = require('express')
const fs = require('fs')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const ipa_map = require('./models/IPA_Map')

app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/ipa', { useNewUrlParser: true })
                    .then(()=> console.log('Connected'))
                    .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send({h: 'Hello World!!!'})
})

const findData = (str, res) => {
  let regex_ch = ""
  if (str.length > 0) {
    regex_ch = str[0]    
    for (let i = 1; i < str.length; i++) {
      regex_ch += '|' + str[i]
    }
  }
  ipa_map.find({ch: {"$regex": regex_ch}}, "ch words")
      .then(val => {
          console.log(val)
          res.send(val);
        })
      .catch(err=> console.log(err))
}

app.get('/search', function (req, res) {
  res.set("Access-Control-Allow-Origin", "*")
  if (req.query['q'] == "") {
    res.send([]);
  }
  findData(req.query['q'], res)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

