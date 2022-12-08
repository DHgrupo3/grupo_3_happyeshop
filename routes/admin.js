const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const adminController = require('../controllers/adminController');

//const adminController = require(path.resolve(__dirname, 'controllers', adminController));

var storage = multer.diskStorage ({destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../public/img/productos'));
},

filename: function (req,file,cb) {
    cb(null, 'producto' + Date.now() + path.extname(file.originalname))
}

})

const upload = multer ({storage});

router.get('/', adminController.index);
router.post ('/create_product', upload.single('imagen'), adminController.newProduct);

module.exports = router;