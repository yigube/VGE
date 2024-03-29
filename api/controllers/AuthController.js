const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

/*definimos los metodos para el CRUD */
module.exports = {
  //Login
  signIn(req, res) {
    let { email, password } = req.body;

    //Buscar usuario
    User.findOne({
      where: {
        email: email,
      },
    })
      .then((user) => {
        if (!user) {
          res
            .status(404)
            .json({ msg: "Usuario con este correo no encontrado" });
        } else {
          if (bcrypt.compareSync(password, user.password)) {
            //Devolvemos token
            let token = jwt.sign({ user: user }, authConfig.secret, {
              expiresIn: authConfig.expires,
            });
            res.json({
              user: user,
              token: token,
            });
          } else {
            //Acceso no autorizado
            res.status(401).json({msg: "Contraseña incorrecta"});
          }
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  //Registro
  signUp(req, res) {
    //Encriptamos la contraseña
    let password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );

    //Creamos el usuario
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: password,
    })
      .then((user) => {
        //Creamos el token
        let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
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
};
