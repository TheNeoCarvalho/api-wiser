import { Router } from 'express'
import linkController from '../controllers/linksController'

const router = Router()

router.post('/', linkController.postLink)

router.get('/:code', linkController.getLink)

export default router