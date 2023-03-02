const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const adminController = require('../controllers/adminController');

const { body }  = require ('express-validator');

//const adminController = require(path.resolve(__dirname, 'controllers', adminController));

var storage = multer.diskStorage ({destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../public/img/productos'));
},

filename: function (req,file,cb) {
    cb(null, 'producto' + Date.now() + path.extname(file.originalname))
}

})

const upload = multer ({storage});

const validations = [
	body('name').notEmpty().withMessage('Tienes que escribir un nombre').isLength({ min: 5 }).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    body('description').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
	body('imagen').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

				if (!file) {
					throw new Error('Tienes que subir una imagen');
				} else {
					let fileExtension = path.extname(file.originalname);
					if (!acceptedExtensions.includes(fileExtension)) {
						throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
					}
				}

				return true;

	})
];

router.get('/', adminController.index);
router.post ('/create_product', upload.single('imagen'), validations, adminController.save);
router.get ('/edit_product/:id', adminController.edit);
router.put ('/edit_product/:id', upload.single('imagen'), validations, adminController.update);
router.get ('/delete_product/:id', adminController.delete);
router.get ('/create_product', adminController.create);
router.get('/productDetail/:id', adminController.mostrar);
router.get('/productDetailGeneral/:id', adminController.mostrarGeneral);

module.exports = router;
