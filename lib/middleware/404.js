


function error404(req, res, next) {
  res.status(404).send('You ran into a error 404')
}

module.exports = error404;