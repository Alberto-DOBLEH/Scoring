//Aqui va la logica que hay en cada endpoint
import { Alternativa } from "../clases/Alternativa";
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