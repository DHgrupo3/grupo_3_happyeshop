const express = require('express');
const router = express.Router();
const categoriasAPIController = require('../../controllers/api/categoriasController');

router.get("/", categoriasAPIController.list);
router.get("/detail/:id", categoriasAPIController.detail);

module.exports = router;

