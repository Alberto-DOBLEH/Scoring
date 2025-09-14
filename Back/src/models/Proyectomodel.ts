import db from "../db/connection";
import { DataTypes } from "sequelize";

const Proyectomodel = db.define(
  "proyecto",
  {
    //en db.define se pone el nombre de la tabla al que pertenece este modelo
    id_proyecto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      unique: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
export default Proyectomodel;
