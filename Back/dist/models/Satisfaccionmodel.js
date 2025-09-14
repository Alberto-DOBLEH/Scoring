"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Satisfaccionmodel = connection_1.default.define('tabla_satisfaccion', {
    //en db.define se pone el nombre de la tabla al que pertenece este modelo
    id_proyecto: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    id_criterio: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    id_alternativa: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    satisfaccion: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Satisfaccionmodel;
