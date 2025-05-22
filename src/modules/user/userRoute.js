import { Router } from 'express'
import * as userController from './userController.js'
const router = Router()

router.route('/').post(userController.create).get(userController.getAll)

router
  .route('/:id')
  .get(userController.getById)
  .put(userController.updateById)
  .delete(userController.deleteById)
export default router
