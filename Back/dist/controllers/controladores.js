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
exports.createalternativa = exports.getalternativas = exports.prueba = void 0;
//Aqui va la logica que hay en cada endpoint
const Alternativa_1 = require("../clases/Alternativa");
const prueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("funciona");
    res.json({
        msg: "simon si funciona"
    });
});
exports.prueba = prueba;
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
