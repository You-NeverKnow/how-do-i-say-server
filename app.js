const express = require('express')
const app = express()
const port = 8000

const data =  {
  e: [
      {
        word: "went",
        indices: [1]
      },
      {
        word: "intend",
        indices: [3]
      },
      {
        word: "send",
        indices: [1]
      },
      {
        word: "letter",
        indices: [1]
      },
    ],

  æ: [
      {
        word: "Cat",
        indices: [1]
      },
      {
        word: "hand",
        indices: [1]
      },
      {
        word: "nap",
        indices: [1]
      },
      {
        word: "flat",
        indices: [2]
      },
      {
        word: "have",
        indices: [1]
      },
    ],
  ʌ: [
      {
        word: "fun",
        indices: [1]
      },
      {
        word: "love",
        indices: [1]
      },
      {
        word: "money",
        indices: [1]
      },
      {
        word: "one",
        indices: [0]
      },
      {
        word: "London",
        indices: [1]
      },
      {
        word: "come",
        indices: [1]
      },
    ],
  ʊ: [
      {
        word: "put",
        indices: [1]
      },
      {
        word: "look",
        indices: [1, 2]
      },
      {
        word: "should",
        indices: [2, 3]
      },
      {
        word: "cook",
        indices: [1, 2]
      },
      {
        word: "book",
        indices: [1, 2]
      },
    ],
  ɒ: [
      {
        word: "Rob",
        indices: [1]
      },
      {
        word: "top",
        indices: [1]
      },
      {
        word: "watch",
        indices: [1]
      },
      {
        word: "squat",
        indices: [2, 3]
      },
      {
        word: "sausage",
        indices: [1, 2]
      },
    ],
  ə: [
      {
        word: "alive",
        indices: [0]
      },
      {
        word: "again",
        indices: [1]
      },
      {
        word: "mother",
        indices: [1, 4]
      },
      {
        word: "effective",
        indices: [0]
      },
      {
        word: "about",
        indices: [0]
      },
      {
        word: "letter",
        indices: [4]
      },

    ],
}

app.get('/', (req, res) => {
  res.send({h: 'Hello World!!!'})
})

const findData = (str) => {
  let out = {}
  let ch = ""
  for (let i = 0; i < str.length; i++) {
    ch = str[i]
    out[ch] = data[ch]
  }
  return out
}

app.get('/search', function (req, res) {
  res.send(findData(req.query['q']))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

