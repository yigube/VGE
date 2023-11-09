const { Candidato } = require("../models/index");

/*definimos los metodos para el CRUD */

//mostrar todos los registros
module.exports = {
  async getAllCandidato(req, res) {
    try {
      const candidatos = await Candidato.findAll();
      res.json(candidatos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //mostrar un registro
  async getCandidato(req, res) {
    try {
      const candidato = await Candidato.findOne({
        where: { id: req.params.id },
      });
      res.json(candidato);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //crear un registro
  async createCandidato(req, res) {
    try {
      await Candidato.create(req.body);
      res.json({ message: "Registro creado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //actualizar un registro
  async updateCandidato(req, res) {
    try {
      await Candidato.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({ message: "Registro actualizado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //eliminar un registro
  async deleteCandidato(req, res) {
    try {
      await Candidato.destroy({
        where: { id: req.params.id },
      });
      res.json({ message: "Registro eliminado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

