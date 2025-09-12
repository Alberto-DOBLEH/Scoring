//Aqui se configuran las rutas de los endpoints
import {Router} from 'express'
import { createalternativa, getalternativas, prueba } from '../controllers/controladores'

const router = Router()
router.post('/createalternativa', createalternativa) 
router.get('/getalternativa/:id_proyecto', getalternativas)
router.get('/', prueba)

export default router