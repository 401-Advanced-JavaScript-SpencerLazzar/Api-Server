const express = require('express');
const app = require('../lib/server');
const router = express.Router();

const { getAll, getOne, createOne } = require('../');
const app = require('../lib/server');

app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  timestamp,
  logger
)


app.route('')
  .post('/categories', (req, res) => {
    res.send(req.body)
  })

  .get('/categories', (req, res) => {
    res.send(req.body)
  })

  .get('/categories/:id', (req, res) => {
    res.send(req.params)
  })

  .put('/categories/:id', (req, res) => {
    res.send(req.params)
  })

  .delete('/categories/:id', (req, res) => {
    res.send(req.params)
  })


module.exports = router;