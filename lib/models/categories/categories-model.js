

const schema = require('./categories-schema');

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

  create(id) {

  }

  update(id) {

  }

  delete(id) {

  }
}

module.exports = Categories;