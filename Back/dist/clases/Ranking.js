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
exports.Ranking = void 0;
const Rankingmodel_1 = __importDefault(require("../models/Rankingmodel"));
class Ranking {
    añadir(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Rankingmodel_1.default.create(body); //añade datos a la tabla
                console.log(body);
                return "Ranking añadido";
            }
            catch (error) {
                console.error(error);
                return "No se pudo añadir el ranking";
            }
        });
    }
    obtener(id_ranking) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Rankingmodel_1.default.findOne({
                    where: {
                        id_ranking: id_ranking //lista de la tabla
                    }
                });
            }
            catch (error) {
                console.error(error);
                return ("Ha ocurrido un error al buscar la lista");
            }
        });
    }
    eliminar(id_ranking) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Rankingmodel_1.default.destroy({
                    where: {
                        id_ranking: id_ranking
                    }
                });
            }
            catch (error) {
                console.log(error);
                return ("Ha ocurrido un error al eliminar el ranking");
            }
        });
    }
    editar(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ranking = yield Rankingmodel_1.default.findByPk(id);
                yield (ranking === null || ranking === void 0 ? void 0 : ranking.update(body));
                return ("ranking editado con exito");
            }
            catch (error) {
                console.log(error);
                return ("error al editar el ranking");
            }
        });
    }
}
exports.Ranking = Ranking;
