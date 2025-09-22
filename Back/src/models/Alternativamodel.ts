//Estos models basicamente son como esta creada la tabla, los nombres de cada camppd deben ser los mismos de las columnas de la tabla

import db from "../db/connection";
import { DataTypes } from "sequelize";

const Alternativamodel = db.define(
  "alternativa",
  {
    //en db.define se pone el nombre de la tabla al que pertenece este modelo
    id_alternativa: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_proyecto: {
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
export default Alternativamodel;
