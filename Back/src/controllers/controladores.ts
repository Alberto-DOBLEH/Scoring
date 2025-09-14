//Aqui va la logica que hay en cada endpoint
import { Alternativa } from "../clases/Alternativa";
import { Criterio } from "../clases/Criterio";
import { Proyecto } from "../clases/Proyecto";
import { Satisfaccion } from "../clases/Satisfaccion";
import { Request, Response } from "express"

export const prueba = async(req:Request, res:Response)=>{
    console.log ("funciona")
    res.json({
        msg:"simon si funciona"
    })
}

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

    const alternativa_añadida =  alternativa.añadir(body); //añade alternativas

    res.json({
        msg: alternativa_añadida
    }) 
}

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