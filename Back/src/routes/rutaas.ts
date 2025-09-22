//Aqui se configuran las rutas de los endpoints
//cada funcion en controladores.ts se debe llamar desde aqui con el endpoint que hayas creado
import { Router } from "express";
import {
  createalternativa,
  getalternativas,
  prueba,
  createcriterio,
  getcriterios,
  createproyecto,
  getproyectos,
  createsatisfaccion,
  getsatisfaccion,
  deletealternativa,
  editalternativa,
  deletecriterio,
  editcriterio,
  deleteproeycto,
  editproyecto,
} from "../controllers/controladores";

const router = Router();
router.get("/", prueba); // prueba de que funciona el servidor

//CRUD ALTERNATIVAS
router.post("/createalternativa", createalternativa); //añade alternativas
router.get("/getalternativa/:id_proyecto", getalternativas); //lista las alternativas de un proyecto
router.delete("/deletealternativa/:id", deletealternativa); //elimina una alternativa
router.put("/editalternativa", editalternativa);

//CRUD CRITERIO
router.post("/createcriterio", createcriterio); //añade criterios
router.get("/getcriterio/:id_proyecto", getcriterios);  //lista los criterios de un proyecto
router.delete("/deletecriterio/:id", deletecriterio); //elimina un criterio
router.put("/editalternativa", editcriterio);

//CRUD PROYECTOS
router.post("/createproyecto", createproyecto); //añade proyectos
router.get("/getproyecto/:id_proyecto", getproyectos); //lista los proyectos de un usuario
router.delete("/deleteproyecto/:id", deleteproeycto); //elimina un proyecto
router.put("/editproyecto", editproyecto); //edita el proyecto

//CRUD SATISFACION
router.post("/createsatisfaccion", createsatisfaccion); //añade satisfaccion
router.get("/getsatisfaccion/:id_proyecto", getsatisfaccion); //lista la satisfaccion de un proyecto

export default router;
