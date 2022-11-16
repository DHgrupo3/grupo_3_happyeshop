const express = require('express');
const router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

const productsController = require('../controllers/productsController');

router.get ('/products', productsController.index);
router.get ('/cart', productsController.cart);
router.get('/register', productsController.register);

module.exports = router;
