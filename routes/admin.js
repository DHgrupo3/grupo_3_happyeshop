const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require('../controllers/adminController');

//const adminController = require(path.resolve(__dirname, 'controllers', adminController));


router.get('/', adminController.index);

module.exports = router;