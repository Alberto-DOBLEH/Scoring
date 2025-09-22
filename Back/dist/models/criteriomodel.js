"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Criteriomodel = connection_1.default.define("criterio", {
    //en db.define se pone el nombre de la tabla al que pertenece este modelo
    id_criterio: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    id_proyecto: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    ponderacion: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    freezeTableName: true,
    timestamps: false,
});
exports.default = Criteriomodel;
