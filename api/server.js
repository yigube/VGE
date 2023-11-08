const express = require("express");
const app = express();
const { sequelize } = require("./models/index");

// Setting
const PORT = process.env.PORT || 3000;

// Middleware
// Para poder rellenar el req.body
app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

  // Rutas
  .use(require("./routes"))

  // Arrancamos el servidor
  .listen(PORT, function () {
    console.log(`La api ha arrancando en http://localhost:${PORT}`);

    sequelize.sync({ force: true }).then(() => {
      console.log("Se ha establecido la conexión");
    });
  });
