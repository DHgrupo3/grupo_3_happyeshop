const express = require('express');
const router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/who', mainController.who);
router.get('/terminos', mainController.terminos);
router.get ('/cart', mainController.cart);

module.exports = router;
