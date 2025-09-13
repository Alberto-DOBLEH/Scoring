import Alternativamodel from "../models/Alternativamodel";

export class Alternativa {

    async añadir(body: any){
        try{
            await Alternativamodel.create(body) //añade datos a la tabla
            console.log(body)
            return "alternativa añadida"
        }catch(error){
            console.error(error)
            return "No se pudo añadir el usuariooo"
        }
    }

    async obtener(id_proyecto:number){
        try{
            return await Alternativamodel.findOne({
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