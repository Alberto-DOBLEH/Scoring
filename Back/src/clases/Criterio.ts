import Criteriomodel from "../models/criteriomodel";

export class Criterio {

    async añadir(body: any){
        try{
            await Criteriomodel.create(body) //añade datos a la tabla
            console.log(body)
            return "Criterio añadido"
        }catch(error){
            console.error(error)
            return "No se pudo añadir el criterio"
        }
    }

    async obtener(id_proyecto:number){
        try{
            return await Criteriomodel.findOne({
                where:{
                    id_proyecto:id_proyecto //lista de la tabla
                }
            })
        }catch(error){
            console.error(error)
            return ("Ha ocurrido un error al buscar la lista")
        }
    }
    
}