"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tarjeton extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tarjeton.belongsTo(models.Alumno, {
        foreignKey: "id",
        target_key: "idAlumno",
      });
    }
  }
  Tarjeton.init(
    {
      idAlumno: DataTypes.INTEGER,
      idCandidato: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tarjeton",
    }
  );
  return Tarjeton;
};
