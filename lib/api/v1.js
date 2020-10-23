const express = require('express');
const router = express.Router();

const category = require('../models/categories/categories-model');
const product = require('../models/products/products-model');

function getModel(req, res, next) {
  let model = req.params.model;

  switch (model) {
    case "category":
      req.model = category;
      next();
      return;
    case "products":
      req.model = product;
      next();
      return;
    default:
      next("Invalid Model");
      return;
  }
}

router.param('model', getModel);


router.get('/api/v1/:model', handleGetAll);
router.post('/api/vi/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handleUpdateOne);
router.delete('/api/v1/:model/:id', handleDelete);


// Route Handlers
function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      let count = results.length;
      res.json({ count, results });
    })
    .catch(next);
}

function handlePost(req, res, next) {
  req.model.post(req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(record => res.json(record))
    .catch(next);
}

function handleUpdateOne() {
  let id = req.params.id;
  req.model.put(id)
    .then(record => res.json(record))
    .catch(next);
}

function handleDelete() {
  let id = req.params.id;
  req.model.delete(id)
    .then(record => res.json(record))
    .catch(next);
}


module.exports = router;