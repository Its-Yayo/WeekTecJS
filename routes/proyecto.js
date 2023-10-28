const express = require('express');
const router = express.Router();
const proyectoController =  require("../controllers/proyecto");

router.post('/agregarProyecto', proyectoController.postAgregarProyecto);
router.get('/consultarProyecto', proyectoController.getConsultarProyectos);

module.exports = router
