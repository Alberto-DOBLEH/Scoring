import db from '../db/connection'
import { DataTypes } from 'sequelize'

const Rankingmodel = db.define('ranking',{
    //en db.define se pone el nombre de la tabla al que pertenece este modelo
    id_ranking:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_proyecto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_alternativa:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    score:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName:true,
    timestamps:false
})
export default Rankingmodel