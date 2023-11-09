const { Grado } = require("../models/index");

/*definimos los metodos para el CRUD */

//mostrar todos los registros
module.exports = {
  async getAllGrado(req, res) {
    try {
      const grados = await Grado.findAll();
      res.json(grados);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //mostrar un registro
  async getGrado(req, res) {
    try {
      const grado = await Grado.findOne({
        where: { id: req.params.id },
      });
      res.json(grado);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //crear un registro
  async createGrado(req, res) {
    try {
      await Grado.create(req.body);
      res.json({ message: "Registro creado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //actualizar un registro
  async updateGrado(req, res) {
    try {
      await Grado.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({ message: "Registro actualizado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //eliminar un registro
  async deleteGrado(req, res) {
    try {
      await Grado.destroy({
        where: { id: req.params.id },
      });
      res.json({ message: "Registro eliminado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
