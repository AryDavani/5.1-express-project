const express = require('express');
const loremIpsum = require('lorem-ipsum');

function generateHTML(num) {
  var count = num ? num : 3;
  return loremIpsum({
    count: count,
    units: 'paragraphs',
    sentenceLowerBound: 10,
    sentenceUpperBound: 18,
    paragraphLowerBound: 5,
    paragraphUpperBound: 12,
    format: 'html',
  })
}

const app = express();

app.get('/lorem', function (req, res) {
  res.send(generateHTML());
})
app.get('/lorem/:number', function (req, res) {
  res.send(generateHTML(req.params.number));
})

app.listen(3000, function() {
  console.log('express app waiting for a response...');
})
