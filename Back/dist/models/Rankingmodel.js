"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Rankingmodel = connection_1.default.define('ranking', {
    //en db.define se pone el nombre de la tabla al que pertenece este modelo
    id_ranking: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_proyecto: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    id_alternativa: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    score: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Rankingmodel;
