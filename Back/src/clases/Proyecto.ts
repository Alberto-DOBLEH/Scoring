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

    async eliminar(id_proyecto:number){
        try{
            return await Proyectomodel.destroy({
                where:{
                    id_proyecto:id_proyecto
                }
            })
        }catch(error){
            console.log(error)
            return ("Ha ocurrido un error al eliminar el proyecto")
        }
    }

    async editar(body:any, id:number){
        try {
            const proyecto =await Proyectomodel.findByPk(id)

            await proyecto?.update(body)
            return("proyecto editado con exito")
        } catch (error) {
            console.log(error)
            return("error al editar la proyecto")
        }
    } 
    
}