const express = require('express');
const router = express.Router();



const userController = require('../controllers/userController');

// const validations = [
// 	body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
// 	body('email')
// 		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
// 		.isEmail().withMessage('Debes escribir un formato de correo válido'),
// 	body('contraseña').notEmpty().withMessage('Tienes que escribir una contraseña'),
// 	body('pais').notEmpty().withMessage('Tienes que elegir un país'),
// 	body('avatar').custom((value, { req }) => {
// 		let file = req.file;
// 		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
// 		if (!file) {
// 			throw new Error('Tienes que subir una imagen');
// 		} else {
// 			let fileExtension = path.extname(file.originalname);
// 			if (!acceptedExtensions.includes(fileExtension)) {
// 				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
// 			}
// 		}

// 		return true;
// 	})
// ]

router.get ('/register', userController.register);
router.get ('/login', userController.login);
router.get ('/contactanos', userController.contact);
router.get ('/terminos', userController.terminos);
//router.post ('/register', upload.single('imagen'), userController.save);
//router.post ('/register', uploadFile.single('avatar'), validations, userController.save);


module.exports = router;