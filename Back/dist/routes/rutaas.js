"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Aqui se configuran las rutas de los endpoints
//cada funcion en controladores.ts se debe llamar desde aqui con el endpoint que hayas creado
const express_1 = require("express");
const controladores_1 = require("../controllers/controladores");
const router = (0, express_1.Router)();
router.get("/", controladores_1.prueba); // prueba de que funciona el servidor
//CRUD ALTERNATIVAS
router.post("/createalternativa", controladores_1.createalternativa); //añade alternativas
router.get("/getalternativa/:id_proyecto", controladores_1.getalternativas); //lista las alternativas de un proyecto
router.delete("/deletealternativa/:id", controladores_1.deletealternativa); //elimina una alternativa
router.put("/editalternativa", controladores_1.editalternativa);
//CRUD CRITERIO
router.post("/createcriterio", controladores_1.createcriterio); //añade criterios
router.get("/getcriterio/:id_proyecto", controladores_1.getcriterios); //lista los criterios de un proyecto
router.delete("/deletecriterio/:id", controladores_1.deletecriterio); //elimina un criterio
router.put("/editalternativa", controladores_1.editcriterio);
//CRUD PROYECTOS
router.post("/createproyecto", controladores_1.createproyecto); //añade proyectos
router.get("/getproyecto/:id_proyecto", controladores_1.getproyectos); //lista los proyectos de un usuario
router.delete("/deleteproyecto/:id", controladores_1.deleteproeycto); //elimina un proyecto
router.put("/editproyecto", controladores_1.editproyecto); //edita el proyecto
//CRUD SATISFACION
router.post("/createsatisfaccion", controladores_1.createsatisfaccion); //añade satisfaccion
router.get("/getsatisfaccion/:id_proyecto", controladores_1.getsatisfaccion); //lista la satisfaccion de un proyecto
exports.default = router;
