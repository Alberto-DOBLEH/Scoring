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
exports.Criterio = void 0;
const criteriomodel_1 = __importDefault(require("../models/criteriomodel"));
class Criterio {
    añadir(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield criteriomodel_1.default.create(body); //añade datos a la tabla
                console.log(body);
                return "Criterio añadido";
            }
            catch (error) {
                console.error(error);
                return "No se pudo añadir el criterio";
            }
        });
    }
    obtener(id_proyecto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield criteriomodel_1.default.findOne({
                    where: {
                        id_proyecto: id_proyecto, //lista de la tabla
                    },
                });
            }
            catch (error) {
                console.error(error);
                return "Ha ocurrido un error al buscar la lista";
            }
        });
    }
    // Moverle aqui para obtener uno
    eliminar(id_criterio) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield criteriomodel_1.default.destroy({
                    where: {
                        id_criterio: id_criterio,
                    },
                });
            }
            catch (error) {
                console.log(error);
                return "Ha ocurrido un error al eliminar el criterio";
            }
        });
    }
    editar(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const criterio = yield criteriomodel_1.default.findByPk(id);
                yield (criterio === null || criterio === void 0 ? void 0 : criterio.update(body));
                return "criterio editada con exito";
            }
            catch (error) {
                console.log(error);
                return "error al editar la criterio";
            }
        });
    }
}
exports.Criterio = Criterio;
