const productsRepository = require('../data/productsRepository.js')

function product(request, response, next) {
  const productId = request.params.id;
  const body = productsRepository.getProduct(productId);

  response.send(
    200,
    body,
    { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  );

  next();
}

module.exports = product;