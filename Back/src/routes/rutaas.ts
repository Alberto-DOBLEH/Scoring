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
} from "../controllers/controladores";

const router = Router();
router.get("/", prueba); // prueba de que funciona el servidor
router.post("/createalternativa", createalternativa); //añade alternativas
router.get("/getalternativa/:id_proyecto", getalternativas); //lista las alternativas de un proyecto
router.post("/createcriterio", createcriterio); //añade criterios
router.get("/getcriterio/:id_proyecto", getcriterios);  //lista los criterios de un proyecto
router.post("/createproyecto", createproyecto); //añade proyectos
router.get("/getproyecto/:id_proyecto", getproyectos); //lista los proyectos de un usuario
router.post("/createsatisfaccion", createsatisfaccion); //añade satisfaccion
router.get("/getsatisfaccion/:id_proyecto", getsatisfaccion); //lista la satisfaccion de un proyecto

export default router;
