const express = require("express");
const router = express.Router();

//Importar controladores
const GradoController = require("./controllers/GradoController.js");
const CandidatosController = require("./controllers/CandidatoController.js");
const AlumnoController = require("./controllers/AlumnoController.js");
const TarjetonController = require("./controllers/TarjetonController.js");

//Home
router.get("/", (req, res) => res.json({ foo: "Bar" }));

//Alumno
router.get("/grados", GradoController.all);
router.get("/candidatos", CandidatosController.all);
router.get("/alumnos", AlumnoController.all);
router.get("/tarjeta", TarjetonController.all);

module.exports = router;
