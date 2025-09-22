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

    async eliminar(id_proyecto:number){
        try{
            return await Satisfaccionmodel.destroy({
                where:{
                    id_proyecto:id_proyecto
                }
            })
        }catch(error){
            console.log(error)
            return ("Ha ocurrido un error al eliminar la satisfaccion")
        }
    }

    async editar(body:any, id:number){
        try {
            const satisfaccion =await Satisfaccionmodel.findByPk(id)
            await satisfaccion?.update(body)
            return("satisfaccion editada con exito")
        } catch (error) {
            console.log(error)
            return("error al editar la satisfaccion")
        }
    }
}