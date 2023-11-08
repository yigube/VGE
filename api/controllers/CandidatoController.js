const Candidato = require("../models/Candidato");
const { Alumno } = require("../models/index");

module.exports = {
  async all(req, res) {
    let candidatos = await Candidato.findAll({
      attributes: ["nombre"],
      include: {
        association: "grado",
        attributes: ["nombre"],
      },
    });
    res.json(candidatos);
  },
};
