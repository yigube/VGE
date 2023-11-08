"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Alumno.belongsTo(models.Grado, {
        foreignKey: "id",
        target_key: "idGrado",
      }),
        Alumno.hasMany(models.Tarjeton, {
          foreignKey: "id",
          target_key: "idTarjeton",
        });
    }
  }
  Alumno.init(
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      idGrado: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Alumno",
    }
  );
  return Alumno;
};
