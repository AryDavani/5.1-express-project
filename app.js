const express = require('express');
const loremIpsum = require('lorem-ipsum')
  , output = loremIpsum({
    count: 3,
    units: 'paragraphs',
    sentenceLowerBound: 10,
    sentenceUpperBound: 18,
    paragraphLowerBound: 5,
    paragraphUpperBound: 12,
    format: 'html'
  });

const app = express();

app.get('/lorem', function (req, res) {
  res.send(loremIpsum());
})

app.listen(3000, function() {
  console.log('express app waiting for a response...');
})
