"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candidato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Candidato.belongsTo(models.Grado, {
        foreignKey: "id",
        target_key: "idGrado",
      });
    }
  }
  Candidato.init(
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      idGrado: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Candidato",
    }
  );
  return Candidato;
};
