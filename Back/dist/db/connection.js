"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('scoring_db', 'root', 'admin', {
    host: 'localhost', //(nombre de db, usuario, contrasseña)
    dialect: 'mysql'
});
exports.default = sequelize;
