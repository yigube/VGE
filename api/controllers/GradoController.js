const { Grado } = require("../models/index");


/*definimos los metodos para el CRUD */
//mostrar todos los registros
module.exports = {
  async all(req, res) {
    try {
      const grados = await Grado.findAll();
      res.json(grados);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
