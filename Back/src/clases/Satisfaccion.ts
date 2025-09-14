import Satisfaccionmodel from "../models/Satisfaccionmodel";

export class Satisfaccion {

    async añadir(body: any){
        try{
            await Satisfaccionmodel.create(body) //añade datos a la tabla
            console.log(body)
            return "Satisfaccion añadida"
        }catch(error){
            console.error(error)
            return "No se pudo añadir la satisfaccion"
        }
    }

    async obtener(id_proyecto:number){
        try{
            return await Satisfaccionmodel.findOne({
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