const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authconfig = require("../../config/auth");

/*definimos los metodos para el CRUD */
//Login
module.exports = {
  async singIn(req, res) {
    //Encriptamos la contraseña
    let password = bcrypt.hashSync(req.body.password, authconfig.rounds);

    //Creamos el usuario
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: password,
    })
      .then((user) => {
        //Creamos el token
        let token = jwt.singIn({ user: user }, authconfig.secret, {
          expiresIn: authconfig.expires,
        });
        res.json({
          user: user,
          token: token,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  async singUp(req, res) {},
};
