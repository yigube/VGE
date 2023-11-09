const { User } = require("../models/index");


/*definimos los metodos para el CRUD */
//Login
module.exports = {
  async singIn(req, res) {
    let password = 
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: password
    })
  },

  async singUp(req, res) {
    try {
      const grados = await Grado.findAll();
      res.json(grados);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};