'use strict';

const schema = require('./categories-schema')

class Categories {

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
    const newCat = new this.schema(obj);
    return newCat.save();
  }

  update(id) {
    return this.schema.updateOne({ _id: id })
  }

  delete(id) {
    return this.schema.deleteOne({ _id: id })
  }
}

module.exports = Categories;