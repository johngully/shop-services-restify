const lowdb = require('lowdb');
const data = require('./data.json');

class productsRepository {

  constructor () {
    this.db = lowdb();
    this.db.setState(data);
  }

  getProducts() {
    return this.db.get('products').sortBy('details.name');
  }

  getProduct(id) {
    return this.db.get('products').find({ id });
  }

}

module.exports = new productsRepository();
