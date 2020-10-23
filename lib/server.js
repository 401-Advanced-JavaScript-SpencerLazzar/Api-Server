const express = require('express');
const app = express();


const apiRouter = require('../lib/api/v1.js');


app.use('/v1', apiRouter);


app.use(
  express.json(),
  express.urlencoded({ extended: true }),
)




module.exports = app;