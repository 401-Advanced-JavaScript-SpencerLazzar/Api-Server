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


app.use(error404);
app.use(error500);




module.exports = app;