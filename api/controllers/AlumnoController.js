const { Alumno } = require("../models/index");

module.exports = {
  async all(req, res) {
    let alumnos = await Alumno.findAll({
      attributes: ["nombre"],
      
    });
    res.json(alumnos);
  },
};
