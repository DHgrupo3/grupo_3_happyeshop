const express = require('express');
const router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

const productsController = require('../controllers/productsController');

router.get ('/', productsController.index);
router.get ('/productDetail', productsController.detail);
router.get ('/edit_product', productsController.edit);
router.get ('/delete_product', productsController.delete);
router.get ('/create_product', productsController.create);


module.exports = router;
