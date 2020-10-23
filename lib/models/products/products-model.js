'use strict';

const schema = require('./products-schema')

class Products {

  constructor(schema) {
    this.schema = schema;
  }

  read(id) {
    if (id) {
      return this.schema.find({ _id: id });
    } else {
      return this.schema.find({});
    }
  }

  create(obj) {
    const newProduct = new this.schema(obj);
    return newProduct.save();
  }

  update(id) {
    return this.schema.updateOne({ _id: id })
  }

  delete(id) {
    return this.schema.deleteOne({ _id: id })
  }
}

module.exports = Products;