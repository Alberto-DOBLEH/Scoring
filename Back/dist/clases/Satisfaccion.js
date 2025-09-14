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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Satisfaccion = void 0;
const Satisfaccionmodel_1 = __importDefault(require("../models/Satisfaccionmodel"));
class Satisfaccion {
    añadir(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Satisfaccionmodel_1.default.create(body); //añade datos a la tabla
                console.log(body);
                return "Satisfaccion añadida";
            }
            catch (error) {
                console.error(error);
                return "No se pudo añadir la satisfaccion";
            }
        });
    }
    obtener(id_proyecto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Satisfaccionmodel_1.default.findOne({
                    where: {
                        id_proyecto: id_proyecto //lista de la tabla
                    }
                });
            }
            catch (error) {
                console.error(error);
                return ("Ha ocurrido un error al buscar la lista");
            }
        });
    }
}
exports.Satisfaccion = Satisfaccion;
