const express = require('express');

const error404 = require('../lib/middleware/404');
const error500 = require('../lib/middleware/500');
const logger = require('../lib/middleware/logger');
const timestamp = require('../lib/middleware/timestamp');

const app = express();



app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  timestamp,
  logger
)


app.post('/products', (req, res) => {
  res.send(req.body)
})

app.get('/products', (req, res) => {
  res.send(req.body)
})

app.get('/products/:id', (req, res) => {
  res.send(req.params)
})

app.put('/products/:id', (req, res) => {
  res.send(req.params)
})

app.delete('/products/:id', (req, res) => {
  res.send(req.params)
})

//**************************** */

app.post('/categories', (req, res) => {
  res.send(req.body)
})

app.get('/categories', (req, res) => {
  res.send(req.body)
})

app.get('/categories/:id', (req, res) => {
  res.send(req.params)
})

app.put('/categories/:id', (req, res) => {
  res.send(req.params)
})

app.delete('/categories/:id', (req, res) => {
  res.send(req.params)
})

app.use(error404);
app.use(error500);




module.exports = app;