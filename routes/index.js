const router = require('express').Router();


// const apiRoutes = require('./api');
const category_routes = require('./api/category-routes');
const product_routes = require('./api/product-routes');
const tag_routes = require('./api/tag-routes');

router.use('/api', [category_routes, product_routes,tag_routes]);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;