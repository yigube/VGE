const express = require("express");
const router = express.Router();

//Importar controladores
const GradoController = require("./controllers/GradoController.js");
const CandidatosController = require("./controllers/CandidatoController.js");
const AlumnoController = require("./controllers/AlumnoController.js");
const TarjetonController = require("./controllers/TarjetonController.js");
const AuthController = require("./controllers/AuthController.js");

//Login y registro
router.post("/singin", AuthController.singIn);
router.post("/singup", AuthController.singUp);

//Alumno
router.get("/grados", GradoController.getAllGrado);
router.get("/candidatos", CandidatosController.getAllCandidato);
router.get("/alumnos", AlumnoController.getAllAlumno);
router.get("/tarjeta", TarjetonController.getAllTarjeton);

module.exports = router;
