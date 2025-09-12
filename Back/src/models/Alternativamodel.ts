import db from '../db/connection'
import { DataTypes } from 'sequelize'

const Alternativamodel = db.define('alternativa',{
    id_alternativa:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    id_proyecto:{
        type:DataTypes.INTEGER
    },
    nombre:{
        type:DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
})
export default Alternativamodel