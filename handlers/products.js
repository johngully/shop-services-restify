const productsRepository = require('../data/productsRepository.js')

function products(request, response, next) {
  const body = productsRepository.getProducts();
  response.send(
    200,
    body,
    { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  );

  next();
}

module.exports = products;