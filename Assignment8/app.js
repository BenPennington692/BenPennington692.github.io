'use strict';
const express = require('express');
const app = express();


// example
app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
  });

// Exercise 1: Splendid Circles
app.get('/math/circle/:r', function (req, res) {
    const radius = parseFloat(req.params.r);
    const area = Math.PI * radius * radius;
    const circumference = Math.PI * 2 * radius;
    res.json({ area: area, circumference: circumference });
})

// Exercise 2: Hello, you!
app.get('/hello/name', function (req, res) {
  const first = req.query.first;
  const last = req.query.last;

  if (!first || !last) {
    res.status(400).send("Missing Required GET parameters: " + (!first ? "first" : "last"));
  } else {
    res.type('text').send("Hello " + first + " " + last);
  }
})

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
