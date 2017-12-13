const restify = require('restify');
const products = require('./handlers/products');
const product = require('./handlers/product');

const server = restify.createServer();

server.get('/products', products);
server.get('/product/:id', product);

server.listen(3030, () => {
  console.log('Restify shop services ready at: %s', server.url);
});