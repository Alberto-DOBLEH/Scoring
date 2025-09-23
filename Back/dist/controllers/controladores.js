"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editranking = exports.deleteranking = exports.createranking = exports.getranking = exports.editsatisfaccion = exports.deletesatisfaccion = exports.createsatisfaccion = exports.getsatisfaccion = exports.editproyecto = exports.deleteproeycto = exports.createproyecto = exports.getproyectos = exports.editcriterio = exports.deletecriterio = exports.createcriterio = exports.getcriterios = exports.editalternativa = exports.deletealternativa = exports.createalternativa = exports.getalternativas = exports.prueba = void 0;
//Aqui va la logica que hay en cada endpoint
const Alternativa_1 = require("../clases/Alternativa");
const Criterio_1 = require("../clases/Criterio");
const Proyecto_1 = require("../clases/Proyecto");
const Satisfaccion_1 = require("../clases/Satisfaccion");
const Ranking_1 = require("../clases/Ranking");
const prueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("funciona");
    res.json({
        msg: "simon si funciona"
    });
});
exports.prueba = prueba;
//CRUD ALTERNATIVAS
const getalternativas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_proyecto } = req.params;
    console.log(id_proyecto);
    const alternativa = new Alternativa_1.Alternativa();
    const listaalternativas = yield alternativa.obtener(parseInt(id_proyecto)); //se listan las alternativas de un proyecto especifico
    res.json(listaalternativas);
});
exports.getalternativas = getalternativas;
const createalternativa = (req, res) => {
    const { body } = req;
    const alternativa = new Alternativa_1.Alternativa();
    const alternativa_añadida = alternativa.añadir(body); //añade alternativas
    res.json({
        msg: alternativa_añadida
    });
};
exports.createalternativa = createalternativa;
const deletealternativa = (req, res) => {
    const { id } = req.params;
    const alternativa = new Alternativa_1.Alternativa();
    const eliminado = alternativa.eliminar(parseInt(id));
    res.json({
        msg: eliminado
    });
};
exports.deletealternativa = deletealternativa;
const editalternativa = (req, res) => {
    const { body } = req;
    const { id_alternativa } = req.body;
    const alternativa = new Alternativa_1.Alternativa();
    const editado = alternativa.editar(body, parseInt(id_alternativa));
    res.json({
        msg: editado
    });
};
exports.editalternativa = editalternativa;
//CRUD CRITERIO
const getcriterios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_proyecto } = req.params;
    console.log(id_proyecto);
    const criterio = new Criterio_1.Criterio();
    const listacriterios = yield criterio.obtener(parseInt(id_proyecto)); //se listan los criterios de un proyecto especifico
    res.json(listacriterios);
});
exports.getcriterios = getcriterios;
const createcriterio = (req, res) => {
    const { body } = req;
    const criterio = new Criterio_1.Criterio();
    const criterio_añadido = criterio.añadir(body); //añade criterios
    res.json({
        msg: criterio_añadido
    });
};
exports.createcriterio = createcriterio;
const deletecriterio = (req, res) => {
    const { id } = req.params;
    const criterio = new Criterio_1.Criterio();
    const eliminado = criterio.eliminar(parseInt(id));
    res.json({
        msg: eliminado
    });
};
exports.deletecriterio = deletecriterio;
const editcriterio = (req, res) => {
    const { body } = req;
    const { id_criterio } = req.body;
    const criterio = new Criterio_1.Criterio();
    const editado = criterio.editar(body, parseInt(id_criterio));
    res.json({
        msg: editado
    });
};
exports.editcriterio = editcriterio;
//CRUD PROYECTOS
const getproyectos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_proyecto } = req.params;
    console.log(id_proyecto);
    const proyecto = new Proyecto_1.Proyecto();
    const listaproyectos = yield proyecto.obtener(parseInt(id_proyecto)); //se listan los proyectos de un usuario especifico
    res.json(listaproyectos);
});
exports.getproyectos = getproyectos;
const createproyecto = (req, res) => {
    const { body } = req;
    const proyecto = new Proyecto_1.Proyecto();
    const proyecto_añadido = proyecto.añadir(body); //añade proyectos
    res.json({
        msg: proyecto_añadido
    });
};
exports.createproyecto = createproyecto;
const deleteproeycto = (req, res) => {
    const { id } = req.params;
    const proyecto = new Proyecto_1.Proyecto();
    const eliminado = proyecto.eliminar(parseInt(id));
    res.json({
        msg: eliminado
    });
};
exports.deleteproeycto = deleteproeycto;
const editproyecto = (req, res) => {
    const { body } = req;
    const { id_proyecto } = req.body;
    const proyecto = new Proyecto_1.Proyecto();
    const editado = proyecto.editar(body, parseInt(id_proyecto));
    res.json({
        msg: editado
    });
};
exports.editproyecto = editproyecto;
//CRUD SATISFACION
const getsatisfaccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_proyecto } = req.params;
    console.log(id_proyecto);
    const satisfaccion = new Satisfaccion_1.Satisfaccion();
    const listasatisfaccion = yield satisfaccion.obtener(parseInt(id_proyecto)); //se listan las satisfacciones de un proyecto especifico
    res.json(listasatisfaccion);
});
exports.getsatisfaccion = getsatisfaccion;
const createsatisfaccion = (req, res) => {
    const { body } = req;
    const satisfaccion = new Satisfaccion_1.Satisfaccion();
    const satisfaccion_añadida = satisfaccion.añadir(body); //añade satisfacciones
    res.json({
        msg: satisfaccion_añadida
    });
};
exports.createsatisfaccion = createsatisfaccion;
const deletesatisfaccion = (req, res) => {
    const { id } = req.params;
    const satisfaccion = new Satisfaccion_1.Satisfaccion();
    const eliminado = satisfaccion.eliminar(parseInt(id));
    res.json({
        msg: eliminado
    });
};
exports.deletesatisfaccion = deletesatisfaccion;
const editsatisfaccion = (req, res) => {
    const { body } = req;
    const { id_proyecto } = req.body;
    const satisfaccion = new Satisfaccion_1.Satisfaccion();
    const editado = satisfaccion.editar(body, parseInt(id_proyecto));
    res.json({
        msg: editado
    });
};
exports.editsatisfaccion = editsatisfaccion;
//CRUD RANKING
const getranking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_ranking } = req.params;
    console.log(id_ranking);
    const ranking = new Ranking_1.Ranking();
    const listaranking = yield ranking.obtener(parseInt(id_ranking)); //se listan los rankings de un proyecto especifico
    res.json(listaranking);
});
exports.getranking = getranking;
const createranking = (req, res) => {
    const { body } = req;
    const ranking = new Ranking_1.Ranking();
    const ranking_añadido = ranking.añadir(body); //añade rankings
    res.json({
        msg: ranking_añadido
    });
};
exports.createranking = createranking;
const deleteranking = (req, res) => {
    const { id } = req.params;
    const ranking = new Ranking_1.Ranking();
    const eliminado = ranking.eliminar(parseInt(id));
    res.json({
        msg: eliminado
    });
};
exports.deleteranking = deleteranking;
const editranking = (req, res) => {
    const { body } = req;
    const { id_ranking } = req.body;
    const ranking = new Ranking_1.Ranking();
    const editado = ranking.editar(body, parseInt(id_ranking));
    res.json({
        msg: editado
    });
};
exports.editranking = editranking;
