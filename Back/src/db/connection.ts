import {Sequelize} from 'sequelize'

const sequelize = new Sequelize (process.env.DBNAME || 'scoring_db', process.env.DBUSER || 'root', process.env.DBPASSWORD || 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize