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
exports.Alternativa = void 0;
const Alternativamodel_1 = __importDefault(require("../models/Alternativamodel"));
class Alternativa {
    añadir(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Alternativamodel_1.default.create(body);
                console.log(body);
                return "alternativa añadida";
            }
            catch (error) {
                console.error(error);
                return "No se pudo añadir el usuariooo";
            }
        });
    }
    obtener(id_proyecto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Alternativamodel_1.default.findOne({
                    where: {
                        id_proyecto: id_proyecto
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
exports.Alternativa = Alternativa;
