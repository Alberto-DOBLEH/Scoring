//Aqui va la logica que hay en cada endpoint
import { Alternativa } from "../clases/Alternativa";
import { Criterio } from "../clases/Criterio";
import { Proyecto } from "../clases/Proyecto";
import { Satisfaccion } from "../clases/Satisfaccion";
import { Ranking } from "../clases/Ranking";
import { Request, Response } from "express"

export const prueba = async(req:Request, res:Response)=>{
    console.log ("funciona")
    res.json({
        msg:"simon si funciona"
    })
}


//CRUD ALTERNATIVAS
export const getalternativas = async (req:Request, res:Response) =>{
    const {id_proyecto} = req.params;
    console.log(id_proyecto)
    const alternativa = new Alternativa()
    const listaalternativas = await alternativa.obtener(parseInt(id_proyecto)) //se listan las alternativas de un proyecto especifico
    res.json(listaalternativas)
}

export const createalternativa = (req: Request, res: Response) =>{
    const {body} = req;
    const alternativa = new Alternativa();
    
    const alternativa_añadida = alternativa.añadir(body); //añade alternativas

    res.json({
        msg: alternativa_añadida
    }) 
}

export const deletealternativa = (req:Request, res:Response) =>{
    const {id} = req.params;
    const alternativa = new Alternativa();

    const eliminado = alternativa.eliminar(parseInt(id));

    res.json({
        msg:eliminado
    })
}

export const editalternativa = (req:Request, res:Response) =>{
    const {body} = req;
    const {id_alternativa} = req.body

    const alternativa = new Alternativa();
    const editado = alternativa.editar(body, parseInt(id_alternativa))

    res.json({
        msg:editado
    })
}


//CRUD CRITERIO
export const getcriterios = async (req:Request, res:Response) =>{
    const {id_proyecto} = req.params;
    console.log(id_proyecto)
    const criterio = new Criterio()
    const listacriterios = await criterio.obtener(parseInt(id_proyecto)) //se listan los criterios de un proyecto especifico
    res.json(listacriterios)
}

export const createcriterio = (req: Request, res: Response) =>{
    const {body} = req;
    const criterio = new Criterio();
    const criterio_añadido =  criterio.añadir(body); //añade criterios
    res.json({
        msg: criterio_añadido
    }) 
}

export const deletecriterio = (req:Request, res:Response) =>{
    
    const {id} = req.params;
    const criterio = new Criterio();

    const eliminado = criterio.eliminar(parseInt(id));

    res.json({
        msg:eliminado
    })
}

export const editcriterio = (req:Request, res:Response) =>{
    const {body} = req;
    const {id_criterio} = req.body

    const criterio = new Criterio();
    const editado = criterio.editar(body, parseInt(id_criterio))

    res.json({
        msg:editado
    })
}

//CRUD PROYECTOS
export const getproyectos = async (req:Request, res:Response) =>{
    const {id_proyecto} = req.params;
    console.log(id_proyecto)
    const proyecto = new Proyecto()
    const listaproyectos = await proyecto.obtener(parseInt(id_proyecto)) //se listan los proyectos de un usuario especifico
    res.json(listaproyectos)
}

export const createproyecto = (req: Request, res: Response) =>{
    const {body} = req;
    const proyecto = new Proyecto();
    const proyecto_añadido =  proyecto.añadir(body); //añade proyectos
    res.json({
        msg: proyecto_añadido
    }) 
}

export const deleteproeycto = (req:Request, res:Response) =>{
    
    const {id} = req.params;
    const proyecto = new Proyecto();

    const eliminado = proyecto.eliminar(parseInt(id));

    res.json({
        msg:eliminado
    })
}

export const editproyecto = (req:Request, res:Response) =>{
    const {body} = req;
    const {id_proyecto} = req.body

    const proyecto = new Proyecto();
    const editado = proyecto.editar(body, parseInt(id_proyecto))

    res.json({
        msg:editado
    })
}



//CRUD SATISFACION
export const getsatisfaccion = async (req:Request, res:Response) =>{
    const {id_proyecto} = req.params;
    console.log(id_proyecto)
    const satisfaccion = new Satisfaccion()
    const listasatisfaccion = await satisfaccion.obtener(parseInt(id_proyecto)) //se listan las satisfacciones de un proyecto especifico
    res.json(listasatisfaccion)
}

export const createsatisfaccion = (req: Request, res: Response) =>{
    const {body} = req;
    const satisfaccion = new Satisfaccion();
    const satisfaccion_añadida =  satisfaccion.añadir(body); //añade satisfacciones
    res.json({
        msg: satisfaccion_añadida
    }) 
}

export const deletesatisfaccion = (req:Request, res:Response) =>{
    
    const {id} = req.params;
    const satisfaccion = new Satisfaccion();
    const eliminado = satisfaccion.eliminar(parseInt(id));

    res.json({
        msg:eliminado
    })
}

export const editsatisfaccion = (req:Request, res:Response) =>{
    const {body} = req;
    const {id_proyecto} = req.body
    const satisfaccion = new Satisfaccion();
    const editado = satisfaccion.editar(body, parseInt(id_proyecto))
    res.json({
        msg:editado
    })
}

//CRUD RANKING

export const getranking = async (req:Request, res:Response) =>{
    const {id_ranking} = req.params;
    console.log(id_ranking)
    const ranking = new Ranking()
    const listaranking = await ranking.obtener(parseInt(id_ranking)) //se listan los rankings de un proyecto especifico
    res.json(listaranking)
}

export const createranking = (req: Request, res: Response) =>{
    const {body} = req;
    const ranking = new Ranking();
    const ranking_añadido =  ranking.añadir(body); //añade rankings
    res.json({
        msg: ranking_añadido
    }) 
}

export const deleteranking = (req:Request, res:Response) =>{
    
    const {id} = req.params;
    const ranking = new Ranking();
    const eliminado = ranking.eliminar(parseInt(id));
    res.json({
        msg:eliminado
    })
}

export const editranking = (req:Request, res:Response) =>{
    const {body} = req;
    const {id_ranking} = req.body
    const ranking = new Ranking();
    const editado = ranking.editar(body, parseInt(id_ranking))
    res.json({
        msg:editado
    })
}