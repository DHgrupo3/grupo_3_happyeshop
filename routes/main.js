var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/terminos', function(req, res, next) {
  res.render('terminos', { title: 'Express' });
});

module.exports = router;
