const express = require('express');
const router = express.Router();
const productosAPIController = require('../../controllers/api/productosController');

router.get("/", productosAPIController.list);
router.get("/detail/:id", productosAPIController.detail);

module.exports = router;

