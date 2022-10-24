const express = require("express");
const router = express.Router();

const usuario = require("./usuarios/usuario.controller");
router.use("/usuario", usuario);

module.exports = router;
