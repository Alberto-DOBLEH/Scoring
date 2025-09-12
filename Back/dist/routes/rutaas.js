"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Aqui se configuran las rutas de los endpoints
const express_1 = require("express");
const controladores_1 = require("../controllers/controladores");
const router = (0, express_1.Router)();
router.post('/createalternativa', controladores_1.createalternativa);
router.get('/getalternativa/:id_proyecto', controladores_1.getalternativas);
router.get('/', controladores_1.prueba);
exports.default = router;
