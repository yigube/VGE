const { Tarjeton } = require("../models/index");

module.exports = {
  async getAllTarjeton(req, res) {
    try {
      const tarjetones = await Tarjeton.findAll();
      res.json(tarjetones);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //mostrar un registro
  async getTarjeton(req, res) {
    try {
      const tarjeton = await Tarjeton.findOne({
        where: { id: req.params.id },
      });
      res.json(tarjeton);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //crear un registro
  async createTarjeton(req, res) {
    try {
      await Tarjeton.create(req.body);
      res.json({ message: "Registro creado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //actualizar un registro
  async updateTarjeton(req, res) {
    try {
      await Tarjeton.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({ message: "Registro actualizado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //eliminar un registro
  async deleteTarjeton(req, res) {
    try {
      await Tarjeton.destroy({
        where: { id: req.params.id },
      });
      res.json({ message: "Registro eliminado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

