import db from '../db/connection'
import { DataTypes } from 'sequelize'

const Satisfaccionmodel = db.define('tabla_satisfaccion',{
    //en db.define se pone el nombre de la tabla al que pertenece este modelo
    id_proyecto:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_criterio:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_alternativa:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    satisfaccion:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true,
    timestamps:false
})
export default Satisfaccionmodel