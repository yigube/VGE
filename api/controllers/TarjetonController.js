const { Grado } = require("../models/index");

module.exports = {
  async all(req, res) {
    let tarjetones = await Tarjeton.findAll({
      include: {
        association: "alumno",
        attributes: ["nombre"],
      },
    });
    res.json(tarjetones);
  },
};
