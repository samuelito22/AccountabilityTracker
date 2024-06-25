import { Router } from 'express';
import { UserControllers } from '../controllers';
import { validateUserProfile } from '../validators';

const router = Router();

router.post('/', validateUserProfile, UserControllers.createUser)

export default router;