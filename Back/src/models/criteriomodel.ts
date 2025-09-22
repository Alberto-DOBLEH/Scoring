import db from "../db/connection";
import { DataTypes } from "sequelize";

const Criteriomodel = db.define(
  "criterio",
  {
    //en db.define se pone el nombre de la tabla al que pertenece este modelo
    id_criterio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_proyecto: {
      type: DataTypes.INTEGER,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    ponderacion: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
export default Criteriomodel;
