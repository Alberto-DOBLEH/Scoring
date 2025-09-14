import Proyectomodel from "../models/Proyectomodel";

export class Proyecto {

    async añadir(body: any){
        try{
            await Proyectomodel.create(body) //añade datos a la tabla
            console.log(body)
            return "Proyecto añadido"
        }catch(error){
            console.error(error)
            return "No se pudo añadir el proyecto"
        }
    }

    async obtener(id_proyecto:number){
        try{
            return await Proyectomodel.findOne({
                where:{
                    id_proyecto:id_proyecto
                }
            })
        }catch(error){
            console.error(error)
            return ("Ha ocurrido un error al buscar la lista")
        }
    }
    
}