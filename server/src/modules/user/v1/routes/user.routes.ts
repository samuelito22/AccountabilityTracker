import { Router } from 'express'
import { UserControllers } from '../controllers'
import { validateUserProfile } from '../validators'
import authCheck from '@/shared/middlewares/authCheck'

const router = Router()

router.use(authCheck)

router.post('/', validateUserProfile, UserControllers.createUser)

export default router
