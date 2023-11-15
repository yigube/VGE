const express = require("express");
const router = express.Router();

//Importar controladores
const GradoController = require("./controllers/GradoController.js");
const CandidatosController = require("./controllers/CandidatoController.js");
const AlumnoController = require("./controllers/AlumnoController.js");
const TarjetonController = require("./controllers/TarjetonController.js");
const AuthController = require("./controllers/AuthController.js");

//Login y registro
router.post("/signin", AuthController.signIn);
router.post("/signup", AuthController.signUp);

//Rutas para grados
router.get("/grados", GradoController.getAllGrado);
//Rutas para candidatos
router.get("/candidatos", CandidatosController.getAllCandidato);
//Rutas para alumnos
router.get("/alumnos", AlumnoController.getAllAlumno);
//Rutas para tarjetones
router.get("/tarjeta", TarjetonController.getAllTarjeton);

module.exports = router;
