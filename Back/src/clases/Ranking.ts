import Rankingmodel from "../models/Rankingmodel";

export class Ranking {

    async añadir(body: any){
        try{
            await Rankingmodel.create(body) //añade datos a la tabla
            console.log(body)
            return "Ranking añadido"
        }catch(error){
            console.error(error)
            return "No se pudo añadir el ranking"
        }
    }

    async obtener(id_ranking:number){
        try{
            return await Rankingmodel.findOne({
                where:{
                    id_ranking:id_ranking //lista de la tabla
                }
            })
        }catch(error){
            console.error(error)
            return ("Ha ocurrido un error al buscar la lista")
        }
    }

    async eliminar(id_ranking:number){
        try{
            return await Rankingmodel.destroy({
                where:{
                    id_ranking:id_ranking
                }
            })
        }catch(error){
            console.log(error)
            return ("Ha ocurrido un error al eliminar el ranking")
        }
    }

    async editar(body:any, id:number){
        try {
            const ranking =await Rankingmodel.findByPk(id)
            await ranking?.update(body)
            return("ranking editado con exito")
        } catch (error) {
            console.log(error)
            return("error al editar el ranking")
        }
    }
}