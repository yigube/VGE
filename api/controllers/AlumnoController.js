const { Alumno } = require("../models/index");

module.exports = {
  async getAllAlumno(req, res) {
    try {
      const alumnos = await Alumno.findAll();
      res.json(alumnos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //mostrar un registro
  async getAlumno(req, res) {
    try {
      const alumno = await Alumno.findOne({
        where: { id: req.params.id },
      });
      res.json(alumno);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //crear un registro
  async createAlumno(req, res) {
    try {
      await Alumno.create(req.body);
      res.json({ message: "Registro creado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //actualizar un registro
  async updateAlumno(req, res) {
    try {
      await Alumno.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({ message: "Registro actualizado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //eliminar un registro
  async deleteAlumno(req, res) {
    try {
      await Alumno.destroy({
        where: { id: req.params.id },
      });
      res.json({ message: "Registro eliminado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
