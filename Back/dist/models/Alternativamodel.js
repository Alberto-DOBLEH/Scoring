"use strict";
//Estos models basicamente son como esta creada la tabla, los nombres de cada camppd deben ser los mismos de las columnas de la tabla
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Alternativamodel = connection_1.default.define("alternativa", {
    //en db.define se pone el nombre de la tabla al que pertenece este modelo
    id_alternativa: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    id_proyecto: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false,
});
exports.default = Alternativamodel;
