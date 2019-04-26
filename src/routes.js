const express = require('express');
const routes = express.Router();
const pd = require('./controlers/ProductController');

routes.get('/products', pd.index);
routes.post('/products',pd.store);
routes.get('/products/:id',pd.show);
routes.put('products', pd.update);

module.exports = routes;