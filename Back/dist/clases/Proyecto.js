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
exports.Proyecto = void 0;
const Proyectomodel_1 = __importDefault(require("../models/Proyectomodel"));
class Proyecto {
    añadir(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Proyectomodel_1.default.create(body); //añade datos a la tabla
                console.log(body);
                return "Proyecto añadido";
            }
            catch (error) {
                console.error(error);
                return "No se pudo añadir el proyecto";
            }
        });
    }
    obtener(id_proyecto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Proyectomodel_1.default.findOne({
                    where: {
                        id_proyecto: id_proyecto,
                    },
                });
            }
            catch (error) {
                console.error(error);
                return "Ha ocurrido un error al buscar la lista";
            }
        });
    }
    obtenerIDs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const proyectos = yield Proyectomodel_1.default.findAll({
                    attributes: ['id_proyecto'], // solo selecciona el id
                    raw: true,
                });
                // mapear a un array de solo ids
                return proyectos.map((p) => p.id_proyecto);
            }
            catch (error) {
                console.error(error);
                throw new Error("Error al obtener los IDs de los proyectos");
            }
        });
    }
    eliminar(id_proyecto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Proyectomodel_1.default.destroy({
                    where: {
                        id_proyecto: id_proyecto,
                    },
                });
            }
            catch (error) {
                console.log(error);
                return "Ha ocurrido un error al eliminar el proyecto";
            }
        });
    }
    editar(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const proyecto = yield Proyectomodel_1.default.findByPk(id);
                yield (proyecto === null || proyecto === void 0 ? void 0 : proyecto.update(body));
                return "proyecto editado con exito";
            }
            catch (error) {
                console.log(error);
                return "error al editar la proyecto";
            }
        });
    }
}
exports.Proyecto = Proyecto;
