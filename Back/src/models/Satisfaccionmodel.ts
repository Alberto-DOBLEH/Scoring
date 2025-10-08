import db from "../db/connection";
import { DataTypes } from "sequelize";
import Alternativamodel from "./Alternativamodel";
import Criteriomodel from "./criteriomodel";
import Proyectomodel from "./Proyectomodel";

const Satisfaccionmodel = db.define(
  "tabla_satisfaccion",
  {
    //en db.define se pone el nombre de la tabla al que pertenece este modelo
    id_proyecto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_criterio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_alternativa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    satisfaccion: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
export default Satisfaccionmodel;

// FK para realizar las consultas entre tablas
Satisfaccionmodel.belongsTo(Alternativamodel, {
  foreignKey: "id_alternativa",
  targetKey: "id_alternativa",
  as: "alternativa",
});

Satisfaccionmodel.belongsTo(Criteriomodel, {
  foreignKey: "id_criterio",
  targetKey: "id_criterio",
  as: "criterio",
});

Satisfaccionmodel.belongsTo(Proyectomodel, {
  foreignKey: "id_proyecto",
  targetKey: "id_proyecto",
  as: "proyecto",
});
