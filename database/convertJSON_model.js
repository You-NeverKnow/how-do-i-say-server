const fs = require('fs')
const jsonData = fs.readFileSync('./manual_db/database.json')
const mongoose = require('mongoose')

data = JSON.parse(jsonData)
console.log(data)
const IPA_Map = require('../models/IPA_Map')

mongoose.connect('mongodb://127.0.0.1:27017/ipa', { useNewUrlParser: true })
                    .then(()=>{
                        console.log('Connected')
                        for (const character in data) {
                            const newMap = new IPA_Map({
                                ch: character,
                                words: data[character]
                            })
                            newMap.save().catch((err)=>console.log(err))
                        }
                    })
                    .catch(err => console.log(err))

