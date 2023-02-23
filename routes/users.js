const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body }  = require ('express-validator');

const guestMiddleware = require('../src/middlewares/guestMiddleware');
const authMiddleware = require('../src/middlewares/authMiddleware');


var storage = multer.diskStorage ({destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../public/img/users'));
},

filename: function (req,file,cb) {
    cb(null, 'user' + Date.now() + path.extname(file.originalname))
}

})

const upload = multer ({storage});

const userController = require('../controllers/userController');

const validations = [
		body('nombre').notEmpty().withMessage('Tienes que escribir un nombre').isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido').isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),
		body('email')
				.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
				.isEmail().withMessage('Debes escribir un formato de correo válido'),
		body('password').notEmpty().withMessage('Tienes que escribir una contraseña').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
		body('pais').notEmpty().withMessage('Tienes que elegir un país'),
		body('avatar').custom((value, { req }) => {
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
]

router.get('/', userController.index);
router.get ('/register', guestMiddleware, userController.register);
router.get ('/registerAdmin', guestMiddleware, userController.registerAdmin);
router.get ('/login', guestMiddleware, userController.login);
router.get ('/delete_user/:id', userController.delete);
router.get ('/edit_user/:id', userController.edit);
router.put ('/edit_user/:id', upload.single('imagen'), userController.update);

router.get ('/contactanos', userController.contact);
router.get ('/terminos', userController.terminos);
router.post ('/register', upload.single('avatar'), validations, userController.save);
router.post ('/registerAdmin', upload.single('avatar'), validations, userController.saveAdmin);
router.post ('/login', userController.validar);
router.get ('/userProfile', authMiddleware, userController.profile);
router.get ('/logout', userController.logout);
router.get('/userDetail/:id', userController.mostrar);

module.exports = router;
