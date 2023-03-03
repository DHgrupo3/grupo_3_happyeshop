const express = require('express');
const router = express.Router();
const usuariosAPIController = require('../../controllers/api/usuariosController');

router.get("/", usuariosAPIController.list);
router.get("/detail/:id", usuariosAPIController.detail);

module.exports = router;

