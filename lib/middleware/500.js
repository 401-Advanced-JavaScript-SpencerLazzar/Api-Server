

function error500(req, res, next) {
  res.status(500).send('You ran into a error 404')
}

module.exports = error500;