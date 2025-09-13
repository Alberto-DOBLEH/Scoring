//Aqui se configuran las rutas de los endpoints
//cada funcion en controladores.ts se debe llamar desde aqui con el endpoint que hayas creado
import {Router} from 'express'
import { createalternativa, getalternativas, prueba } from '../controllers/controladores'

const router = Router()
router.post('/createalternativa', createalternativa) 
router.get('/getalternativa/:id_proyecto', getalternativas)
router.get('/', prueba)

export default router