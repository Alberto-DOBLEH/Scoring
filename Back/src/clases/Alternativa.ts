import Alternativamodel from "../models/Alternativamodel";

export class Alternativa {

    async añadir(body: any){
        try{
            await Alternativamodel.create(body) //añade datos a la tabla
            console.log(body)
            return "alternativa añadida"
        }catch(error){
            console.error(error)
            return "No se pudo añadir la alternativa"
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

    async eliminar(id_alternativa:number){
        try{
            return await Alternativamodel.destroy({
                where:{
                    id_alternativa:id_alternativa
                }
            })
        }catch(error){
            console.log(error)
            return ("Ha ocurrido un error al eliminar la alternativa")
        }
    }

    async editar(body:any, id:number){
        try {
            const alternativa =await Alternativamodel.findByPk(id)

            await alternativa?.update(body)
            return("Alternativa editada con exito")
        } catch (error) {
            console.log(error)
            return("error al editar la alternativa")
        }
    } 
    
} 