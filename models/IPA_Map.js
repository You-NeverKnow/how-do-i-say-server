const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    word: {
        type: String,
        required: true
    },
    indices: {
        type: [Number],
        required: true
    }
})
const ItemSchema = new Schema({
    ch: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    words: {
        type: [WordSchema]
    }
})

const IPA_Map = mongoose.model('ipa_map', ItemSchema)

module.exports = IPA_Map