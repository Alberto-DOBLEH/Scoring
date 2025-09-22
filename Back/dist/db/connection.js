"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DBNAME || 'scoring_db', process.env.DBUSER || 'root', process.env.DBPASSWORD || 'root', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
